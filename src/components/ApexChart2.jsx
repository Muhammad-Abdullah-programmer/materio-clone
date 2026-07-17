import ReactApexChart from "react-apexcharts"
import React from "react"

const ApexChart2 = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Total Sales',
        data: [
          { x: '2021', y: 480, drilldown: '2021' },
          { x: '2022', y: 530, drilldown: '2022' },
          { x: '2023', y: 610, drilldown: '2023' },
          { x: '2024', y: 705, drilldown: '2024' },
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 420,
        toolbar: {
          show: false,
        },
      },
      colors: yearColors,
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 6,
          borderRadiusApplication: 'end',
          distributed: true,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Drilldown',
        align: 'left',
      },
      subtitle: {
        text: 'Click a year to drill into its channel breakdown (Online / Retail / Wholesale). Use the breadcrumb to go back.',
        align: 'left',
      },
      yaxis: {
        title: {
          text: 'Sales ($k)',
        },
      },
      drilldown: {
        enabled: true,
        breadcrumb: {
          show: true,
          position: 'top-right',
          rootLabel: 'All Years',
          separator: ' / ',
        },
        series: [
          {
            id: '2021',
            name: '2021 by Channel',
            plotOptions: childPlot,
            legend: childLegend,
            colors: bluePalette,
            series: [
              {
                name: 'Online',
                data: [
                  { x: 'Q1', y: 50 },
                  { x: 'Q2', y: 55 },
                  { x: 'Q3', y: 55 },
                  { x: 'Q4', y: 60 },
                ],
              },
              {
                name: 'Retail',
                data: [
                  { x: 'Q1', y: 35 },
                  { x: 'Q2', y: 38 },
                  { x: 'Q3', y: 40 },
                  { x: 'Q4', y: 42 },
                ],
              },
              {
                name: 'Wholesale',
                data: [
                  { x: 'Q1', y: 22 },
                  { x: 'Q2', y: 25 },
                  { x: 'Q3', y: 28 },
                  { x: 'Q4', y: 30 },
                ],
              },
            ],
          },
          {
            id: '2022',
            name: '2022 by Channel',
            plotOptions: childPlot,
            legend: childLegend,
            colors: greenPalette,
            series: [
              {
                name: 'Online',
                data: [
                  { x: 'Q1', y: 55 },
                  { x: 'Q2', y: 60 },
                  { x: 'Q3', y: 62 },
                  { x: 'Q4', y: 68 },
                ],
              },
              {
                name: 'Retail',
                data: [
                  { x: 'Q1', y: 40 },
                  { x: 'Q2', y: 42 },
                  { x: 'Q3', y: 43 },
                  { x: 'Q4', y: 45 },
                ],
              },
              {
                name: 'Wholesale',
                data: [
                  { x: 'Q1', y: 26 },
                  { x: 'Q2', y: 28 },
                  { x: 'Q3', y: 30 },
                  { x: 'Q4', y: 31 },
                ],
              },
            ],
          },
          {
            id: '2023',
            name: '2023 by Channel',
            plotOptions: childPlot,
            legend: childLegend,
            colors: amberPalette,
            series: [
              {
                name: 'Online',
                data: [
                  { x: 'Q1', y: 62 },
                  { x: 'Q2', y: 68 },
                  { x: 'Q3', y: 72 },
                  { x: 'Q4', y: 78 },
                ],
              },
              {
                name: 'Retail',
                data: [
                  { x: 'Q1', y: 45 },
                  { x: 'Q2', y: 48 },
                  { x: 'Q3', y: 50 },
                  { x: 'Q4', y: 52 },
                ],
              },
              {
                name: 'Wholesale',
                data: [
                  { x: 'Q1', y: 32 },
                  { x: 'Q2', y: 33 },
                  { x: 'Q3', y: 35 },
                  { x: 'Q4', y: 35 },
                ],
              },
            ],
          },
          {
            id: '2024',
            name: '2024 by Channel',
            plotOptions: childPlot,
            legend: childLegend,
            colors: purplePalette,
            series: [
              {
                name: 'Online',
                data: [
                  { x: 'Q1', y: 72 },
                  { x: 'Q2', y: 78 },
                  { x: 'Q3', y: 82 },
                  { x: 'Q4', y: 88 },
                ],
              },
              {
                name: 'Retail',
                data: [
                  { x: 'Q1', y: 52 },
                  { x: 'Q2', y: 55 },
                  { x: 'Q3', y: 56 },
                  { x: 'Q4', y: 57 },
                ],
              },
              {
                name: 'Wholesale',
                data: [
                  { x: 'Q1', y: 40 },
                  { x: 'Q2', y: 41 },
                  { x: 'Q3', y: 42 },
                  { x: 'Q4', y: 42 },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={420}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}

export default ApexChart2