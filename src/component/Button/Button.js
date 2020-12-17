import React from "react";
import "./Button.css" 
import { connect } from 'react-redux';

 class Button extends React.Component {
  render() {
    if (this.props.type === "delete") {
      return (
        <div className="text-center">
          <button
            className="button btn-sm "
            data-toggle="modal"
            data-target="#modalDelete"
          >
             <img className="img" src="icons/delete.png"/>
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
             <img className="img" src="icons/plus.png"/>

          </button>
        </div>
      );
    }

    if (this.props.type === "edit") {
      return (
        <div className="  text-center buttonEditWrapper">
          <button
            className="button btn-sm "
            data-toggle="modal"
            data-target="#modalEdit"
           
          >
             <img className="img" src="icons/edit.png"/>
          </button>
        </div>
      );
    }
  }
}

function mapStateToProps(state)  {
  return(
        { selectedId:state.selectedId}
  )
  
}

export default connect(mapStateToProps)(Button);

