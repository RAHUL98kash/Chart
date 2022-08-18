import React from 'react'
import ReactEcharts from "echarts-for-react";
export default function New() {
    const option = {
   
        xAxis: {
          type: 'category',
          data: [1,1,1,1,1,1,1,1,1,1],
         name: "Alcohol"
        },
         
        
        yAxis: {
          type: 'value',
         name: "Mallic Acid"
        },
        series: [
          {
            data: [14.23,13.2,13.16,14.37,13.24,14.2,14.39,14.06,14.83,13.86,],
            type: 'bar',
           
          }
        ],
      }; 
  return <ReactEcharts option={option} />;
 
    
  
}