import Axios from "axios";

export default class CustomerRepository {
  url = "http://127.0.0.1:8000/api/customer";

  getCustomers = async () => {
    const response = await Axios.get(this.url);
    return response.data;
  };



  searchCustomer = async (nameOfCustomer) => {
    console.log(nameOfCustomer);
    const response = await Axios.post(this.url + "/SEARCH", nameOfCustomer);
    return response.data;
  };
  postCustomer = async (customerData) => {
    await Axios.post(this.url, customerData);
  };

  updateCustomer = async (customerData, id) => {
    await Axios.put(this.url + "/" + id, customerData);
  };

  deleteACustomer = async (id) => {
    await Axios.delete(this.url + "/" + id);
  };
}
