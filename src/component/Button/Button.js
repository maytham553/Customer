import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  render() {

    
    if (this.props.type === "delete") {
      return (
        <div className="text-center">
          <button
            onClick={() => {
              this.props.editCustomer(this.props.customer);
            }}
            className="button btn-sm "
            data-toggle="modal"
            data-target="#modalDelete"
          >
            <img alt="edit" className="img_icon" src="icons/delete.png" />
          </button>
        </div>
      );
    }

    if (this.props.type === "add") {
      return (
        <div className="text-center">
          <button
            href="#"
            className=" button btn-sm"
            data-toggle="modal"
            data-target="#modalAdd"
          >
            <img className="img_add_icon" src="icons/plus.png" alt="add" />
          </button>
        </div>
      );
    }

    if (this.props.type === "edit") {
      return (
        <div className="  text-center buttonEditWrapper">
          <button
            onClick={() => {
              this.props.editCustomer(this.props.customer);
            }}
            className="button btn-sm "
            data-toggle="modal"
            data-target="#modalEdit"
          >
            <img className="img_icon" src="icons/edit.png" alt="delete" />
          </button>
        </div>
      );
    }

    if (this.props.type === "exit") {
      return (
        <button
          type="button"
          className="close text-secondary"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      );
    }

    if (this.props.type === "updateApi") {
      return (
        <button
          className="btn btn-outline-secondary btn-block editInside"
          data-dismiss="modal"
          onClick={this.props.updateCustomerApi}
        >
          تحديث
        </button>
      );
    }

    if (this.props.type === "addApi") {
      return (
        <button
          className="btn btn-outline-secondary btn-block editInside"
          data-dismiss="modal"
          onClick={this.props.addCustomerApi}
        >
          أضافة
        </button>
      );
    }

    if (this.props.type === "deleteApi") {
      return (
        <button
          type="button"
          className="btn btn-danger btnYes className"
          id="btnYes"
          data-dismiss="modal"
          onClick={this.props.deleteCustomerApi}
        >
          نعم
        </button>
      );
    }

    if (this.props.type === "cancel") {
      return (
        <button
          type="button"
          className="btn btn-primary btnNo className"
          id="btnNo"
          data-dismiss="modal"
        >
          لا
        </button>
      );
    }


  }
}
