import React from "react";
import { connect } from "react-redux";
import Button from "./../Button/Button";
export default class TableCard extends React.Component {
  render() {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-block">
            <h6 className="card-title">{this.props.customer.name}</h6>
            <h6 className="card-subtitle text-muted">
              <small>{this.props.customer.phone}</small>
            </h6>
            <h6 className="card-subtitle text-muted">
              <small>{this.props.customer.email}</small>
            </h6>
            <div>
              <small>{this.props.customer.gender}</small>
            </div>
            <div>
              <small>{this.props.customer.address}</small>
            </div>
            <p>
              <small>{this.props.customer.notes}</small>
            </p>

            <div className="d-flex justify-content-center">
              <Button
                editCustomer={this.props.editCustomer}
                customer={this.props.customer}
                type={"edit"}
              />
              <Button
                editCustomer={this.props.editCustomer}
                customer={this.props.customer}
                type={"delete"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


