import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, ChartModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas: [
    NO_ERRORS_SCHEMA, // Add NO_ERRORS_SCHEMA here
  ],
})
export class DashboardComponent {
  tableHeadings = ['Name', 'Email', 'Phone', 'City', 'Country'];
  tableData = [
    ['John Doe', 'john.doe@example.com', '+1234567890', 'New York', 'USA'],
  ];

  currentPage = 1;
  data: any;
  options: any;
  data1: any;
  options1: any;
  data2: any;
  options2: any;
  basicData: any;

  basicOptions: any;
  ngOnInit() {
    this.getPieChart();
    this.getLineChart();
    this.getbarChart();
    this.gethighChart();
  }
  getPieChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
  getLineChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data1 = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'data',
          data: [65, 60, 70, 71],
          // fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        // {
        //   // label: 'Second Dataset',
        //   data: [28, 48, 40, 19, 86, 27, 90],
        //   fill: false,
        //   borderColor: documentStyle.getPropertyValue('--pink-500'),
        //   tension: 0.4,
        // },
      ],
    };

    this.options1 = {
      maintainAspectRatio: false,
      aspectRatio: 1.6,
      plugins: {
        legend: {
          // labels: {
          //   color: textColor,
          // },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
  getbarChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data2 = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'data',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81],
        },
        // {
        //   label: 'My Second dataset',
        //   backgroundColor: documentStyle.getPropertyValue('--pink-500'),
        //   borderColor: documentStyle.getPropertyValue('--pink-500'),
        //   data: [28, 48, 40, 19],
        // },
      ],
    };

    this.options2 = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 1.7,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        // y: {
        //   ticks: {
        //     color: textColorSecondary,
        //   },
        //   grid: {
        //     color: surfaceBorder,
        //     drawBorder: false,
        //   },
        // },
      },
    };
  }
  gethighChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1'],
      datasets: [
        {
          label: 'data',
          data: [540],
          backgroundColor: [
            '#26b18e',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            '#26b18e',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
