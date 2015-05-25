/**
 * Created by leo on 2/21/15.
 */
var driverApp = angular.module("driverApp");
driverApp.controller("driverController",['$scope','$route', '$http', '$resource', 'baseUrlDrivers','DTOptionsBuilder', 'DTColumnDefBuilder',function($scope,$route, $http, $resource, baseUrlDrivers, DTOptionsBuilder, DTColumnDefBuilder){
    $scope.driverModuleTitle = "REGISTERED DRIVERS";
    $scope.subModule = $route.current.$$route.originalPath;
    $scope.driverObject = {
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        birthday: "",
        phone: "",
        email: "",
        current_address: "",
        employment_date: "",
        driving_licence_class: ""
    };
    $scope.shownColumn = {0:'first_name',1:'middle_name',2:'last_name',3:'gender',4:'phone',5:'email',5:'current_address',5:'employment_date',5:'driving_licence_class'};
    $scope.shownTitles = {0:'First Name',1:'Middle Name',2:'Last Name',3:'Gender',4:'Phone',5:'Email',5:'Address',5:'Date Employed',5:'Email',5:'ELicence'};
    $scope.listTabState = "active";
    $scope.addTabState = null;
    $scope.driversResource = $resource(baseUrlDrivers + ":id", { id: "@id" },{ create: { method: "POST" }, save: { method: "PUT" }});



    $scope.saveDriver = function(driver){
        new $scope.driversResource(driver).$create().then(function (newDriver) {
            $scope.driverList.push(newDriver);

        });
    }


    $scope.listDrivers = function(){
        var drivers = $scope.driversResource.query();

        drivers.$promise.then(function (data) {
            $scope.driverList = data;
        });


    }

    $scope.showDriver = function(id){

    }



    $scope.editDriver = function(id){

    }


    $scope.deleteDriver = function(id){

    }


    $scope.addDriver  = function(newDriver){
        $scope.driverObject.registration_number    = newDriver.registration_number;
        $scope.driverObject.driver_control_number = newDriver.Driver_control_number;
        $scope.driverObject.first_registered       = newDriver.first_registered;
        $scope.driverObject.model_number           = newDriver.model_number;

        $scope.saveDriver($scope.driverObject);

    }




    $scope.changeState = function(id){

        if($scope.listTabState=="active" && id=="list"){
            $scope.listTabState = "active";
            $scope.addTabState = null;
            $scope.driverModuleTitle = "REGISTERED DRIVERS";
        }else{
            $scope.addTabState = "active";
            $scope.listTabState = null;
            $scope.driverModuleTitle  = "ADD/EDIT NEW DRIVER";
        }

        if($scope.addTabState=="active" && id =="add"){
            $scope.addTabState = "active";
            $scope.listTabState = null;
            $scope.driverModuleTitle  = "ADD/EDIT NEW DRIVER";
        }else{
            $scope.addTabState = null;
            $scope.listTabState = "active";
            $scope.driverModuleTitle  = "REGISTERED DRIVERS";
        }
    }

    $scope.listDrivers();

}]);
