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

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Java",
    value: "21"
  },
  {
    label: "JavaScript",
    value: "11"
  },
  {
    label: "HTML",
    value: "8"
  },
  {
    label: "Python",
    value: "5"
  },
  {
    label: "Dart",
    value: "2"
  },
];

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
      data: passedData
    }
  };
    console.log(passedData)
    return (<ReactFC {...chartConfigs} />);
}

// var dataStore = new FusionCharts.DataStore().createDataTable(data, schema);
// // time series chart instance
// var realtimeChart = new FusionCharts({
//   type: 'timeseries',
//   renderAt: 'chart-container',
//   width: '100%',
//   height: '600',
//   dataSource: {
//     data: dataStore,
//     yAxis: {
//       plottype: 'area'
//     },
//     series: 'City'
//   }
// }).render();

// document.getElementById('update-data').addEventListener('click', function() {
//    var cityArr = ["New York", "London"];
//    let index = data[randBetween(0, data.length)][0];
//    let value = randBetween(20, 60);
//    let city = cityArr[Math.floor(Math.random()*cityArr.length)];

//    realtimeChart.feedData([
//        [index, value, city]
//        ]);



export default ChartComponent;