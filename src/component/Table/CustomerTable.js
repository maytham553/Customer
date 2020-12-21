import React from "react";
import TableCard from "./TableCard";

export default class CustomerTable extends React.Component {

  render() {
    return (
      <div className="py-5">
        <div className="container">

          <div className="row hidden-md-up">

            {this.props.allCustomers.customers.map((customer, index) => {
              return (
                <TableCard
                  editCustomer={this.props.editCustomer}
                  customer={customer}
                  key={index}
                />
               
              );
            })}
          </div>
        </div>
      </div>
    
    );
  }
}
