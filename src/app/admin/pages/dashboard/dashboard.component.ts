
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SwiperComponent } from "swiper/angular";
import { OwlOptions } from 'ngx-owl-carousel-o';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexMarkers
} from "ng-apexcharts";




export type BulkcashbackChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  labels: string[];
  grid: ApexGrid;
  colors: string[];
};

export type IndividualcashbackChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  labels: string[];
  grid: ApexGrid;
  fill: ApexFill;
  colors: string[];
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
};

export type CashbackTotalAmount = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; 
  colors: any[];
  tooltip: ApexTooltip;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  @ViewChild("individualcashbackChart") individualcashbackChart: ChartComponent | undefined;
  @ViewChild("mptchart") mptchart: ChartComponent | undefined;
  @ViewChild("telenorChart") telenorChart: ChartComponent | undefined;
  @ViewChild("OoredooChart") OoredooChart: ChartComponent | undefined;
  @ViewChild("MytelChart") MytelChart: ChartComponent | undefined;
  @ViewChild("TopupChart") TopupChart: ChartComponent | undefined;
  @ViewChild("GiftCardChart") GiftCardChart: ChartComponent | undefined;
  @ViewChild("blukcashbackChart") blukcashbackChart: ChartComponent | undefined;



// Bulk Cashback / Individual Cashback charts start here
  public chartOptions:BulkcashbackChartOptions = {
    colors: ["#36d69a"],
    series: [
      {
        name: "Bulk Cash Back",
        data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400]
      },
    ],
    chart: {
      type: "area",
      height: 200,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
      
    },
    dataLabels: {
      enabled: false
    },
    labels: [
      "1 Nov",
      "2 Nov",
      "3 Nov",
      "4 Nov",
      "5 Nov",
      "6 Nov",
      "7 Nov",
      "8 Nov",
      "9 Nov",
      "10 Nov",
      "11 Nov",
      "12 Nov",
      "13 Nov",
      "14 Nov",
      "15 Nov",
      "16 Nov",
      "17 Nov",
      "20 Nov",
      "21 Nov",
      "22 Nov",
      "23 Nov",
      "24 Nov",
      "27 Nov",
      "28 Nov",
      "29 Nov",
      "30 Nov",],
    xaxis: {
      labels: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 0,
      max:  10000,
    },
    grid: {
      show: false, 
    },
  };

  public individualchart: IndividualcashbackChartOptions= {
    colors: ["#fa6b7f"],
    series: [
      {
        name: "Individual Cash Back",
        data: [3000, 4000, 5000,	4500, 3500,4000,4400,4800,3000,3300,2500,5400]
      },
    ],
    chart: {
      type: "area",
      height: 200,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
      
    },
    dataLabels: {
      enabled: false
    },
    labels: ["01 Nov",
    "04 Nov",
    "05 Nov",
    "06 Nov",
    "07 Nov",
    "08 Nov",
    "09 Nov",
    "10 Nov",
    "11 Nov",
    "12 Nov",
    "13 Nov",
    "14 Nov",
    "15 Nov",
    "16 Nov",
    "17 Nov",
    "20 Nov",
    "21 Nov",
    "22 Nov",
    "23 Nov",
    "24 Nov",
    "27 Nov",
    "28 Nov",
    "29 Nov",
    "30 Nov",
    ],
    xaxis: {
      labels: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: false,
      },
      min: 0,
      max:  10000,
    },
    grid: {
      show: false, 
    },
    fill: {
      type: 'gradient' ,
      colors: ['#d9f7ed', '#d9f7ed']
    }
  };

// Cashback Ratio charts start here
public CashbackRatioChartOpt:BulkcashbackChartOptions = {
  colors: ["#65758c","#91a1b8"],
  series: [
    {
      name: "series 1",
      data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400]
    },
    {
      name: "series 2",
      data: [3000, 4000, 5000,	4500, 3500,4000,4400,4800,3000,3300,2500,5400]
    }
  ],
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
    
  },
  dataLabels: {
    enabled: false
  },
  labels: ["01 Nov",
  "04 Nov",
  "05 Nov",
  "06 Nov",
  "07 Nov",
  "08 Nov",
  "09 Nov",
  "10 Nov",
  "11 Nov",
  "12 Nov",
  "13 Nov",
  "14 Nov",
  "15 Nov",
  "16 Nov",
  "17 Nov",
  "20 Nov",
  "21 Nov",
  "22 Nov",
  "23 Nov",
  "24 Nov",
  "27 Nov",
  "28 Nov",
  "29 Nov",
  "30 Nov",],
  xaxis: {
    labels: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      show: false,
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: false, 
  },
};
  
// operator charts start here
  public mptchartOptions:ChartOptions2 = { 
    colors: [ '#f9ba0d','#fce096'],
    series: [600000, 60000],
      chart: {
        type: "donut",
        height: 200 
      },
      labels: ["Bulk", "Individual",],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
      dataLabels: {
        enabled: false
     },
     legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%'
        }
      }
    }
  };
  
  public TelenorChartOpt:ChartOptions2 = { 
    colors: ['#07b7e6','#93dced'],
    series: [400000, 80000],
      chart: {
        type: "donut",
        height: 200 
      },
      labels: ["Bulk", "Individual",],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
      dataLabels: {
        enabled: false
     },
     legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%'
        }
      }
    }
  };

  public OoredooChartOpt:ChartOptions2 = { 
    colors: [ '#ec1a23',
    '#f69da1'],
    series: [600000, 20000],
      chart: {
        type: "donut",
        height: 200 
      },
      labels: ["Bulk", "Individual",],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
      dataLabels: {
        enabled: false
     },
     legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%'
        }
      }
    }
  };

  public MytelChartOpt:ChartOptions2 = { 
    colors: [ '#ee6c20',
    '#f1a273'],
    series: [600000, 20000],
      chart: {
        type: "donut",
        height: 200 
      },
      labels: ["Bulk", "Individual",],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
      dataLabels: {
        enabled: false
     },
     legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '85%'
        }
      }
    }
  };

// Service Category Type Monthly charts start here
public ServiceChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "",
      data: [3000, 4000, 5000,	4500, 3500,4000]
    },
  ],
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
    
  },
  dataLabels: {
    enabled: false
  },
  labels: ["Top Up",	"Gift Cards",	"DTH",	"Electricity",	"Post Paid",	"Overseas Top Up"],
  xaxis: {
    labels: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      show: false,
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: false, 
  },
};

// service type category (topup, gift cards,.....) charts start here
public TopupChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public GiftCardChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public DTHChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public ElecChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public PostpaidChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public OvTopupChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

// cashback Total Amount State / Division wise chart start here ...............
public CashbackTotalAmountOpt:CashbackTotalAmount = {
  colors: [function({ value, seriesIndex,dataPointIndex, w }) {
    
    let labels = w.globals.categoryLabels[dataPointIndex];
    if ( labels === "Ayeyarwaddy") {
        return '#67b7dc'
    } else if  (labels === "Bago"){
        return '#6894dd'
    }else if (labels === "Chin"){
      return '#6671db'
    }else if (labels === "Kayah"){
      return '#8067dc'
    }else if (labels === "Kachin"){
      return '#8067dc'
    }else if (labels === "Kayin"){
      return '#a366db'
    }else if (labels === "Magway"){
      return '#c867db'
    }else if (labels === "Mandalay"){
      return '#dc67cf'
    }else if (labels === "Mon"){
      return '#dc67ab'
    }else if (labels === "Rakhine"){
      return '#dd6789'
    }else if (labels === "Shan"){
      return '#dc6868'
    }else if (labels === "Sagaing"){
      return '#df8b66'
    }else if (labels === "Taninthayi"){
      return '#e0b163'
    }else if (labels === "Yangon"){
      return '#e0c763'
    }else if (labels === "Naypyidaw"){
      return '#d4d88b'
    }else {
      return '#000000'
    }
    
  }],
  series: [
    {
      type: "column",
      data: [70000, 45000,60000,30000,40000,63000,60000,50000,43000,62000,66000,24000,55000,61000,35000]
    },
  ],
  chart: {
    height: 400,
    type: "line",
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: [0, 4],
    curve: "straight"
  },
  labels: [
    'Ayeyarwaddy', 'Bago', 'Chin', 'Kachin','Kayah','Kayin','Magway','Mandalay','Mon','Rakhine','Shan','Sagaing','Taninthayi','Yangon','Naypyidaw'
  ],
  xaxis: {
  },
  yaxis: [
  ],
  tooltip: {
    
  },
  markers: {
    size: 6,
    hover: {
      size: 10
    }
  },
  
};

// Each Divison and Stae chart start here ...............
public AyeyarwaddyChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public BagoChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public ChinChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public KachinOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public KayahChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public KayinChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public MagwayChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public MandalayChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public MonChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public RakhineChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public ShanChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public SagaingChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public TaninthayiChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public YangonChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

public NaypyidawChartOpt:ChartOptions2 = { 
  colors: [ '#ed1b24',
  '#f9bb0e',
  '#05b8e3',
  '#ee6c20',
  '#3a7eed',],
  series: [15600, 15600,10400,10400,5200],
    chart: {
      type: "donut",
      height: 200 
    },
    labels: ['Ooredoo',
    'MPT',
    'Telenor',
    'Mytel',
    'MEC',],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom"
          },
        }
      }
    ],
    dataLabels: {
      enabled: false
   },
   legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
      }
    }
  }
};

  ngOnInit(): void {
  }

}
