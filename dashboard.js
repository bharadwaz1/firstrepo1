'use strict';



window.chartColors = {
	green: '#75c181', 
	blue: '#5b99ea', 
	gray: '#a9b5c9',
	text: '#252930',
	border: '#e7e9ed'
};


var randomDataPoint = function(){ return Math.round(Math.random()*100)};




var lineChartConfig = {
	type: 'line',

	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		
		datasets: [{
			label: 'Dataset',
			backgroundColor: "rgba(117,193,129,0.2)", 
			borderColor: "rgba(117,193,129, 0.8)", 
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
		}]
	},
	options: {
		responsive: true,		
		
		legend: {
			display: true,
			position: 'bottom',
			align: 'end',
		},

		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
            callbacks: {
                label: function(tooltipItem, data) {	                 
	                return tooltipItem.value + '%';   
                }
            },
            

		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				
				}
			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return value.toLocaleString() + '%';  
		            }
		        },
			}]
		}
	}
};



//Bar Chart Demo

var barChartConfig = {
	type: 'bar',

	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: "rgba(117,193,129,0.8)", 
			hoverBackgroundColor: "rgba(117,193,129,1)",
			
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		}, 
		{
			label: 'Dataset 2',
			backgroundColor: "rgba(91,153,234,0.8)", 
			hoverBackgroundColor: "rgba(91,153,234,1)",
			
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		}
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'bottom',
			align: 'end',
		},

		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			callbacks: {
                label: function(tooltipItem, data) {	                 
	                return tooltipItem.value + '%';   
                }
            },
			

		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},

			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.borders,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return value + '%';  
		            }
		        },

				
			}]
		}
		
	}
}





var pieChartConfig = {
	type: 'pie',
	data: {
		datasets: [{
			data: [
				randomDataPoint(),
				
				randomDataPoint(),
			],
			backgroundColor: [
				window.chartColors.green,
				window.chartColors.blue,
				

			],
			label: 'Dataset 1'
		}],
		labels: [
			'Likes',
			'Dislikes',
		]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			align: 'center',
		},

		tooltips: {
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			
			
			callbacks: {
                label: function(tooltipItem, data) {
					
					var dataset = data.datasets[tooltipItem.datasetIndex];
					
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
					});
					
					var currentValue = dataset.data[tooltipItem.index];
					
					var percentage = Math.floor(((currentValue/total) * 100)+0.5);
					
					return percentage + "%";
			    },
            },
			

		},
	}
};





var doughnutChartConfig = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
			],
			backgroundColor: [
				window.chartColors.green,
				window.chartColors.blue,
				window.chartColors.gray,

			],
			label: 'Dataset 1'
		}],
		labels: [
			'Followers',
			'Clicks',
			'shares',
		]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			align: 'center',
		},

		tooltips: {
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			
			animation: {
				animateScale: true,
				animateRotate: true
			},
			
			
			callbacks: {
                label: function(tooltipItem, data) {
					
					var dataset = data.datasets[tooltipItem.datasetIndex];
					
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
					});
			
					var currentValue = dataset.data[tooltipItem.index];
					
					var percentage = Math.floor(((currentValue/total) * 100)+0.5);
					
					return percentage + "%";
			    },
            },
			

		},
	}
};




window.addEventListener('load', function(){
	
	var lineChart = document.getElementById('chart-line').getContext('2d');
	window.myLine = new Chart(lineChart, lineChartConfig);
	
	var barChart = document.getElementById('chart-bar').getContext('2d');
	window.myBar = new Chart(barChart, barChartConfig);
	
	var pieChart = document.getElementById('chart-pie').getContext('2d');
	window.myPie = new Chart(pieChart, pieChartConfig);
	
	var doughnutChart = document.getElementById('chart-doughnut').getContext('2d');
	window.myDoughnut = new Chart(doughnutChart, doughnutChartConfig);
	

});	
'use strict';



window.chartColors = {
	green: '#00338D',
	gray: '#a9b5c9',
	text: '#252930',
	border: '#e7e9ed'
};


var randomDataPoint = function(){ return Math.round(Math.random()*10000)};


//Chart.js Line Chart Example 

var lineChartConfig = {
	type: 'line',

	data: {
		labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
		
		datasets: [{
			label: 'Current week',
			fill: false,
			backgroundColor: window.chartColors.green,
			borderColor: window.chartColors.green,
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
		}, {
			label: 'Previous week',
		    borderDash: [3, 5],
			backgroundColor: window.chartColors.gray,
			borderColor: window.chartColors.gray,
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
			fill: false,
		}]
	},
	options: {
		responsive: true,	
		aspectRatio: 1.5,
		
		legend: {
			display: true,
			position: 'bottom',
			align: 'end',
		},
		
		title: {
			display: true,
			text: 'Daily Likes',
			
		}, 
		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,

            callbacks: {
	           
                label: function(tooltipItem, data) {
	                if (parseInt(tooltipItem.value) >= 1000) {
                        return "" + tooltipItem.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
	                    return '' + tooltipItem.value;
                    }
                }
            },

		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				
				}
			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return '' + value.toLocaleString();   //Ref: https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
		            }
		        },
			}]
		}
	}
};


 

var barChartConfig = {
	type: 'bar',

	data: {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [{
			label: 'Comments',
			backgroundColor: window.chartColors.green,
			borderColor: window.chartColors.green,
			borderWidth: 1,
			maxBarThickness: 16,
			
			data: [
				23,
				45,
				76,
				75,
				62,
				37,
				83
			]
		}]
	},
	options: {
		responsive: true,
		aspectRatio: 1.5,
		legend: {
			position: 'bottom',
			align: 'end',
		},
		title: {
			display: true,
			text: 'Weekly comments'
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,

		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},

			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.borders,
				},

				
			}]
		}
		
	}
}








window.addEventListener('load', function(){
	
	var lineChart = document.getElementById('canvas-linechart').getContext('2d');
	window.myLine = new Chart(lineChart, lineChartConfig);
	
	var barChart = document.getElementById('canvas-barchart').getContext('2d');
	window.myBar = new Chart(barChart, barChartConfig);
	

});	
	

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    
    type: 'line',

 
    data: {
        labels: ['Likes', 'Disliks', 'Share', 'Followers', 'Pokes'],
        datasets: [{
            label: 'Total graph',
            backgroundColor: '#00338D',
            borderColor: '#00338D',
            data: [200, 300, 400, 2000, 1000, 309, 2009]
        }]
    },

 
    options: {}
});








