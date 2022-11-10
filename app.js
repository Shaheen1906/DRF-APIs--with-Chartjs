// var employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

// async function dummyChart() {
//   await getDummyData()

// const ctx = document.getElementById('myChart').getContext('2d');

// const chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',

//     // The data for our dataset
//     data: {
//         labels: employeeLabel,
//         datasets: [{
//             label: 'Employee Salary',
//             backgroundColor: 'blue',
//             borderColor: 'rgb(255, 99, 132)',
//             data: employeeSalaryData
//         },
//         {
//           label: 'Employee Age',
//           backgroundColor: 'pink',
//           borderColor: 'rgb(255, 99, 132)',
//           data: employeeAgeData
//       }
//       ]
//     },

//     // Configuration options go here
//     options: {
//       tooltips: {
//         mode: 'index'
//       }
//     }
// })}

// dummyChart()


//Fetch Data from API
function updatechart(){
async function fetchData() {
const apiUrl = "http://127.0.0.1:8000/"

const response = await fetch(apiUrl)
const barChatData = await response.json()
// console.log(barChatData);
return barChatData;
};

fetchData().then(datapoints => {

const date = datapoints.map(
function(index){
return index.date;
})

const rank = datapoints.map(
  function(index){
  return index.rank;
  })

const symbol = datapoints.map(
    function(index){
    return index.symbol;
    })

console.log(date)
console.log(rank)
console.log(symbol)
  myChart.config.data.datasets[0].label = symbol;
  myChart.config.data.labels = date;
  myChart.config.data.datasets[0].data = rank;
  myChart.update();
})

}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});