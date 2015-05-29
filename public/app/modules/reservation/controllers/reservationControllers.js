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
            $scope.urlInclude = "public/app/modules/reservation/views/reservations.html";
        }
        if(submenu=='Reserved Vehicles'){
            $scope.reservationClass = '';
            $scope.reservedClass = 'active';
            $scope.checkoutClass = '';
            $scope.postponedClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/reservedvehicles.html";
        }
        if(submenu=='Postponed Reservations'){
            $scope.reservationClass = '';
            $scope.reservedClass = '';
            $scope.checkoutClass = '';
            $scope.postponedClass = 'active';
            $scope.urlInclude = "public/app/modules/reservation/views/postponed.html";
        }
        if(submenu=='CheckOuts'){
            $scope.reservationClass = '';
            $scope.reservedClass = '';
            $scope.checkoutClass = 'active';
            $scope.postponedClass = '';
            $scope.urlInclude = "public/app/modules/reservation/views/checkouts.html";
        }

    }
}]);


dashboardModule.controller("reservationsController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){
        $scope.years = ['2014','2013','2012','2011'];
        $scope.months = ['january','february','march','april'];
        $scope.periodMonth = 'march';
        $scope.periodYear = '2015';
        $scope.chartTitle = "Vehicle Reservation Chart: "+$scope.periodMonth+" "+$scope.periodYear;

        $scope.periodChange = function(){
            $scope.chartTitle = "Vehicle Reservation Chart: "+$scope.periodMonth+" "+$scope.periodYear;
        }

    var drawTheChart = function(){

    }
}]);

dashboardModule.controller("reservedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);


dashboardModule.controller("checkoutController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);


dashboardModule.controller("postponedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){
    
}]);