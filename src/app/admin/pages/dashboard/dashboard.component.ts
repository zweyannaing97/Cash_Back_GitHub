
import { Component, OnInit,ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToptenCashbackDashboardFilterComponent } from '../../modals/topten-cashback-dashboard-filter/topten-cashback-dashboard-filter.component';

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
import { CashbackAmountPercentageDashboardFilterComponent } from '../../modals/cashback-amount-percentage-dashboard-filter/cashback-amount-percentage-dashboard-filter.component';
import { ServiceCategoryDashboardFilterComponent } from '../../modals/service-category-dashboard-filter/service-category-dashboard-filter.component';
import { CashbackStateDivisonDashboardFilterComponent } from '../../modals/cashback-state-divison-dashboard-filter/cashback-state-divison-dashboard-filter.component';

export type BulkcashbackChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  labels: string[];
  grid: ApexGrid;
  colors: string[];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
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
  responsive: ApexResponsive[];

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
  tooltip: ApexTooltip;
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
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public customOptions;

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
        formatter: function (value) {
          return value.toLocaleString();
        }
      },
      min: 0,
      max:  10000,
    },
    grid: {
      show: false, 
    },
    stroke: {
      show: false,
    },
    tooltip: {
    },
    responsive: [
    ],  
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
        formatter: function (value) {
          return value.toLocaleString();
        }
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
    },
    responsive: [

    ],  
  };

// Cashback Ratio charts start here
public CashbackRatioChartOpt:BulkcashbackChartOptions = {
  colors: ["#65758c","#91a1b8"],
  series: [
    {
      name: "Bulk Cash Back ",
      data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400]
    },
    {
      name: "Individual Cash Back",
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
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: false, 
  },
  stroke: {
    show: false,
  },
  tooltip: {
  },
  responsive: [
  ],  
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
              width: 300,
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
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value.toLocaleString();
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
              width: 300,
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
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value.toLocaleString();
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
              width: 300,
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
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value.toLocaleString();
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
              width: 300,
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
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value.toLocaleString();
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
    width: '100%',
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
    },
  },
  yaxis: {
    labels: {
      show: false,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: false, 
  },
  stroke: {
    show: false,
  },
  tooltip: {
    x:{
      show: false,
    },
    y: {
      formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
        return w.globals.categoryLabels[dataPointIndex]+ ': ' +value.toLocaleString();
      },
    }
  },
  responsive: [
  ],  
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
      return '#a366db'
    }else if (labels === "Kachin"){
      return '#8067dc'
    }else if (labels === "Kayin"){
      return '#c867db'
    }else if (labels === "Magway"){
      return '#dc67cf'
    }else if (labels === "Mandalay"){
      return '#dc67ab'
    }else if (labels === "Mon"){
      return '#dd6789'
    }else if (labels === "Rakhine"){
      return '#dc6868'
    }else if (labels === "Shan"){
      return '#df8b66'
    }else if (labels === "Sagaing"){
      return '#e0b163'
    }else if (labels === "Taninthayi"){
      return '#e0c763'
    }else if (labels === "Yangon"){
      return '#d4d88b'
    }else if (labels === "Naypyidaw"){
      return '#aec670'
    }else {
      return '#000000'
    }
    
  }],
  series: [
    {
      type: "column",
      name: "",
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
    tooltip: {
      enabled: false     
    },
    crosshairs: {
      show: false
    }
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
  },
  tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
      let labels = w.globals.categoryLabels[dataPointIndex];
      
      return (
        
        `<div class=${labels}_bgColor>` +
        "<span>" +
        w.globals.categoryLabels[dataPointIndex] +
        " : " +
        series[seriesIndex][dataPointIndex].toLocaleString() +
        "</span>" +
        "</div>"
      );
    }
  },
  markers: {
    size: 6,
    hover: {
      size: 10
    }
  },
  responsive: [
  ],  
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
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
            width: 300,
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
  },
  tooltip: {
    y: {
      formatter: function(value) {
        return value.toLocaleString();
      }
    }
  }
};

// Bulk Cashback / Individual Cashback charts start here
public topUplineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300,6500,7400]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []
};

public giftCardlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [6000, 3000, 5000,	7500, 8300,4500,7400,5800,8000,3200]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []

};

public dthlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#fa6b7f"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [2000, 8000, 5000,	3500, 4300,4500,8400,3800,7000,3200]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []

}; 

public eleclineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5400, 7000, 5000,	2500, 4300,4500,8400,3800,4500,5400]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []

};

public postpaidlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#fa6b7f"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [2000, 5000, 6000,	4500, 4300,4100,3000,3200,5500,2400]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []

};

public overseaTopuplineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5000, 7000, 3000,	5500, 4300,4500,7400,5800,6500,5200]
    },
  ],
  chart: {
    type: "line",
    height: 65,
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
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    enabled: false,
    x: {
        show: false
    }
  },
  responsive: []

};

/////////////////////////////////
public toptentopUplineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

public toptenGiftCardlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [6000, 3000, 5000,	7500, 8300,4500,7400,5800,8000,3200]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

public toptendthlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#fa6b7f"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [2000, 8000, 5000,	3500, 4300,4500,8400,3800,7000,3200]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

public topteneleclineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5400, 7000, 5000,	2500, 4300,4500,8400,3800,4500,5400]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

public toptenpostpaidlineChartOpt:BulkcashbackChartOptions = {
  colors: ["#fa6b7f"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [2000, 5000, 6000,	4500, 4300,4100,3000,3200,5500,2400]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

public toptenosTopuplineChartOpt:BulkcashbackChartOptions = {
  colors: ["#36d69a"],
  series: [
    {
      name: "Bulk Cash Back",
      data: [5000, 7000, 3000,	5500, 4300,4500,7400,5800,6500,5200]
    },
  ],
  chart: {
    type: "line",
    height: 510,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    
  },
  dataLabels: {
    enabled: false
  },
  labels: [
    "094256849263",
    "096532952356",
    "097958643165",
    "097966988844",
    "096985492531",
    "092504896862",
    "096998465921",
    "097952652326",
    "095235656963",
    "095235656963",],
  xaxis: {
    labels: {
      show: true,
      rotate: -90,
      rotateAlways: true,
      minHeight: 70,
      maxHeight: 100,
    },
    tooltip: {
      enabled: false
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      show: true,
      formatter: function (value) {
        return value.toLocaleString();
      }
    },
    min: 0,
    max:  10000,
  },
  grid: {
    show: true, 
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
  },
  responsive: [
  ],  
};

topup:boolean=true;
giftCard:boolean=false;
dth:boolean=false;
elec:boolean=false;
postPaid:boolean=false;
overseaTopup:boolean=false;

topupClick(){
  this.topup=true;
  this.giftCard=false;
  this.dth=false;
  this.elec=false;
  this.postPaid=false;
  this.overseaTopup=false;
}

giftCardClick(){
  this.topup=false;
  this.giftCard=true;
  this.dth=false;
  this.elec=false;
  this.postPaid=false;
  this.overseaTopup=false;
}

dthClick(){
  this.topup=false;
  this.giftCard=false;
  this.dth=true;
  this.elec=false;
  this.postPaid=false;
  this.overseaTopup=false;
}

elecClick(){
  this.topup=false;
  this.giftCard=false;
  this.dth=false;
  this.elec=true;
  this.postPaid=false;
  this.overseaTopup=false;
}

postPaidClick(){
  this.topup=false;
  this.giftCard=false;
  this.dth=false;
  this.elec=false;
  this.postPaid=true;
  this.overseaTopup=false;
}

overseasTopupClick(){
  this.topup=false;
  this.giftCard=false;
  this.dth=false;
  this.elec=false;
  this.postPaid=false;
  this.overseaTopup=true;
}

  ngOnInit(): void {
    setTimeout(() => {
      this.customOptions = {
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
    }, 1);
  }

  constructor(public dialog: MatDialog) { }

  toptenCashbackFilter(){
    const dialogRef = this.dialog.open(ToptenCashbackDashboardFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  cashbackAmtPerFilter(){
    const dialogRef = this.dialog.open(CashbackAmountPercentageDashboardFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  serviceCategoryFilter(){
    const dialogRef = this.dialog.open(ServiceCategoryDashboardFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  cashbackStateDivisionFilter(){
    const dialogRef = this.dialog.open(CashbackStateDivisonDashboardFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }
}
