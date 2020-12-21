import { timers } from "jquery";
import React from "react";
import { connect } from "react-redux";
import { searchInCustomers } from "../../redux/Action/CustomerAction";
import { getAllCustomers } from "../../redux/Action/CustomerAction";


class SearchBox extends React.Component {


  searchNameHandler = (e) =>{
  
    if (e.target.value.length !== 0 || e.target.value.indexOf(' ') >=! 0 ) {
      this.props.dispatch(searchInCustomers(e.target.value))
    }else{
      this.props.dispatch(getAllCustomers())
    }
    
  }
  render() {
    return (
      <div className="input-group w-50   mb-3 ">
        <input
          type="text"
          className="form-control text-right"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="البحث"
          onChange={this.searchNameHandler}
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { allCustomers: state.allCustomers  , 
    searchName: state.searchName };
}

export default connect(mapStateToProps)(SearchBox);
