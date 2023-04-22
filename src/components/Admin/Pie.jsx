import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";

charts(FusionCharts);

const chartConfigs = {
  type: "pie3d",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Top 5 countries by population",
      theme: "fusion",
      decimals: 0,
      pieRadius: "45%",
      paletteColors: "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
      enableSmartLabels: "1",
      useDataPlotColorForLabels: "1",
      showPercentValues: "1",
      showLegend: "1",
      legendPosition: "bottom",
      legendItemFontSize: "14",
      legendItemFontBold: "1",
    },
    data: [
      {
        label: "China",
        value: "1383220000",
      },
      {
        label: "India",
        value: "1316000000",
      },
      {
        label: "USA",
        value: "324057000",
      },
      {
        label: "Indonesia",
        value: "263510000",
      },
      {
        label: "Brazil",
        value: "207505000",
      },
    ],
  },
};

const Pie = () => {
  return <ReactFC {...chartConfigs} />;
};

export default Pie;
