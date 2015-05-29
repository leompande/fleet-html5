/**
 * Created by leo on 2/26/15.
 */
angular.module("reservationApp")
    .directive("customeReservationTable", function () {
               return {
            link: function (scope, element, attrs) {


            },
            restrict:"E",
            scope: true,
            template:"<p>Blank Directive</p>"
        }
    });