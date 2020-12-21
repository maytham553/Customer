import {
  CUSTOMER_DATA_FAILED,
  CUSTOMER_DATA_LOADING,
  CUSTOMER_DATA_FETCHED,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  CUSTOMER_SEARCH_LOADING,
  CUSTOMER_SEARCH_FETCHED,
  CUSTOMER_SEARCH_FAILED,
} from "../ActionType";

const initialState = {
  selectedCustomer: {
    id:"",
    name: "",
    phone: "",
    email: "",
    gender: "",
    notes: "",
    address: "",
  },
  newCustomer: {
    name: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    notes: "",
  },

 
  allCustomers: { loading: true, error: null, customers: [] },
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
     
      return {
        ...state,
        newCustomer:action.payload,
      };
    case EDIT_CUSTOMER:
      console.log( {...state,
        newCustomer:action.payload})
      return {
        ...state,
        selectedCustomer: action.payload,
      };

    case CUSTOMER_DATA_LOADING:
      return {
        ...state,
        allCustomers: { loading: true, error: null, customers: [] },
      };

    case CUSTOMER_DATA_FETCHED:
      return {
        ...state,
        allCustomers: {
          loading: false,
          error: null,
          customers: action.payload,
        },
      };

    case CUSTOMER_DATA_FAILED:
      return {
        ...state,
        allCustomers: { loading: false, error: action.payload, customers: [] },
      };

      case CUSTOMER_SEARCH_LOADING:
        return {
          ...state,
          allCustomers: { loading: true, error: null, customers: [] },
        };
  
      case CUSTOMER_SEARCH_FETCHED:
        return {
          ...state,
          allCustomers: {
            loading: false,
            error: null,
            customers: action.payload,
          },
        };
  
      case CUSTOMER_SEARCH_FAILED:
        return {
          ...state,
          allCustomers: { loading: false, error: action.payload, customers: [] },
        };
        
      

      

    default:
      return state;
  }
};

export default customerReducer;
