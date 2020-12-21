import React from "react";
import Button from "../Button/Button";
export default class DeletePopup extends React.Component {
	render() {
		return (
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
								هل انك متأكد من حذف {this.props.selectedCustomer.name}?
			  </p>
						</div>
						<div className="modal-footer d-flex justify-content-center deleteButtonsWrapper">
							<Button
								type="deleteApi"
								deleteCustomerApi={this.props.deleteCustomerApi}
							/>
							<Button type="cancel" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
