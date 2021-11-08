import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Switch,Router,Link} from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import DisplayComp from './displayComp';
import weatherUtils from './weatherUtils';
import DayComp  from './DayComp';

function App()
{

  const[item,setItem] = useState('')

    return(
      <div>
        <center>
        <h2>WEATHER INFO</h2>
        </center>
        
        
        <br/><br/>
          <DisplayComp />
    
           <Switch>
            <Route  exact path = "/" Component={DisplayComp }/>
            <Route path = "/DayComp" Component={ DayComp }/>
          </Switch>
       

           
         
        

      </div>
    )
  
}

export default App;
