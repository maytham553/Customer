import React from "react";
import CustomerTable from "./CustomerTable";
import { connect } from "react-redux";
import { editCustomer } from "../../redux/Action/CustomerAction";
import './TableContainer.css'
class TableContainer extends React.Component {
  render() {
    if (this.props.allCustomers.customers.length!== 0) {
      return (
        <CustomerTable
          allCustomers={this.props.allCustomers}
          editCustomer={this.props.editCustomer}
        />
      );
    }
    if (this.props.allCustomers.loading === true) {
      return (

        <div class="alert alert-success ">
        <h4>جار التحميل ...</h4>
      </div>
      );
    } 
    if (this.props.allCustomers.error !== null) {
      return (
        <div  class="alert alert-danger ">
          <h4> يبدو ان هنالك خطأ في الاتصال</h4>
        </div>
      );
    }else {
      return (
        <div class="alert alert-dark " >
          <h4 >لا توجد بيانات</h4>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCustomer: state.selectedCustomer,
    allCustomers: state.allCustomers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editCustomer: (selectedCustomer) =>
      dispatch(editCustomer(selectedCustomer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
