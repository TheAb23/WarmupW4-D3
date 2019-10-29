import React, { Component } from "react";
import Houses from './Houses' ;
import "./styles.css"
import Characters from './Characters';
import Homes from "./Homes";
class App extends Component {
   Houses =Houses.map(ele=>{
    return <Homes houseName={ele.houseName}imgSrc={ele.imgSrc}founder ={ele.founder} houseelement = {ele.houseelement}/> })
 Characters=Houses.map(ele=>{
  return <Characters charName={ele.notableCharacter.charName}imgSrc ={ele.notableCharacter.imgSrc}
  houseName={ele.houseName}/> })
  render() {
    return (
      <div>
      <div>
        <h1>Houses</h1>
        <div>
    {this.Houses}
      </div>
      </div>
      <div>
        <h1>Characters</h1>
        <div>
        {this.Characters}
        </div>
        </div>
      </div>
    );
  }

}
export default App;
