import React from "react";
import ReactApexChart from "react-apexcharts";

export default function GrowthLine() {
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false, // removes the numbers on top of each point
    },

    stroke: {
      curve: "straight",
      width: 1,
    },

    // title: {
    //   text: "Product Trends by Month",
    //   align: "left",
    // },

    grid: {
      yaxis: {
        lines: {
          show: false, // removes horizontal background lines
        },
      },
    },

    xaxis: {},

    // colors: ["#8C57FF"],
  };

  return (
    <div className="w-[70%]">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={150}
      />
    </div>
  );
}