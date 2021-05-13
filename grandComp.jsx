import React, { Component } from "react";
import { FamilyProvider } from "../context/family.context";
import ParentComp from './parentComp';
import CousinComp from './cousin.component';
import GeneralContext from '../context/gen.context';

class GrandComp extends Component{
    state ={
        message : "Grand Parent Message",
        version : 1001
    }
    changeMessage = ()=> {
        this.setState({
            message : "Updated Message"
        })
    }
    changeVersion = ()=> {
        this.setState({
            version : Math.round(Math.random() * 1000)
        })
    }
    render(){
        return  <div style={ {border : "2px solid red", width: "1100px", margin: "10px", padding: "10px", display: "table"}}>
                        <h1>Hello from Grand Component</h1>
                        <button onClick={ this.changeMessage}>Change Message</button>
                        <button onClick={ this.changeVersion}>Change Version</button>
                        <hr/>
                        <FamilyProvider value={this.state.message}>
                        <GeneralContext.Provider value ={ this.state.version }>
                        <ParentComp/>
                        <hr/>
                        <CousinComp/>
                        </GeneralContext.Provider>
                        </FamilyProvider>
                    </div>
              
    }
}
export default GrandComp;
