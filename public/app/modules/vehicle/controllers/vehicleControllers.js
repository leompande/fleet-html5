/**
 * Created by leo on 2/21/15.
 */
var vehicleApp = angular.module("vehicleApp");
    vehicleApp.controller("vehicleController",['$scope', '$http', '$resource', 'baseUrlVehicles',function($scope, $http, $resource, baseUrlVehicles){
        $scope.vehicleModuleTitle = "REGISTERED VEHICLES";
        $scope.vehicleObject = {
            registration_number: "",
            vehicle_control_number: "",
            first_registered: "",
            model_number: "",
            body_type: "",
            color: "",
            class: "",
            year_of_manufacture: "",
            chassis_no: "",
            engine_no: "",
            engine_capacity: "",
            fuel_used: "",
            number_of_axles: "",
            axle_distance: "",
            seat_capacity: "",
            tare_weight: "",
            gross_weight: "",
            imported_from: "",
            usage_id: "",
            modal_id: "",
            make_id: "",
            fuel_consumption_rate: ""

        };
        $scope.shownColumn = {0:'registration_number',1:'vehicle_control_number',2:'body_type',3:'fuel_used',4:'fuel_consumption_rate',5:'seat_capacity'};
        $scope.shownTitles = {0:'Reg Number',1:'Model',2:'Body Type',3:'Fuel',4:'Consumption Rate',5:'Seat Capacity'};
        //$scope.vehicleList  = null;
        $scope.listTabState = "active";
        $scope.addTabState = null;
        $scope.vehiclesResource = $resource(baseUrlVehicles + ":id", { id: "@id" },{ create: { method: "POST" }, save: { method: "PUT" }});



        $scope.saveVehicle = function(vehicle){
            new $scope.vehiclesResource(vehicle).$create().then(function (newVehicle) {
                $scope.vehicleList.push(newVehicle);

            });
        }


        $scope.listVehicles = function(){
            var vehicles = $scope.vehiclesResource.query();

            vehicles.$promise.then(function (data) {
                $scope.vehicleList = data;
            });


        }

        $scope.showVehicle = function(id){

        }



        $scope.editVehicle = function(id){

        }


        $scope.deleteVehicle = function(id){

        }


        $scope.addVehicle  = function(newVehicle){
            $scope.vehicleObject.registration_number    = newVehicle.registration_number;
            $scope.vehicleObject.vehicle_control_number = newVehicle.vehicle_control_number;
            $scope.vehicleObject.first_registered       = newVehicle.first_registered;
            $scope.vehicleObject.model_number           = newVehicle.model_number;
            $scope.vehicleObject.body_type              = newVehicle.body_type;
            $scope.vehicleObject.bodycolor              = newVehicle.bodycolor;
            $scope.vehicleObject.vehicleclass           = newVehicle.vehicleclass;
            $scope.vehicleObject.year_of_manufacture    = newVehicle.year_of_manufacture;
            $scope.vehicleObject.chassis_no             = newVehicle.chassis_no;
            $scope.vehicleObject.engine_no              = newVehicle.engine_no;
            $scope.vehicleObject.engine_capacity        = newVehicle.engine_capacity;
            $scope.vehicleObject.fuel_used              = newVehicle.fuel_used;
            $scope.vehicleObject.number_of_axles        = newVehicle.number_of_axles;
            $scope.vehicleObject.axle_distance          = newVehicle.axle_distance;
            $scope.vehicleObject.seat_capacity          = newVehicle.seat_capacity;
            $scope.vehicleObject.tare_weight            = newVehicle.tare_weight;
            $scope.vehicleObject.gross_weight           = newVehicle.gross_weight;
            $scope.vehicleObject.imported_from          = newVehicle.imported_from;
            $scope.vehicleObject.usage_id               = newVehicle.usage_id;
            $scope.vehicleObject.modal_id               = newVehicle.modal_id;
            $scope.vehicleObject.make_id                = newVehicle.make_id;
            $scope.vehicleObject.fuel_consumption_rate  = newVehicle.fuel_consumption_rate;

            $scope.saveVehicle($scope.vehicleObject);

        }




        $scope.changeState = function(id){

            if($scope.listTabState=="active" && id=="list"){
                $scope.listTabState = "active";
                $scope.addTabState = null;
                $scope.vehicleModuleTitle = "REGISTERED VEHICLES";
            }else{
                $scope.addTabState = "active";
                $scope.listTabState = null;
                $scope.vehicleModuleTitle  = "ADD/EDIT NEW VEHICLE";
            }

            if($scope.addTabState=="active" && id =="add"){
                $scope.addTabState = "active";
                $scope.listTabState = null;
                $scope.vehicleModuleTitle  = "ADD/EDIT NEW VEHICLE";
            }else{
                $scope.addTabState = null;
                $scope.listTabState = "active";
                $scope.vehicleModuleTitle  = "REGISTERED VEHICLES";
            }
        }

        $scope.listVehicles();

    }]);
