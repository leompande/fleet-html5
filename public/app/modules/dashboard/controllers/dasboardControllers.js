/**
 * Created by leo on 2/21/15.
 */
var dashboardModule = angular.module("dashboardModule");

dashboardModule.controller("dashboardController",['$scope','$route', '$http', '$resource', 'baseUrlVehicles','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){
    $scope.setSubModule('');
    $scope.vehicleList = 10;
    $scope.vehiclesResource = $resource(baseUrlVehicles + ":id", { id: "@id" },{ create: { method: "POST" }, save: { method: "PUT" },update: {method:'PUT'}});
    $scope.listVehicles = function(){
        var vehicles = $scope.vehiclesResource.query();
        vehicles.$promise.then(function (data) {
            $scope.vehicleList = data;
        });
    }

    $scope.listVehicles();

    $scope.utilization = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Vehicle Utilization, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Percentage Number Of vehicle',
            data: [
                ['Garage Vehicle',  $scope.vehicleList*0.1],
                ['Idle Vehicle', $scope.vehicleList*0.5],
                {
                    name: 'Reserved Vehicle',
                    y: $scope.vehicleList*0.2,
                    sliced: true,
                    selected: true
                },
                ['On Road Vehicle',    $scope.vehicleList*0.2]
            ]
        }]
    }
    $scope.reservation =  {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Vehicle Reservation, 2015'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Oct','Sep','Nov','Dec'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number Of Vehicles',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total Reservation',
            data: [7, 31, 35, 23, 2,13, 156, 47, 8, 6,22,56]
        }, {
            name: 'Postponed Reservation',
            data: [33, 56, 97, 48, 6,78,98,93, 9, 44, 32, 34]
        }, {
            name: 'Year 2008',
            data: [73, 14, 54, 47, 48, 6,78,98,34,54, 72, 34]
        }]
    }
    $scope.consuption = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Yearly Average Fuel Consumption,2015'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Volume'
            },
            labels: {
                formatter: function () {
                    return this.value + ' ltr';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: 'Petrol',
            marker: {
                symbol: 'square'
            },
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                y: 26.5,
                marker: {
                    symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
                }
            }, 23.3, 18.3, 13.9, 9.6]

        }, {
            name: 'Diesel',
            marker: {
                symbol: 'diamond'
            },
            data: [{
                y: 3.9,
                marker: {
                    symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
                }
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }

}]);