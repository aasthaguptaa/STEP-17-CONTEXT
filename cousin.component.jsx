import React, { Component } from 'React';
import { FamilyConsumer } from "../context/family.context";

class CousinComp extends Component{
    render(){
        return  <div style={ {border : "2px solid red", width: "1000px", margin: "10px", padding: "10px", display: "table"}}>
                    <h1>Hello from Cousin Component</h1>
                    <hr/>
                    {/* <FamilyConsumer> { (value)=> <h2>{value}</h2>}</FamilyConsumer>
                    <GeneralContext.Consumer> { (value)=> <h2>{value}</h2>} </GeneralContext.Consumer> */}
                    <FamilyConsumer>{ (msg)=> {
                        return <GeneralContext.Consumer> { (ver)=> <h2>{msg} | {ver}</h2>} </GeneralContext.Consumer>
                    }}</FamilyConsumer>
                        </div>
    }

}

export default CousinComp;