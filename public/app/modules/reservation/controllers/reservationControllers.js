/**
 * Created by leo on 2/21/15.
 */
var dashboardModule = angular.module("reservationApp");

dashboardModule.controller("reservationController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){
    $scope.reservationModuleTitle = "VEHICLE RESERVATIONS";
    $scope.reservationClass = 'active';
    $scope.urlInclude = "public/app/modules/reservation/views/reservations.html";
    $scope.controlSubmenu = function(submenu){
        $scope.reservationModuleTitle = 'VEHICLE RESERVATIONS / '+submenu;
        if(submenu=='Reservations'){
            $scope.reservationClass = 'active';
            $scope.reservedClass = '';
            $scope.checkoutClass = '';
            $scope.postponedClass = '';
            $scope.cancelledClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/reservations.html";
        }
        if(submenu=='Reserved Vehicles'){
            $scope.reservationClass = '';
            $scope.reservedClass = 'active';
            $scope.checkoutClass = '';
            $scope.postponedClass = '';
            $scope.cancelledClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/reservedvehicles.html";
        }
        if(submenu=='Postponed Reservations'){
            $scope.reservationClass = '';
            $scope.reservedClass = '';
            $scope.checkoutClass = '';
            $scope.postponedClass = 'active';
            $scope.cancelledClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/postponed.html";
        }
        if(submenu=='CheckOuts'){
            $scope.reservationClass = '';
            $scope.reservedClass = '';
            $scope.checkoutClass = 'active';
            $scope.postponedClass = '';
            $scope.cancelledClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/checkouts.html";
        }
        if(submenu=='Cancelled Reservations'){
            $scope.reservationClass = '';
            $scope.reservedClass = '';
            $scope.checkoutClass = '';
            $scope.postponedClass = '';
            $scope.cancelledClass = 'active';
            $scope.urlInclude = "public/app/modules/reservation/views/cancelled.html";
        }

    }
}]);


dashboardModule.controller("reservationsController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','VehicleService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,VehicleService){
        $scope.years = ['2014','2013','2012','2011'];
        $scope.months = ['january','february','march','april'];
        $scope.periodMonth = 'march';
        $scope.periodYear = '2015';
        $scope.view = "Chart";
        $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.periodMonth+" "+$scope.periodYear;
        $scope.vehicles = null;
        $scope.periodChange = function(){
            $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.periodMonth+" "+$scope.periodYear;
        }

        $scope.reservations = [
            {
                'title':'Office Innovation Exhibitions',
                'start_date':'5th july 2015',
                'end_date':'12th july 2015',
                'number_of_vehicles':'4',
                'possible_route':'Morogoro',
                'reserved_to':'Staff Members'
            },{
                'title':'Customer Service Week tarime',
                'start_date':'12th june 2015',
                'end_date':'19th june 2015',
                'number_of_vehicles':'12',
                'possible_route':'Tarime',
                'reserved_to':'Customer Service Staff'
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },{
                'title':'',
                'start_date':'',
                'end_date':'',
                'number_of_vehicles':'',
                'possible_route':'',
                'reserved_to':''
            },
        ]
    var drawTheChart = function(){

    }


    $scope.views = function(view){
        $scope.view = view;
        $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.periodMonth+" "+$scope.periodYear;

    }
    var prettfy = function (i) {
        var dateString= "";
        if(i==1|| i==21 || i==31){
            dateString= i+"st";
    }else if(i==2 || i==22){
            dateString= i+'nd';
        }else if(i==3||i==23){
            dateString= i+'rd';
        }else{
            dateString= i+'th';
        }
        return dateString;
    }
    $scope.days = 30;
    var range = [];
    for(var i=1;i<=$scope.days;i++) {
        range.push(i);
    }
    $scope.range = range;
    function vehicleList(){
        VehicleService.listVehicles().then(function(data){
                $scope.vehicles = data;
            },
            function(errorMessage){
                $scope.error=errorMessage;
            });
    };
    vehicleList();
}]);

dashboardModule.controller("reservedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);


dashboardModule.controller("checkoutController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);


dashboardModule.controller("postponedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){
    
}]);

dashboardModule.controller("cancelledController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);