import React from "react";
import Button from "../Button/Button";

export default class EditCustomerPopup extends React.Component {



  editNameHandler = (e) => {
    // {
    //   console.log(this.props.editCustomer({
    //     ...this.props.selectedCustomer,
    //     name: e.target.value,
    //   }));
    // }

    this.props.editCustomer({
      ...this.props.selectedCustomer,
      name: e.target.value,
    });
  };
  editPhoneHandler = (e) => {
    this.props.editCustomer({
      ...this.props.selectedCustomer,
      phone: e.target.value,
    });
  };
  editEmailHandler = (e) => {
    this.props.editCustomer({
      ...this.props.selectedCustomer,
      email: e.target.value,
    });
  };
  editAddressHandler = (e) => {
    this.props.editCustomer({
      ...this.props.selectedCustomer,
      address: e.target.value,
    });
  };
  editGenderHandler = (e) => {
    this.props.editCustomer({
      ...this.props.selectedCustomer,
      gender: e.target.value,
    });
  };
  editNotesHandler = (e) => {
    this.props.editCustomer({
      ...this.props.selectedCustomer,
      notes: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="modal fade modalEdit className"
        id="modalEdit"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold text-secondary ml-5">
                تعديل
              </h4>

              <Button type="exit" />
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formNameEdit"
                  className="form-control validate text-right "
                  value={this.props.selectedCustomer.name}
                  onChange={this.editNameHandler}
                  placeholder="الأسم"
                />

                
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formPoneEdit"
                  className="form-control validate text-right"
                  value={this.props.selectedCustomer.phone}
                  onChange={this.editPhoneHandler}
                  placeholder="phone"
                />
               
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formEmailEdit"
                  className="form-control validate text-right"
                  value={this.props.selectedCustomer.email}
                  onChange={this.editEmailHandler}
                  placeholder="البريد الألكتروني"

                />
                
              </div>

              <div className="md-form mb-5">
                <input
                  type="text"
                  id="formAddressEdit"
                  className="form-control validate text-right"
                  value={this.props.selectedCustomer.address}
                  onChange={this.editAddressHandler}
                  placeholder="العنوان"

                />
              
              </div>

              <div className="md-form mb-5">
                <select
                  id="inputState"
                  value={this.props.selectedCustomer.gender}
                  onChange={this.editGenderHandler}
                  className="form-control text-right "
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
                  id="formNoteEdit"
                  className="form-control validate text-right"
                  value={this.props.selectedCustomer.notes}
                  onChange={this.editNotesHandler}
                  placeholder="الملاحضات"
                />
                
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center editInsideWrapper">
              <Button
                type="updateApi"
                updateCustomerApi={this.props.updateCustomerApi}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
