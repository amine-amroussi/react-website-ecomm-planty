// import React from "react";
// import ReactFC from "react-fusioncharts";
// import FusionCharts from "fusioncharts";
// import Column2D from "fusioncharts/fusioncharts.charts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// const chartData = [
//   {
//     label: "January",
//     value: "290",
//   },
//   {
//     label: "Fabruary",
//     value: "260",
//   },
//   {
//     label: "March",
//     value: "180",
//   },
//   {
//     label: "April",
//     value: "140",
//   },
//   {
//     label: "Mai",
//     value: "115",
//   },
//   {
//     label: "Jun",
//     value: "100",
//   },
//   {
//     label: "July",
//     value: "30",
//   },
//   {
//     label: "August",
//     value: "30",
//   },
// ];

// const chartConfigs = {
//   type: "column2d", // The chart type
//   width: "700", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       caption: "Revenue [2022 - 23]", //Set the chart caption
//       xAxisName: "Months", //Set the x-axis name
//       yAxisName: "revenue ($)", //Set the y-axis name
//       numberSuffix: "K",
//       theme: "fusion", //Set the theme for your chart
//     },
//     // Chart Data - from step 2
//     data: chartData,
//   },
// };

const Chart = () => {
    // return (<ReactFC {...chartConfigs} />);
    return "chart"
};

export default Chart;
