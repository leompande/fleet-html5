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


var fleetApp = angular.module("fleetApp",['ngRoute','highcharts-ng','dashboardModule','vehicleApp','driverApp','reservationApp','angularjs-dropdown-multiselect','720kb.datepicker']);

    // fleet module configurations
   fleetApp.config(['$routeProvider', function($routeProvider) {
       $routeProvider
       .when('/dashboard', {
           templateUrl: "public/app/views/dashboard.html",
           controller: "dashboardController"
       })
       .when('/dataentry', {
               templateUrl: "public/app/views/dataentry.html",
               controller: "dataEntryController"
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
       .when('/reservation', {
               templateUrl: "public/app/modules/reservation/views/index.html",
               controller: "reservationController"
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

/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */
fleetApp.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});