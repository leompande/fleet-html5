/**
 * Created by leo on 2/26/15.
 */
angular.module("vehicleApp")
    .directive("customeVehicleTable", function () {
               return {
            link: function (scope, element, attrs) {

                /**
                 * Important variables for directives
                 */
                var myEl = angular.element( document.querySelector( '.dropdown-menus' ) );
                var myD = angular.element( document.querySelector( '.drops' ) );
                var inlineEditMenu = angular.element( document.querySelector( '#inlineEdit' ) );
                var viewMoreMenu = angular.element( document.querySelector( '#viewMore' ) );
                scope.modalTile = "";
                scope.details = false;
                scope.id = null;


                $('html').click(function() {
                    myEl.css('display','none');
                });


               scope.contextMenu = function(event,jsonObject){
                   scope.modalTile = "DETAILED INFORMATION FOR VEHICLE : Reg# "+jsonObject['registration_number']+", Body Type "+jsonObject['body_type'];
                   scope.currentVehicle = jsonObject;
                   scope.openLocation(event);

                   $(".input_"+scope.id).css('display','none');
                   $(".text_"+scope.id).css('display','block');
                   myD.css('top',scope.offsetY+"px");
                   myD.css('left',scope.offsetX+"px");
                   myEl.css('display','block');
                   $('div.panel-body').click(function(e){
                       event.stopPropagation();
                   });

                   scope.id = jsonObject.id;// getting object Id from context menu

                   // edit objects inline through context menus
                   inlineEditMenu.on("click",function(){
                       // pass object Id to inline edit function
                       scope.inlineEdit(scope.id);
                       //scope.update(jsonObject);
                       scope.change = function(newValue,editedColumn,ObjectType){
                           scope.updateInline({objectId:scope.id,edittedColumn:editedColumn,newValue:newValue});
                       }
                   });
                   // edit objects inline through context menus
                   viewMoreMenu.on("click",function(){
                       scope.details = true;
                   });


               }
               scope.openLocation = function(event){
                   scope.offsetX =event.clientX;//(event.clientX-100);
                   scope.offsetY = event.clientY;//(event.clientY-100);
               }

                scope.inlineEdit = function(id){
                    $(".input_"+id).css('display','block');
                    $(".text_"+id).css('display','none');
                    $(".input_"+scope.id).click(function(e){
                        e.stopPropagation();
                    });


                }



            },
            restrict:"E",
            scope: {
                update: "&edit",
                updateInline: "&inline",
                viewMore: "&more",
                remove: "&delete",
                tableData: "=list",
                colums:"=colums",
                titles:"=titles"
            },
            templateUrl:"public/app/modules/vehicle/directives/templates/customeTable.html"
        }
    })
    .directive("vehicleDetails", function () {
               return {
            link: function (scope, element, attrs) {
                console.log(scope.currentVehicle);
            },
            restrict:"E",
            scope: {
                vehicle:"=currentVehicle"
            },
            templateUrl:"public/app/modules/vehicle/directives/templates/vehicleDetails.html"
        }
    })
    .directive("vehicleEdit", function () {
               return {
            link: function (scope, element, attrs) {

            },
            restrict:"E",
            scope: {
            },
            templateUrl:"public/app/modules/vehicle/directives/templates/vehicleEdit.html"
        }
    });