/**
 * Created by leo on 2/21/15.
 */
var userModule = angular.module("userApp");

userModule.controller("userController",['$scope','$route', '$http', '$resource', 'baseUrlUsers','DTOptionsBuilder', 'DTColumnDefBuilder','UserService',function($scope,$route, $http, $resource, baseUrlUsers, DTOptionsBuilder, DTColumnDefBuilder,UserService){}]);

