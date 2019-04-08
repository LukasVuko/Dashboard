// Line Chart
function createLineChart(destination, type, labels, data) {
  let ctx = document.getElementById(destination).getContext("2d");

  lineChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: "rgba(116, 119, 191, 0.2)",
          borderColor: "#7477BF",
          borderWidth: 1,
          lineTension: 0,
          pointRadius: 6,
          pointHoverBorderColor: "#436678",
          pointBackgroundColor: "#fff"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    }
  });
}

let myLineChart = "myLineChart";
let typeLine = "line";
let labelsTrafficHourly = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm"
];
let dataTrafficHourly = [12, 28, 35, 21, 44, 61, 57, 29, 6, 8, 3];
createLineChart(myLineChart, typeLine, labelsTrafficHourly, dataTrafficHourly);

// Bar Chart
function createBarChart(destination, type, labels, data) {
  let ctx = document.getElementById(destination).getContext("2d");

  lineChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: "rgba(115, 120, 186, 1)",
          hoverBackgroundColor: "rgba(115, 120, 186, .8)"
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  });
}
let myBarChart = "myBarChart";
let typeBar = "bar";
let labelsBarChart = ["S", "M", "T", "W", "T", "F", "S"];
let dataBarChart = [75, 100, 200, 160, 220, 200, 150];
createBarChart(myBarChart, typeBar, labelsBarChart, dataBarChart);

// Circle Chart
function createCircleChart(destination, type, labels, data) {
  let ctx = document.getElementById(destination).getContext("2d");

  lineChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(115, 120, 186, 1)"
          ],
          hoverBackgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(115, 120, 186, 1)"
          ]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1,
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 20,
          padding: 15,
          fontSize: 16
        }
      }
    }
  });
}
let myCircleChart = "myCircleChart";
let typeCircle = "doughnut";
let labelsCircleChart = ["Desktop", "Tablets", "Phones"];
let dataCircleChart = [12, 13, 75];

createCircleChart(
  myCircleChart,
  typeCircle,
  labelsCircleChart,
  dataCircleChart
);
