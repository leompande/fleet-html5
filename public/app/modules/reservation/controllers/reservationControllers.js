/**
 * Created by leo on 2/21/15.
 */
var dashboardModule = angular.module("reservationApp");

dashboardModule.controller("reservationController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','ReservationService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,ReservationService){
    $scope.reservationModuleTitle = "VEHICLE RESERVATIONS";
    $scope.urlInclude = "public/app/modules/reservation/views/reservations.html";
    $scope.modalTile = null;
    $scope.controlSubmenu = function(submenu){
        $scope.reservationModuleTitle = 'VEHICLE RESERVATIONS / '+submenu;
        if(submenu=='Reservations'){
            $scope.urlInclude = "public/app/modules/reservation/views/reservations.html";
        }
        if(submenu=='Reserved Vehicles'){
            $scope.urlInclude = "public/app/modules/reservation/views/reservedvehicles.html";
        }
        if(submenu=='Postponed Reservations'){
            $scope.urlInclude = "public/app/modules/reservation/views/postponed.html";
        }
        if(submenu=='CheckOuts'){
            $scope.urlInclude = "public/app/modules/reservation/views/checkouts.html";
        }
        if(submenu=='Cancelled Reservations'){
            $scope.urlInclude = "public/app/modules/reservation/views/cancelled.html";
        }

    }
    $scope.addReservationForm = function(){
        $scope.modalTile = "ADDING NEW VEHICLE RESERVATION"
    }

    $scope.addReservation = function(newReservation){
        if(newReservation){
           ReservationService.addReservations(newReservation).then(function(data){

           });
           ReservationService.listReservations().then(function(data){
                $scope.reservation = data;
            });
        }

    }
    /*
    * List reservations from reservation service
    * */
    ReservationService.listReservations().then(function(data){
            $scope.reservation = data;
        });
    ReservationService.listReserveVehicles().then(function(data){
            $scope.reservedvehicles = data;
        });

}]);


dashboardModule.controller("reservationsController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','VehicleService','ReservationService','DriverService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,VehicleService,ReservationService,DriverService){
$scope.selectedReservationId = 1;
        $scope.months = ['January','February','March','April','May','June','July','August','October','September','November','December'];
        $scope.monthIndex = ['01','02','03','04','05','06','07','08','09','10','11','12'];

        $scope.periodYear = new Date().getFullYear();
        $scope.periodMonth = $scope.monthIndex[new Date().getMonth()];
        $scope.defaultMonth = $scope.months[$scope.monthIndex.indexOf($scope.periodMonth)]
        $scope.view = "Chart";
        $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.months[$scope.monthIndex.indexOf($scope.periodMonth)]+" "+$scope.periodYear;
        $scope.vehicles = {};
        $scope.classChart = [31+$scope.vehicles.length];
        $scope.periodChange = function(){
            $scope.defaultMonth = null;
            $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.months[$scope.monthIndex.indexOf($scope.periodMonth)]+" "+$scope.periodYear;
        }
        $scope.nextPrev = function(action){

            if(action==="next"){
                if($scope.periodYear<new Date().getFullYear()){
                    $scope.defaultMonth =null;
                    $scope.periodYear=$scope.periodYear+1;
                }else{}

            }
            if(action==="prev"){

                if($scope.periodYear>2000){
                    $scope.defaultMonth = null
                    $scope.periodYear=$scope.periodYear-1;
                }else{}
            }
            $scope.chartTitle = "Vehicle Reservation "+$scope.view+": "+$scope.months[$scope.monthIndex.indexOf($scope.periodMonth)]+" "+$scope.periodYear;
        }

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

    var ranges = function() {
        $scope.days = 30;
        var range = [];
        for (var i = 1; i <= $scope.days; i++) {
            range.push(i);
        }
        $scope.range = range;
    }
    ranges();

        VehicleService.listVehicles().then(function(data){
                $scope.vehicles = data;
                $scope.populateClass = function(){

                    var arr = [];
                    for(var i=1;i<=31;i++){
                        angular.forEach($scope.vehicles,function(value,index){
                            arr[i] = "postponed";
                            $scope.classChart[value.id] = arr;
                        });
                    }
                }
                $scope.populateClass();
            },
            function(errorMessage){
                $scope.error=errorMessage;
            });


    ReservationService.listReserveVehicles().then(function(data){
        $scope.reservedvehicles = data;
    });
    ReservationService.listReserveVehicles();

    DriverService.listDrivers().then(function(data){
            $scope.drivers = data;

        },
        function(errorMessage){
            $scope.error=errorMessage;
        });
    DriverService.listDrivers();

}]);

dashboardModule.controller("reservedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','VehicleService','DriverService','ReservationService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,VehicleService,DriverService,ReservationService){
    VehicleService.listVehicles().then(function(data){
            $scope.vehicles = data;
        },
        function(errorMessage){
            $scope.error=errorMessage;
        });
    VehicleService.listVehicles();

    DriverService.listDrivers().then(function(data){
            $scope.drivers = data;

        },
        function(errorMessage){
            $scope.error=errorMessage;
        });
    DriverService.listDrivers();

    ReservationService.listReservations().then(function(data){
        $scope.reservations = data;
    });
    ReservationService.listReservations();
}]);


dashboardModule.controller("checkoutController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder){

}]);


dashboardModule.controller("postponedController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','ReservationService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,ReservationService){
    ReservationService.listReservations().then(function(data){
        $scope.postponed = data;
    });

    ReservationService.listReserveVehicles().then(function(data){
        $scope.reservedvehicles = data;
    });
}]);

dashboardModule.controller("cancelledController",['$scope','$route', '$http', '$resource', 'baseUrlReservations','DTOptionsBuilder', 'DTColumnDefBuilder','ReservationService',function($scope,$route, $http, $resource, baseUrlVehicles, DTOptionsBuilder, DTColumnDefBuilder,ReservationService){
    ReservationService.listReservations().then(function(data){
        $scope.cancelled = data;
    });
    ReservationService.listReserveVehicles().then(function(data){
        $scope.reservedvehicles = data;
    });
}]);


