import React from "react";
import Popup from "../../component/PupUp/PopUp";
import Button from "./../../component/Button/Button";
import { connect } from "react-redux";
import { getAllCustomers } from "../../redux/Action/CustomerAction";
import TableContainer from "./../../component/Table/TableContainer";
import SearchBox from "./../../component/SearchBox/SearchBox";
class Home extends React.Component {
  async componentDidMount() {
    this.props.dispatch(getAllCustomers());
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center m-2 ">
          <Button type={"add"} />


          <SearchBox />
        </div>
        <TableContainer />
        <Popup />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { allCustomers: state.allCustomers };
}

export default connect(mapStateToProps)(Home);
