import CustomerRepository from "../../Repository";
import {
  CUSTOMER_DATA_FAILED,
  CUSTOMER_DATA_LOADING,
  CUSTOMER_DATA_FETCHED,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  CUSTOMER_SEARCH_FAILED,
  CUSTOMER_SEARCH_FETCHED,
  CUSTOMER_SEARCH_LOADING,
} from "../ActionType";

export function getAllCustomers() {
  return async function (dispatch) {
    dispatch({ type: CUSTOMER_DATA_LOADING });
    const repository = new CustomerRepository();
    try {
      const customers = await repository.getCustomers();
      dispatch({ type: CUSTOMER_DATA_FETCHED, payload: customers });
    } catch (e) {
      dispatch({ type: CUSTOMER_DATA_FAILED, payload: e });
    }
  };
}

export function searchInCustomers(customerName) {
  return async function (dispatch) {
    dispatch({ type: CUSTOMER_SEARCH_LOADING });
    const repository = new CustomerRepository();
    try {
      const searchCustomers = await repository.searchCustomer({
        name: customerName,
      });

      dispatch({ type: CUSTOMER_SEARCH_FETCHED, payload: searchCustomers });
    } catch (e) {
      dispatch({ type: CUSTOMER_SEARCH_FAILED, payload: e });
    }
  };
}

export function editCustomer(selectedCustomer) {
  return {
    type: EDIT_CUSTOMER,
    payload: selectedCustomer,
  };
}

export function addCustomer(newCustomer) {
  return {
    type: ADD_CUSTOMER,
    payload: newCustomer,
  };
}
