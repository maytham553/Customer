import Repository from "../../Repository";
import {CUSTOMER_DATA_FAILED , CUSTOMER_DATA_LOADING , CUSTOMER_DATA_FETCHED , ADD_CUSTOMER ,EDIT_CUSTOMER} from "../ActionType";

export function getAllCustomers() {
  return async function (dispatch) {
    dispatch({ type: CUSTOMER_DATA_LOADING });
    const repository = new Repository();
    try {
      const customers = await repository.getCustomers();
      dispatch({ type: CUSTOMER_DATA_FETCHED, payload: customers });
    } catch (e) {
      dispatch({ type: CUSTOMER_DATA_FAILED, payload: e });
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
