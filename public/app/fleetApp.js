/**
 * Created by leo on 2/21/15.
 *
 * This is the application main module
 *
 * All the constants,system wide applied variables,
 * filers and  services are declared
 * or used directly here
 *
 *
 */


var fleetApp = angular.module("fleetApp",['ngRoute','dashboardModule','vehicleApp']);

    // fleet module configurations
   fleetApp.config(['$routeProvider', function($routeProvider) {
       $routeProvider
       .when('/dashboard', {
           templateUrl: "public/app/views/dashboard.html",
           controller: ""
       })
       .when('/dataentry', {
               templateUrl: "public/app/views/dataentry.html",
               controller: ""
       })
       .when('/report', {
               template: '<h5>This is the report</h5>'
       })
       .when('/drivers', {
               templateUrl: "public/app/modules/driver/views/index.html",
               controller: ""
       })
       .when('/vehicles', {
               templateUrl: "public/app/modules/vehicle/views/index.html",
               controller: ""
       })
       .when('/model', {
               template: '<h5>This is the vehicle models</h5>'
       })
       .when('/makes', {
               template: '<h5>This is the vehicle makes</h5>'
       })
       .when('/fuels', {
               template: '<h5>This is the vehicle fuels</h5>'
       })
       .otherwise({redirectTo: '/dashboard'});
   }]);