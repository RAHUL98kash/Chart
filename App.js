

   
 import React from "react";
 import ReactEcharts from "echarts-for-react"; 
 import New from "./New";
 function App() {  
  
 const option = {
   
   xAxis: {
     type: 'category',
     data: [2.29,1.28,2.81,2.18,1.82,1.97,1.98,1.25,1.98,1.85,2.38],
    name: "Color Intensity"
   },
    
   
   yAxis: {
     type: 'value',
     name: "Hue"
    
    
   },
   series: [
     {
      data:[5.64,4.38,5.68,7.8,4.32,6.75,5.25,5.05,5.2,7.22,5.75] ,
       type: 'line',
      
     }
   ],
 }; 
 
 
    
 return <>
 <ReactEcharts option={option} />;
 <New/>
 </>
 }
 export default App;