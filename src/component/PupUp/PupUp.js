import React from "react";
import { connect } from "react-redux";
import { editCustomer } from "../../redux/Action/CustomerAction";
import { addCustomer } from "../../redux/Action/CustomerAction";

class Popup extends React.Component {
  editNameHandler = (e) => {
    this.props.editCustomer({ ...this.props.selectedCustomer, name: e.target.value });
  };
  editPhoneHandler = (e) => {
    this.props.editCustomer({ ...this.props.selectedCustomer, phone: e.target.value });
  };
  editEmailHandler = (e) => {
    this.props.editCustomer({ ...this.props.selectedCustomer, email: e.target.value });
  };
   editAddressHandler = (e) => {
    this.props.editCustomer({
      ...this.props.item,
      address: e.target.value,
    });
  };
  editGenderHandler = (e) => {
    this.props.editCustomer({ ...this.props.newCustomer, gender: e.target.value });
  };
  editNotesHandler = (e) => {
    this.props.editCustomer({ ...this.props.newCustomer, notes: e.target.value });
  };

  newNameHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, name: e.target.value });
  };
  newPhoneHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, phone: e.target.value });
  };
  newEmailHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, email: e.target.value });
  };
  newAddressHandler = (e) => {
    this.props.addCustomer({
      ...this.props.item,
      address: e.target.value,
    });
  };
  newGenderHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, gender: e.target.value });
  };
  newNotesHandler = (e) => {
    this.props.addCustomer({ ...this.props.newCustomer, notes: e.target.value });
  };

  render() {
    return (
      <div className="row d-flex justify-content-center modalWrapper">
        {
          //-------------------------the start of add form ---------------------------//
        }
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
                <h4 className="modal-title w-100 font-weight-bold text-primary ml-5">
                  Add new form
                </h4>
                <button
                  type="button"
                  className="close text-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formNameEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.name}
                    onChange={this.newNameHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formNameEdit"
                  >
                    Name
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formPositionEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.phone}
                    onChange={this.newPhoneHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formPositionEdit"
                  >
                    Phone
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formOfficeEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.email}
                    onChange={this.newEmailHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formOfficeEdit"
                  >
                    Email
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formAgeEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.address}
                    onChange={this.newAddressHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formAgeEdit"
                  >
                    address
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formGenderEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.gender}
                    onChange={this.newGenderHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formGenderEdit"
                  >
                    gender
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formNoteEdit"
                    className="form-control validate"
                    value={this.props.newCustomer.notes}
                    onChange={this.newNotesHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formNoteEdit"
                  >
                    notes
                  </label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center buttonAddFormWrapper">
                <button
                  className="btn btn-outline-primary btn-block buttonAdd"
                  data-dismiss="modal"
                  onClick={() => {
                    alert(this.props.newCustomer.name);
                  }}
                >
                  Add form
                  <i className="fas fa-paper-plane-o ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          //-------------------------the start of edit form ---------------------------//
        }
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
                  Edit form
                </h4>
                <button
                  type="button"
                  className="close text-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formNameEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.name}
                    onChange={this.editNameHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formNameEdit"
                  >
                    Name
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formPositionEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.phone}
                    onChange={this.editPhoneHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formPositionEdit"
                  >
                    Phone
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formOfficeEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.email}
                    onChange={this.editEmailHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formOfficeEdit"
                  >
                    Email
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formAgeEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.address}
                    onChange={this.editAddressHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formAgeEdit"
                  >
                    address
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formGenderEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.gender}
                    onChange={this.editGenderHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formGenderEdit"
                  >
                    gender
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="formNoteEdit"
                    className="form-control validate"
                    value={this.props.selectedCustomer.notes}
                    onChange={this.editNotesHandler}
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="formNoteEdit"
                  >
                    notes
                  </label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center editInsideWrapper">
                <button
                  className="btn btn-outline-secondary btn-block editInside"
                  data-dismiss="modal"
                  onClick={() => {
                    alert(this.props.editCustomer.name);
                  }}
                >
                  Edit form
                  <i className="fas fa-paper-plane-o ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          //-------------------------the start of delete form ---------------------------//
        }{" "}
        <div
          className="modal fade"
          id="modalDelete"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalDelete"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold ml-5 text-danger">
                  Delete
                </h4>
                <button
                  type="button"
                  className="close text-danger"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <p className="text-center h4">
                  Are you sure to delete selected customer?
                </p>
              </div>
              <div className="modal-footer d-flex justify-content-center deleteButtonsWrapper">
                <button
                  type="button"
                  className="btn btn-danger btnYes className"
                  id="btnYes"
                  data-dismiss="modal"
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-primary btnNo className"
                  id="btnNo"
                  data-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedCustomer: state.selectedCustomer, newCustomer: state.newCustomer };
}

function mapDispatchToProps(dispatch) {
  return {
    editCustomer: (selectedCustomer) => dispatch(editCustomer(selectedCustomer)),
    addCustomer: (newCustomer) => dispatch(addCustomer(newCustomer)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
