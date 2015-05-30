/**
 * Created by leo on 2/26/15.
 */
angular.module("reservationApp")
    .directive("reservationTable", function () {
               return {
            link: function (scope, element, attrs) {


            },
                   restrict:"E",
                   scope: {
                       reservations: "=reservations"
                   },
                   templateUrl:"public/app/modules/reservation/directives/templates/reservationTable.html"
        }
    })
    .directive("reservationChart", function () {
               return {
            link: function (scope, element, attrs) {


            },
            restrict:"E",
            scope: {
                vehicles: "=vehicles",
                range: "=range",
                classChart: "=classChart"
            },
            templateUrl:"public/app/modules/reservation/directives/templates/reservationChart.html"
        }
    })
;