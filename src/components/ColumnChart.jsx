import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#3F51B5",
      "#546E7A",
      "#D4526E",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
     
      labels: {
        style: {
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#3F51B5",
            "#546E7A",
            "#D4526E",
          ],
          fontSize: "12px",
        },
      },
    },
  };

  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ];

  return (
    <div className="w-full">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
        width="100%"
      />
    </div>
  );
};

export default ColumnChart;