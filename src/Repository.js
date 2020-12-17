import Axios from "axios";

export default class CustomerRepository {
  url = "http://127.0.0.1:8000/api/customer";

  getCustomers = async () => {
    try {
      const customers = await Axios.get(this.url);
      return customers;
    } catch {
      alert(" يبدو انك غير متصل بالسيرفر ..تأكد من اتصالك وعاود المحاولة ");
    }
  };

  getACustomer = async (id) => {
    try {
      const customer = await Axios.get(this.url + "/" + id);
      return customer;
    } catch {
      console.log(
        " يبدو انك غير متصل بالسيرفر ..تأكد من اتصالك وعاود المحاولة "
      );
    }
  };
  postItem = async (customerData) => {
    await Axios.post(this.url, customerData);
  };

  UpdateItem = async (customerData, id) => {
    await Axios.put(this.url + "/" + id, customerData);
  };

  DeleteACustomer = async (id) => {
    await Axios.delete(this.url + "/" + id);
  };
}
