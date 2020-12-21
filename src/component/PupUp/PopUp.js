import React from "react";
import { connect } from "react-redux";
import { editCustomer } from "../../redux/Action/CustomerAction";
import { addCustomer } from "../../redux/Action/CustomerAction";
import CustomerRepository from "../../Repository";
import { getAllCustomers } from "../../redux/Action/CustomerAction";
import EditCustomerPopup from "./EditCustomerPopup";
import AddCustomerPopup from "./AddCustomerPopup";
import DeletePopup from "./DeletePopup";
class Popup extends React.Component {
  updateCustomerApi = async () => {
    const repository = new CustomerRepository();
    try {
      await repository.updateCustomer(
        this.props.selectedCustomer,
        this.props.selectedCustomer.id
      );
      alert("تم تعديل العنصر بنجاح");
      this.props.loadAllCustomer();
    } catch (e) {
      alert(" لم يتم تعديل العنصر بنجاح... تحقق من الاتصال");
    }
  };

  addCustomerApi = async () => {
    const repository = new CustomerRepository();
    try {
      await repository.postCustomer(this.props.newCustomer);
      alert("تم اضافة العنصر بنجاح");
      this.props.loadAllCustomer();
      this.props.addCustomer({
        name: "",
        phone: "",
        email: "",
        gender: "",
        address: "",
        notes: "",
      });
    } catch (e) {
      alert(" لم يتم اضافة العنصر بنجاح... تحقق من الاتصال");
    }
  };

  deleteCustomerApi = async () => {
    const repository = new CustomerRepository();
    try {
      await repository.deleteACustomer(this.props.selectedCustomer.id);
      alert("تم مسح العنصر بنجاح");
      this.props.loadAllCustomer();
    } catch (e) {
      alert(" لم يتم مسح العنصر بنجاح... تحقق من الاتصال");
    
  }; }

  render() {
    return (
      <div className="row d-flex justify-content-center modalWrapper">
        <AddCustomerPopup
          newCustomer={this.props.newCustomer}
          addCustomer={this.props.addCustomer}
          addCustomerApi={this.addCustomerApi}
        />

        <EditCustomerPopup
          selectedCustomer={this.props.selectedCustomer}
          editCustomer={this.props.editCustomer}
          updateCustomerApi={this.updateCustomerApi}
        />

        <DeletePopup
          selectedCustomer={this.props.selectedCustomer}
          deleteCustomerApi={this.deleteCustomerApi}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCustomer: state.selectedCustomer,
    newCustomer: state.newCustomer,
    allCustomers: state.allCustomers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editCustomer: (selectedCustomer) =>
      dispatch(editCustomer(selectedCustomer)),
    addCustomer: (newCustomer) => dispatch(addCustomer(newCustomer)),
    loadAllCustomer: () => dispatch(getAllCustomers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
