
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class PieChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
          
        series: [54, 20, 26],
        options: {
            labels: ["Invoive Generated", "Invoice Paid", "Invoice Pending"],
            chart: {
                width: 380,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
                }
            }],
            colors:['#006AFF', '#52C93F', '#FF2727'],
            legend: {
                show:false
            }
        },
      
      
      };
    }

  

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="220" />
      </div>
    );
  }
}

export default PieChart;