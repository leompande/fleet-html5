/**
 * Created by leo on 2/26/15.
 */
angular.module("reservationApp")
    .directive("reservationTable", function () {
               return {
            link: function (scope, element, attrs) {

                /**
                 * Important variables for directives
                 */
                var myEl = angular.element( document.querySelector( '.dropdown-menus' ) );
                var myD = angular.element( document.querySelector( '.drops' ) );
                var inlineEditMenu = angular.element( document.querySelector( '#inlineEdit' ) );
                var viewMoreMenu   = angular.element( document.querySelector( '#viewMore' ) );
                scope.modalTile    = "";
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
                }
                scope.openLocation = function(event){
                    scope.offsetX =event.clientX/1.5;//(event.clientX-100);
                    scope.offsetY = event.clientY/2;//(event.clientY-100);
                }
                scope.inlineEdit = function(id){
                    $(".input_"+id).css('display','block');
                    $(".text_"+id).css('display','none');
                    $(".input_"+scope.id).click(function(e){
                        e.stopPropagation();
                    });
                }
                scope.ediVehicle = function(){
                    scope.editVehicle({arg1:scope.id});
                }
                scope.delVehicle = function(){
                    scope.deleteVehicle({arg1:scope.id});
                }

            },
                   restrict:"E",
                   scope: {
                       reservations: "=reservations",
                       periodMonth: "=month",
                       periodYear: "=year"
                   },
                   templateUrl:"public/app/modules/reservation/directives/templates/reservationTable.html"
        }
    })
    .directive("reservationChart",['ReservationService',function (ReservationService) {
               return {
            link: function (scope, element, attrs) {
                var rightPanel = angular.element( document.querySelector( '#rightPanel' ) );
                var tablePanel = angular.element( document.querySelector( '#tablePanel' ) );
                rightPanel.hide();
                ReservationService.listReserveVehicles().then(function(data){
                    scope.reservedvehicles = data;
                    scope.selectedReservation = "test";
                    scope.markReservation = function(vehicle,periodYear,periodMonth,date,i){
                        scope.dateChart = periodYear+"-"+periodMonth+"-"+date;
                        var cellid = vehicle.id+"_"+periodMonth+"_"+i;
                        angular.forEach(scope.reservedvehicles,function(value,index) {
                            if(value.vehicle_id==vehicle.id){
                                var reservation = getObjectById(scope.reservations,value.reservation_id, 'id');
                                var fromChartDate = new Date(periodYear + "-" + periodMonth + "-" + date);
                                        var startDate = new Date(reservation.start_date);
                                        var endDate = new Date(reservation.end_date);
                                var match = angular.element( document.querySelector('#id'+cellid) );
                                match.addClass("openclass");
                                        if (fromChartDate > startDate && fromChartDate < endDate) {
                                            if(reservation.postponed>0){
                                                match.addClass("postponed");
                                                match.removeClass("reserved");
                                                match.removeClass("cancelled");
                                            }else if(reservation.cancelled>0){
                                                match.removeClass("postponed");
                                                match.removeClass("reserved");
                                                match.addClass("cancelled");
                                            }else{
                                                match.removeClass("postponed");
                                                match.removeClass("cancelled");
                                                match.addClass("reserved");
                                                match.bind('mouseover',function(e){
                                                    match.attr("title","click to view menu for: "+reservation.title);
                                                });
                                                match.bind('mouseout',function(e){

                                                });
                                                match.bind('click',function(e){

                                                    /**
                                                     * Important variables for directives
                                                     */
                                                    var myEl = angular.element( document.querySelector( '.dropdown-menus' ) );
                                                    var myD = angular.element( document.querySelector( '.drops' ) );
                                                    var inlineEditMenu = angular.element( document.querySelector( '#inlineEdit' ) );
                                                    var viewMoreMenu = angular.element( document.querySelector( '#viewMore' ) );
                                                    var colseRight = angular.element( document.querySelector( '#colseRight' ) );

                                                    // view more right panel
                                                    viewMoreMenu.bind('click',function(e){
                                                        tablePanel.removeClass("col-md-12");
                                                        tablePanel.addClass("col-md-9");
                                                        rightPanel.show();
                                                        // removing right panel
                                                        colseRight.bind('click',function(e){
                                                            tablePanel.removeClass("col-md-9");
                                                            tablePanel.addClass("col-md-12");
                                                            rightPanel.hide();
                                                        });
                                                    });
                                                    scope.modalTile = "";
                                                    scope.id = null;


                                                    $('html').click(function() {
                                                        myEl.css('display','none');
                                                    });


                                                    scope.contextMenu = function(event,jsonObject){
                                                        scope.modalTitle = "DETAILED INFORMATION FOR VEHICLE : Reg# ";
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
                                                        //
                                                        //scope.id = jsonObject.id;// getting object Id from context menu
                                                        //
                                                        //// edit objects inline through context menus
                                                        //inlineEditMenu.on("click",function(){
                                                        //    // pass object Id to inline edit function
                                                        //    scope.inlineEdit(scope.id);
                                                        //    //scope.update(jsonObject);
                                                        //    scope.change = function(newValue,editedColumn,ObjectType){
                                                        //        scope.updateInline({objectId:scope.id,edittedColumn:editedColumn,newValue:newValue});
                                                        //    }
                                                        //});
                                                    }
                                                    scope.openLocation = function(event){
                                                        scope.offsetX =event.clientX/1.5;//(event.clientX-100);
                                                        scope.offsetY = event.clientY/2;//(event.clientY-100);
                                                    }

                                                    //scope.inlineEdit = function(id){
                                                    //    $(".input_"+id).css('display','block');
                                                    //    $(".text_"+id).css('display','none');
                                                    //    $(".input_"+scope.id).click(function(e){
                                                    //        e.stopPropagation();
                                                    //    });
                                                    //
                                                    //
                                                    //}
                                                    scope.contextMenu(e,reservation);



                                                });
                                            }

                                        } else {
                                            match.removeClass("reserved");
                                            match.removeClass("postponed");
                                            match.removeClass("cancelled");
                                            match.addClass("openclass");
                                        }
                            }else{
                                //match.addClass("openclass");
                            }
                        })

                        return true;
                    }
                });

                function getObjectById(array,id,id_name){

                    for (var d = 0, len = array.length; d < len; d += 1) {

                        if (array[d][id_name] === id) {
                            return array[d];
                        }
                    }}
            },
            restrict:"E",
            scope: {
                vehicles: "=?vehicles",
                reservedVehicles: "=?reservedVehicles",
                range: "=?range",
                modalTitle: "=?modalTitle",
                classChart: "=?clchart",
                reservations: "=?reservations",
                periodMonth: "=?month",
                periodYear: "=?year"
            },
            templateUrl:"public/app/modules/reservation/directives/templates/reservationChart.html"
        }
    }])
;