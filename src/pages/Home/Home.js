import React from "react";
import CustomerTable from "./../../component/Table/CustomerTable";
import Popup from "./../../component/PupUp/PupUp";
import Button from "./../../component/Button/Button";
import { connect } from "react-redux";
import { getAllCustomers } from "../../redux/Action/CustomerAction";

class Home extends React.Component {



  async componentDidMount() {
    this.props.dispatch(getAllCustomers())
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-around m-2 ">
          <Button type={"add"} />
          <Button type={"edit"} />
          <Button type={"delete"} />
        </div>
        <CustomerTable/>
        <Popup />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { allCustomers: state.allCustomers };
}

export default connect(mapStateToProps)(Home);
