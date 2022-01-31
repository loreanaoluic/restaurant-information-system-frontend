

import { Component, ViewChild, OnInit } from "@angular/core";
import { DateRange } from 'igniteui-angular';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { Report } from "src/modules/app/models/Report";
import { ManagerService } from "../../services/manager.service";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public report : Report;
  public range: DateRange ;
  
  constructor(private managerService:ManagerService) {
    this.set_chartOptions(10,15);
    
  }

  public datesChange(){
    const start_date = (this.range.start as Date) ;
    const end_date = this.range.end as Date;
    start_date.setMinutes(0);
    start_date.setHours(0);
    start_date.setSeconds(0);
    start_date.setMilliseconds(0);
    const start_date_number = start_date.getTime();
    end_date.setMinutes(59);
    end_date.setSeconds(59);
    end_date.setMilliseconds(59);
    end_date.setHours(23);
    
    const end_date_number = end_date.getTime();
      this.managerService.getDateRangeReport(start_date_number, end_date_number).subscribe(
        (response : any) => {
          this.report = response;
          this.set_chartOptions(this.report.income,this.report.expense);
         
      });
  }
  public set_chartOptions(income:number, expense:number){
    this.chartOptions = {
      series: [
        {
          name: "in total",
          data: [income, expense]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: [
        "#008FFB",
        "#00E396"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["income"],
          ["expense"],
          
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396"
              
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }

 

  //inicijalno prikazi ukupno prihode i rashode

  ngOnInit(): void {
    this.managerService.getAllReport().subscribe(
      (response : any) => {
        this.report = response;
        this.set_chartOptions(this.report.income,this.report.expense);
        
    });
  }

}
