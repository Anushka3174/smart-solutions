import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Companies from "./Components/Companies";
import {Redirect, Route, Switch} from "react-router-dom";
import Honda from "./Components/Honda.jsx";
import Bajaj from "./Components/Bajaj.jsx";
import Yamaha from "./Components/Yamaha.jsx";
import Hero from "./Components/Hero.jsx";
import Login from "./Components/Login.jsx";
import NotFound from "./Components/NotFound.jsx";

class App extends Component {
  render() {
    return (
        <Switch>
            <Redirect to='/login' exact path='/' component={Login}/>
            <Route path='/companies' component={Companies}/>
            <Route path='/login' component={Login}/>
            <Route path='/honda' component={Honda}/>
            <Route path='/bajaj' component={Bajaj}/>
            <Route path='/yamaha' component={Yamaha}/>
            <Route path='/hero' component={Hero}/>
            <Route path='*' component={NotFound}/>

        </Switch>
    );
  }
}

export default App;
