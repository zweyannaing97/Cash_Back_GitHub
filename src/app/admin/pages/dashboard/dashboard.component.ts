
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit,AfterViewInit {
 
  config: SwiperOptions = {
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup:1,
    loop:true,
    navigation: true,
    noSwiping: true,
    allowTouchMove: false,
  };
    
  @ViewChild('bulkCashback') bulkCashback;
  @ViewChild('individualCashback') individualCashback;
  @ViewChild('bulkInidvidualRatio') bulkInidvidualRatio;
  @ViewChild('mptChart') mptChart;
  @ViewChild('telenorChart') telenorChart;
  @ViewChild('ooredooChart') ooredooChart;
  @ViewChild('mytelChart') mytelChart;
  @ViewChild('serviceCategoryType') serviceCategoryType;
  @ViewChild('topupChart') topupChart;
  @ViewChild('giftcardChart') giftcardChart;
  @ViewChild('dthChart') dthChart;
  @ViewChild('electricityChart') electricityChart;
  @ViewChild('postPaidChart') postPaidChart;
  @ViewChild('overseasTopupChart') overseasTopupChart;
  

  
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;
  mptCanvas: any;
  mptCtx: any;
  telenorCanvas: any;
  telenorCtx: any;
  ooredooCanvas: any;
  ooredooCtx: any;
  mytelCanvas: any;
  mytelCtx: any;
  serviceCategoryTypeCanvas: any;
  serviceCategoryTypeCtx: any;
  topupCanvas: any;
  topupCtx: any;
  giftcardCanvas: any;
  giftcardCtx: any;
  dthChartCanvas: any;
  dthChartCtx: any;
  electricityCanvas: any;
  electricityCtx: any;
  postPaidCanvas: any;
  postPaidCtx: any;
  overseasTopupCanvas: any;
  overseasTopupCtx: any;


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
    
    const operatorOptions = {
      cutoutPercentage: 85,
        legend: {
          display: false
        },
    }

    const ServicecategoryOptions = {
      cutoutPercentage: 52,
        legend: {
          display: false
        },
    }

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
//------------------------------------------------------------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------------------------------------------
    
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
//------------------------------------------------------------------------------------------------------------------------------------

    // Start of MPT operator chart code
    this.mptCanvas = this.mptChart.nativeElement; 
    this.mptCtx = this.mptCanvas.getContext('2d');

    const mptChart = new Chart(this.mptCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Bulk',
          'Individual'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [900, 100],
          backgroundColor: [
            '#f9ba0d',
            '#fce096'
          ],
          hoverOffset: 4
        }],
      },
      options: operatorOptions
    });
    // End of MPT operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

    // Start of Telenor operator chart code
    this.telenorCanvas = this.telenorChart.nativeElement; 
    this.telenorCtx = this.telenorCanvas.getContext('2d');

    const telenorChart = new Chart(this.telenorCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Bulk',
          'Individual'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [400000, 80000],
          backgroundColor: [
            '#07b7e6',
            '#93dced'
          ],
          hoverOffset: 4
        }],
      },
      options: operatorOptions
    });
    // End of telenor operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

    // Start of Ooredoo operator chart code
    this.ooredooCanvas = this.ooredooChart.nativeElement; 
    this.ooredooCtx = this.ooredooCanvas.getContext('2d');

    const ooredooChart = new Chart(this.ooredooCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Bulk',
          'Individual'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [600000, 20000],
          backgroundColor: [
            '#ec1a23',
            '#f69da1'
          ],
          hoverOffset: 4
        }],
      },
      options: operatorOptions
    });
    // End of Ooredoo operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

    // Start of mytel operator chart code
    this.mytelCanvas = this.mytelChart.nativeElement; 
    this.mytelCtx = this.mytelCanvas.getContext('2d');

    const mytelChart = new Chart(this.mytelCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Bulk',
          'Individual'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [600000, 20000],
          backgroundColor: [
            '#ee6c20',
            '#f1a273'
          ],
          hoverOffset: 4
        }],
      },
      options: operatorOptions
    });
    // End of mytel operator chart code
//------------------------------------------------------------------------------------------------------------------------------------
    
    // Start of Individual Cashback Chart Code
    this.serviceCategoryTypeCanvas = this.serviceCategoryType.nativeElement; 
    this.serviceCategoryTypeCtx = this.serviceCategoryTypeCanvas.getContext('2d');

    const serviceCategoryTypeChart = new Chart(this.serviceCategoryTypeCtx, {
      type: 'line',
      data: {
          labels: ["Top Up",	"Gift Cards",	"DTH",	"Electricity",	"Post Paid",	"Overseas Top Up"],
          datasets: [{
              label: 'Series 1', 
              data: [3000, 4000, 5000,	4500, 3500,4000], 
              fill: true,
              backgroundColor: "#d9f7ed",
              borderColor: "#36d69a",
              borderWidth: 4
          }
        ]},
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
//------------------------------------------------------------------------------------------------------------------------------------

    // Start of TopUp chart code
    this.topupCanvas = this.topupChart.nativeElement; 
    this.topupCtx = this.topupCanvas.getContext('2d');

    const topupChart = new Chart(this.topupCtx, {
      type: 'doughnut',
      data: {
        labels: [
          'Ooredoo',
          'MPT',
          'Telenor',
          'Mytel',
          'MEC',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [15600, 15600,10400,10400,5200],
          backgroundColor: [
            '#ed1b24',
            '#f9bb0e',
            '#05b8e3',
            '#ee6c20',
            '#3a7eed',
          ],
          hoverOffset: 4
        }],
      },
      options: ServicecategoryOptions
    });
    // End of topup operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

 // Start of Gift Card chart code
 this.giftcardCanvas = this.giftcardChart.nativeElement; 
 this.giftcardCtx = this.giftcardCanvas.getContext('2d');

 const giftcardChart = new Chart(this.giftcardCtx, {
   type: 'doughnut',
   data: {
     labels: [
       'Ooredoo',
       'MPT',
       'Telenor',
       'Mytel',
       'MEC',
     ],
     datasets: [{
       label: 'My First Dataset',
       data: [15600, 15600,10400,10400,5200],
       backgroundColor: [
         '#ed1b24',
         '#f9bb0e',
         '#05b8e3',
         '#ee6c20',
         '#3a7eed',
       ],
       hoverOffset: 4
     }],
   },
   options: ServicecategoryOptions
 });
 // End of Gift Card chart code
//------------------------------------------------------------------------------------------------------------------------------------

// Start of DTH chart code
this.dthChartCanvas = this.dthChart.nativeElement; 
this.dthChartCtx = this.dthChartCanvas.getContext('2d');

const dthChartChart = new Chart(this.dthChartCtx, {
  type: 'doughnut',
  data: {
    labels: [
      'Ooredoo',
      'MPT',
      'Telenor',
      'Mytel',
      'MEC',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [15600, 15600,10400,10400,5200],
      backgroundColor: [
        '#ed1b24',
        '#f9bb0e',
        '#05b8e3',
        '#ee6c20',
        '#3a7eed',
      ],
      hoverOffset: 4
    }],
  },
  options: ServicecategoryOptions
});
// End of DTH operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

// Start of electricity chart code
this.electricityCanvas = this.electricityChart.nativeElement; 
this.electricityCtx = this.electricityCanvas.getContext('2d');

const electricityChart = new Chart(this.electricityCtx, {
  type: 'doughnut',
  data: {
    labels: [
      'Ooredoo',
      'MPT',
      'Telenor',
      'Mytel',
      'MEC',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [15600, 15600,10400,10400,5200],
      backgroundColor: [
        '#ed1b24',
        '#f9bb0e',
        '#05b8e3',
        '#ee6c20',
        '#3a7eed',
      ],
      hoverOffset: 4
    }],
  },
  options: ServicecategoryOptions
});
// End of electricity operator chart code
//------------------------------------------------------------------------------------------------------------------------------------
  
// Start of postPaid chart code
this.postPaidCanvas = this.postPaidChart.nativeElement; 
this.postPaidCtx = this.postPaidCanvas.getContext('2d');

const postPaidChart = new Chart(this.postPaidCtx, {
  type: 'doughnut',
  data: {
    labels: [
      'Ooredoo',
      'MPT',
      'Telenor',
      'Mytel',
      'MEC',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [15600, 15600,10400,10400,5200],
      backgroundColor: [
        '#ed1b24',
        '#f9bb0e',
        '#05b8e3',
        '#ee6c20',
        '#3a7eed',
      ],
      hoverOffset: 4
    }],
  },
  options: ServicecategoryOptions
});
// End of postPaid operator chart code
//------------------------------------------------------------------------------------------------------------------------------------

// Start of overseasTopup chart code
this.overseasTopupCanvas = this.overseasTopupChart.nativeElement; 
this.overseasTopupCtx = this.overseasTopupCanvas.getContext('2d');

const overseasTopupChart = new Chart(this.overseasTopupCtx, {
  type: 'doughnut',
  data: {
    labels: [
      'Ooredoo',
      'MPT',
      'Telenor',
      'Mytel',
      'MEC',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [15600, 15600,10400,10400,5200],
      backgroundColor: [
        '#ed1b24',
        '#f9bb0e',
        '#05b8e3',
        '#ee6c20',
        '#3a7eed',
      ],
      hoverOffset: 4
    }],
  },
  options: ServicecategoryOptions
});
// End of overseasTopup operator chart code
//------------------------------------------------------------------------------------------------------------------------------------
}

}
