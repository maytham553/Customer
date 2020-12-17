import React from "react";
import "./Table.css";
import { connect } from "react-redux";
import { editCustomer } from "../../redux/Action/CustomerAction";

class CustomerTable extends React.Component {
  dataCustomers = this.props.allCustomers.customers.data ;
  render() {
    return (
      <div className={"table-responsive table-wrapper"}>
        <table
          className="table table-bordered  table-striped  table-hover width-100  "
          width="100%"
        >
          <thead>
            <tr id="headerRow">
              <th className="th-sm">Name</th>
              <th className="th-sm">phone</th>
              <th className="th-sm">email</th>
              <th className="th-sm">address</th>
              <th className="th-sm">gender</th>
              <th className="th-sm">notes</th>
            </tr>
          </thead>
          {this.dataCustomers.map((customer, index) => {
            return (
              <tbody key={index}>

                <tr
                  className="h-auto"
                  onClick={() => {
                    this.props.dispatch(editCustomer(customer));
                  }}
                >
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.notes}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCustomer: state.selectedCustomer, allCustomers: state.allCustomers };
}


export default connect(mapStateToProps)(CustomerTable);
