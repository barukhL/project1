import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Switch,Link} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import DisplayComp from './displayComp';
import React, { useState } from 'react';
import weatherUtils from './weatherUtils';


function DayComp()
{
 
  // let item = json.parse(sessionStorage.getItem('data'))
  // console.log(item)
  let dayDate ;
  let dayData ;
  // switch (dayDate) {
  //   case "2021-11-08":
          //dayData = item.consolidated_weather
  //     break;
  //   case "2021-11-08":
            //dayData = item.consolidated_weather[1]
      
  //     break;
  //   case "2021-11-08":
           //dayData = item.consolidated_weather[2]
      
  //     break;
  //   case "2021-11-08":
           //dayData = item.consolidated_weather[3]
      
  //     break;
  //   case "2021-11-08":
           //dayData = item.consolidated_weather[4]
      
  //     break;
  //   case "2021-11-08":
           //dayData = item.consolidated_weather[5]
      
  //     break;
  
  //   default:
  //     break;
  // }
    
      return(
        <div>
        <h2>Hi</h2>

        {/* {item && item.weather_state_name}<br/>
        Max :{item && item.max_temp.toFixed(2)}<br/>
        Min :{item && item.min_temp.toFixed(2)}<br/>
        Humidity : <br/>
        {item && item.humidity}<br/>
        Visibility : <br/>
        {item && item.visibility.toFixed(2)}<br/>
        Pressure : <br/>
        {item && item.air_pressure.toFixed(2)}<br/>
        Confidence : <br/>
        {item && item.predictability} */}
  
        </div>
      )
    
}

export default DayComp;
