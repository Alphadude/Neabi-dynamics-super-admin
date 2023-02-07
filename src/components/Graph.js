import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Graph = () => {
  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      stacked: false,
      zoom: {
        enabled: false,
      },
    },
    fill: {
      type: 'gradient',
      opacity: [0.2, 0]
    },
    dataLabels: {
      enabled: false
    },
    toolbar: {
        show: false
      },
    stroke: {
      curve: 'smooth',
      width: [2, 2],
      dashArray: [0, 5]
    },
    title: {
        text: 'Earning Summary',
        align: 'left'
      },
    xaxis: {
        type: 'month',
        categories: ['', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', ''],
      },
    yaxis: {
        max: 350,
        min: 0
    },
    legend: {
        show: true,
        position: 'top'
      },
  });

  const [series, setSeries] = useState([
    {
      name: 'Last 6 months',
      data: [290, 200,300, 200, 350, 250, 300, 220],
      color: '#006AFF'
    },
    {
      name: 'Same period last year',
      data: [100, 180, 200, 250, 140, 200, 170, 120],
      color: '#7F7F7F',
      areaFill: 'none'
    }
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="area" height="300" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
