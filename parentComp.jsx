import React from 'react';
import { Component } from "react";
import GeneralContext from '../context/gen.context';
import ChildComp from './childComp';

class ParentComp extends Component{
   
    render(){
        return  <div style={ {border : "2px solid red", width: "1050px", margin: "10px", padding: "10px", display: "table"}}>
                    <h1>Hello from Parent Component</h1>
                    <GeneralContext.Consumer> { (value)=> <h2>{value}</h2>} </GeneralContext.Consumer>
                    <hr/>
                    <ChildComp/>
                </div>
    }
}
export default ParentComp;
