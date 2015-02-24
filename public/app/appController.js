/**
 * Created by leo on 2/21/15.
 */

var fleetApp = angular.module("fleetApp");

fleetApp.controller("appController",function($scope){
    $scope.moduleName = "";
    $scope.setTitle = function(titleName){
        $scope.moduleName = titleName.capitalize();
    }



    String.prototype.capitalize = function(){
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };

});