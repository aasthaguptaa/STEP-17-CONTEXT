import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GrandComp from './components/grandComp';


class MainApp extends Component{
  render(){
    return   <div> 
                  <h1>Context API</h1>
                   <hr/> 
                   <GrandComp/>
             </div>
   
  }
}
ReactDOM.render(<MainApp/>,document.getElementById('root'));