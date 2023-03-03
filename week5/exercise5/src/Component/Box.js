import React, { Component } from "react";
import Button from "./Button"

class Box extends Component {
  
    render() {
      return (
        <div className="box_container">
          <div className="data_container">
            <div>
              <h2>{this.props.type}</h2>
              <h4>{this.props.title}</h4>
              <p>{this.props.data}</p>
            </div>
            <img src={this.props.img} alt=""></img>
            <div className="btn_container"></div>
          </div>
          <div >
            <Button/>
          </div>
        </div>
      );
    }
  }
  export default Box;
