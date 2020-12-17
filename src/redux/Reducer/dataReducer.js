import {CUSTOMER_DATA_FAILED , CUSTOMER_DATA_LOADING , CUSTOMER_DATA_FETCHED , ADD_CUSTOMER ,EDIT_CUSTOMER} from "../ActionType";

const initialState = {
  selectedCustomer: {
    name: " ",
    phone: " ",
    email: " ",
    gender: " ",
    notes: " ",
    address: " ",
  },
  newCustomer: {
    name: " ",
    phone: " ",
    email: " ",
    gender: " ",
    notes: " ",
    address: " ",
  },
  allCustomers: { loading: false, error: null, customers: [] },
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        newCustomer: action.payload,
      };
    case EDIT_CUSTOMER:
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
        allCustomers: { loading: false, error: null, customers: action.payload },
      };

    case CUSTOMER_DATA_FAILED:
      return {
        ...state,
        allCustomers: { loading: false, error: action.payload, customers: [] },
      };

    default:
      return state;
  }
};

export default customerReducer;
