
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit,AfterViewInit {
 
    
  @ViewChild('bulkCashback') bulkCashback;
  @ViewChild('individualCashback') individualCashback;
  @ViewChild('bulkInidvidualRatio') bulkInidvidualRatio;
  
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;


  ngOnInit(): void {
  
  }

  ngAfterViewInit() {

    const options = {
      layout: {
        padding: {
          left: -10,
          bottom: -10
        },
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
      },
      plugins: {
        datalabels: {
            display: false,
        },
      },
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
              display: false
          },
          ticks: {
              autoSkip: false,
              display: false,
          }
        }],

        yAxes: [{
          gridLines: {
              display: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            max: 10000
          }
        }], 
      },
      elements: {
        point:{
            radius: 0
        },
        line: {
          tension: 0.3
        }
      }
    };
    
    // Start of Bulk Cashback Chart Code
    this.canvas = this.bulkCashback.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow","test","test1",],
          datasets: [{
              label: 'Series 1', 
              data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400], 
              fill: true,
              backgroundColor: "#d9f7ed",
              borderColor: "#36d69a",
              borderWidth: 4
          }]},
      options: options
    });
    // End of Bulk Cashback Chart Code

    // Start of Individual Cashback Chart Code
    this.canvas2 = this.individualCashback.nativeElement; 
    this.ctx2 = this.canvas2.getContext('2d');

    const myChart2 = new Chart(this.ctx2, {
      type: 'line',
      data: {
          labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow","test","test1"],
          datasets: [{
              label: 'Series 1', 
              data: [3000, 4000, 5000,	4500, 3500,4000,4400,4800,3000,3300,2500,5400], 
              fill: true,
              backgroundColor: "#fccdd5",
              borderColor: "#fa6b7f",
              borderWidth: 4
          }]},
      options: options
    });
    // End of Individual Cashback Chart Code
    

    // Start of Individual Cashback Chart Code
    this.canvas3 = this.bulkInidvidualRatio.nativeElement; 
    this.ctx3 = this.canvas3.getContext('2d');

    const myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: {
          labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow","test","test1"],
          datasets: [{
              label: 'Series 1', 
              data: [3000, 4000, 5000,	4500, 3500,4000,4400,4800,3000,3300,2500,5400], 
              fill: true,
              backgroundColor: "#dce1e7",
              borderColor: "#91a1b8",
              borderWidth: 4
          },
          {
            label: 'Series 2', 
            data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400], 
            fill: true,
            backgroundColor: "#c7ced6",
            borderColor: "#65758c",
            borderWidth: 4
          }]},
          options: {
            animation: {
              duration: 1,
              onComplete: function() {
                var controller = chart.controller;
                var chart = controller.chart;
                var xAxis = controller.scales['x-axis-0'];
               
                 var	numTicks = xAxis.ticks.length;        
                var xOffsetStart = xAxis.width / numTicks;
                var halfBarWidth = (xAxis.width / (numTicks * 2));
        
                xAxis.ticks.forEach(function(value, index) {
                  var xOffset = (xOffsetStart * index) + halfBarWidth;
                  var yOffset = chart.height - 20;          
                  // ctx.fillText(value, xOffset, yOffset);
                });
        
              }
            },
            layout: {
              padding: {
                left: -10,
                bottom: -10,
              },
            },
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                }
              }
            },
            plugins: {
              datalabels: {
                  display: false,
              },
            },
            responsive: true,
            scales: {
              xAxes: [{
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                gridLines: {
                    display: false,
                    labelOffset:-50
                },
                ticks: {
                    autoSkip: false,
                    // display: false,
                    maxRotation: 90,
                    minRotation: 90,
                    padding: -2,

                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                    display: false
                },
                ticks: {
                  beginAtZero: true,
                  max: 10000,
                  display: false
                }
              }], 
            },
            elements: {
              point:{
                  radius: 0
              },
              line: {
                tension: 0.3
              }
            }
          }
    });
    // End of Individual Cashback Chart Code
  }

}
