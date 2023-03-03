import React, { Component } from "react";

class Button extends Component {
    state = {
        msg: 'MIN',
        count: 0
        
    }
    checkUnVote () {
        var num = this.state.count;
        var msg = '';
        if(num > 0){
            num -= 1
            if (num === 0) {
                msg = 'MIN';
            } 
            else if(num === 10){
                msg = 'MAX';
            }
            else{
                msg = num;
            }
            this.setState({
                msg: msg,
                count: num
            })  
        }
        else{
            alert("Cannot unvote");
        }

    }
    checkVote () {
        var num = this.state.count;
        var msg = '';
        if(num < 10){
            num += 1
            if (num === 0) {
                msg = 'MIN';
            } 
            else if(num === 10){
                msg = 'MAX';
            }
            else{
                msg = num;
            }
            this.setState({
                msg: msg,
                count: num
            })  
        }
        else{
            alert("Cannot Vote more");
        }

    }
    render() {
        const {msg} =this.state;
      return (
        <div className="vote_container">
            <button onClick={this.checkVote.bind(this)}>Click to Vote</button>
            <div className="result">{msg}</div>
            <button onClick={this.checkUnVote.bind(this)}>Click to UnVote</button>
        </div>
      );
    }
  }

  export default Button;
