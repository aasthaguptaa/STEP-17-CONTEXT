import React from 'react';
import { Component } from "react";
import { FamilyConsumer } from "../context/family.context";

class ChildComp extends Component{
   
    render(){
        return  <div style={ {border : "2px solid red", width: "1000px", margin: "10px", padding: "10px", display: "table"}}>
                    <h1>Hello from Child Component</h1>
                    <hr/>
                    <FamilyConsumer> 
                        { (value)=> <h2>{value}</h2>} 
                    </FamilyConsumer>
                </div>
    }
}
export default ChildComp;