/**
 * Created by leo on 2/26/15.
 */
angular.module("vehicleApp")
    .directive("customeVehicleTable", function () {
        return {
            link: function (scope, element, attrs) {
                var myEl = angular.element( document.querySelector( '.dropdown-menus' ) );
                var myD = angular.element( document.querySelector( '.drops' ) );
                var inlineEditMenu = angular.element( document.querySelector( '#inlineEdit' ) );
                scope.id = null;


                $('html').click(function() {
                    myEl.css('display','none');
                });


               scope.contextMenu = function(event,jsonObject){
                   scope.openLocation(event);

                   $(".input_"+scope.id).css('display','none');
                   $(".text_"+scope.id).css('display','block');

                   myD.css('top',scope.offsetY+"px");
                   myD.css('left',scope.offsetX+"px");
                   myEl.css('display','block');
                   $('div.panel-body').click(function(e){
                       event.stopPropagation();
                   });

                   inlineEditMenu.on("click",function(){
                       scope.inlineEdit(jsonObject);
                   });

                   scope.id = jsonObject.id;
               }

               scope.openLocation = function(event){
                   scope.offsetX =event.clientX;//(event.clientX-100);
                   scope.offsetY = event.clientY;//(event.clientY-100);
               }

                scope.inlineEdit = function(jsonObject){
                    $(".input_"+jsonObject.id).css('display','block');
                    $(".text_"+jsonObject.id).css('display','none');
                }

            },
            restrict:"E",
            scope: {
                tableData: "=list",
                colums:"=colums",
                titles:"=titles"
            },
            templateUrl:"public/app/modules/vehicle/directives/templates/customeTable.html"
        }
    }).filter("search", function () {
        return function (data,searchValue) {



        }
    });