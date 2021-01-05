// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Graph from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Graph, FusionTheme);



// STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: "pie2d", // The chart type
//   width: "700", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     chart: {
//       caption: "Repo Languages",
//       theme: "fusion"
//     },
//     // Chart Data
//     data: chartData
//   }
// };

const ChartComponent = (passedData) => {
// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];


  
  const chartConfigs = {
    
  

    type: "pie2d", // The chart type
    renderAt: 'chart-container',
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Repo Languages",
        theme: "fusion"
      },
      // Chart Data
      //data: passedData
      data: chartData
    }
  };
    console.log(passedData)
    return (<ReactFC {...chartConfigs} />);
}




export default ChartComponent;