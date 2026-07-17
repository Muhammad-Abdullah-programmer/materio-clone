import ReactApexChart from "react-apexcharts"
import React from "react"

const DonutChart = () => {
  const [state, setState] = React.useState({
    series: [20,20,10,50],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },

      colors: ["#87A6B4", "#10B981", "#F59E0B", "#F0F2F8"],
      plotOptions: {
        pie: {
          startAngle: -40,
          endAngle: 370,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
        },
      },
    
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  })

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}


export default DonutChart