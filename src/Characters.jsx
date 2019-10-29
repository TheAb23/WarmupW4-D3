import React, { Component } from "react";
export default class Character extends Component {
  render() {
    return (
<div className = 'card'>
            <div>
       <img src={this.props.imgSrc}/>
       <h1>{this.props.charName}</h1>
       <h1>House:  {this.props.houseName}</h1>
      </div>
      </div>
    );
  }
}


