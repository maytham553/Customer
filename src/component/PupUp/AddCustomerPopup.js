import React from "react";
import Button from "../Button/Button";

export default class AddCustomerPopup extends React.Component {
  newNameHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, name: e.target.value });
  };
  newPhoneHandler = (e) => {
    this.props.addCustomer({
      ...this.props.newCustomer,
      phone: e.target.value,
    });
  };
  newEmailHandler = (e) => {
    this.props.addCustomer({
      ...this.props.newCustomer,
      email: e.target.value,
    });
  };
  newAddressHandler = (e) => {
    this.props.addCustomer({
      ...this.props.newCustomer,
      address: e.target.value,
    });
  };
  newGenderHandler = (e) => {
    this.props.addCustomer({
      ...this.props.newCustomer,
      gender: e.target.value,
    });
  };
  newNotesHandler = (e) => {
    this.props.addCustomer({
      ...this.props.newCustomer,
      notes: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="modal fade addNewInputs"
        id="modalAdd"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalAdd"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">

              <Button type="exit" />

            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formNameAdd"
                  className="form-control text-right validate"
                  value={this.props.newCustomer.name}
                  onChange={this.newNameHandler}
                  placeholder="الأسم"
                />
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formPhoneAdd"
                  className="form-control text-right validate"
                  value={this.props.newCustomer.phone}
                  onChange={this.newPhoneHandler}
                  placeholder="رقم الهاتف"
                />
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formEmailAdd"
                  className="form-control text-right validate"
                  value={this.props.newCustomer.email}
                  onChange={this.newEmailHandler}
                  placeholder="البريد الالكتروني"
                />
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formAddressAdd"
                  className="form-control text-right validate"
                  value={this.props.newCustomer.address}
                  onChange={this.newAddressHandler}
                  placeholder="العنوان"
                />
              </div>
              <div className="md-form mb-5">
                <select
                  id="inputState"
                  value={this.props.newCustomer.gender}
                  onChange={this.newGenderHandler}
                  className="form-control text-right"
                >
                  <option defaultValue="" hidden>
                    الجنس
                  </option>
                  <option>ذكر</option>
                  <option>انثى</option>
                </select>
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formNoteAdd"
                  className="form-control text-right validate"
                  value={this.props.newCustomer.notes}
                  onChange={this.newNotesHandler}
                  placeholder="الملاحضات"
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center buttonAddFormWrapper">
              <Button
                type="addApi"
                addCustomerApi={this.props.addCustomerApi}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
