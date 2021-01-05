import React, { useState, useEffect }from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Graph from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Component } from "react";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Graph, FusionTheme);

function ChartComponent({ user, repo }) {
  const [languages, setLanguages] = useState([]);
  const [dispRepo, setDispRepo] = useState('');
  const [chartConfigs, setChartConfigs] = useState({});

  useEffect(() => {
    getData();
  }, [ user, repo ]);

  const getData = async () => {
    const retlanguages = await fetch(
      `https://api.github.com/repos/${user}/${repo}/languages`
    );
    const languagesJSON = await retlanguages.json();
    var langArr = [];
    Object.keys(languagesJSON).forEach(function (key) {
        var lang = {
            label: key,
            value: languagesJSON[key],
        };
        langArr.push(lang);
    });

    var prevDs = Object.assign({}, chartConfigs.dataSource);
    prevDs.data = langArr;
    chartConfigs.dataSource = prevDs;
    console.log(chartConfigs.dataSource);
    setDispRepo(repo);
    setLanguages(langArr);
    setChartConfigs({
      type: "pie3d", // The chart type
      renderAt: 'chart-container',
      width: "700", // Width of the chart
      height: "400", // Height of the chart
      dataFormat: "json", // Data type
      dataSource: {
        chart: {
          caption: `Languages in ${repo} repo`,
          theme: "fusion"
        },
        data: langArr,
      }
    });
  }

  return (
    <div>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default ChartComponent;