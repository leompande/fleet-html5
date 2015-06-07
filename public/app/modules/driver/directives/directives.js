/**
* Created by leo on 2/26/15.
*/
angular.module("driverApp")
    .directive("customeDriverTable", function () {
        return {
            link: function (scope, element, attrs) {
                /**
                 * Important variables for directives
                 */
                var myEl = angular.element( document.querySelector( '.dropdown-menus' ) );
                var myD  = angular.element( document.querySelector( '.drops' ) );
                var inlineEditMenu = angular.element( document.querySelector( '#inlineEdit' ) );
                var viewMoreMenu = angular.element( document.querySelector( '#viewMore' ) );
                scope.modalTile = "";
                scope.id = null;


                $('html').click(function() {
                    myEl.css('display','none');
                });


                scope.contextMenu = function(event,jsonObject){
                    scope.modalTile = "DETAILED INFORMATION FOR DRIVER: "+jsonObject['first_name']+" "+jsonObject['middle_name']+" "+jsonObject['last_name'];
                    scope.currentDriver = jsonObject;
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
                    scope.offsetY = event.clientY;//(event.clientY-100);
                }

                scope.inlineEdit = function(id){
                    $(".input_"+id).css('display','block');
                    $(".text_"+id).css('display','none');
                    $(".input_"+scope.id).click(function(e){
                        e.stopPropagation();
                    });


                }

                scope.ediDriver = function(){
                    scope.editDriver({arg1:scope.id});
                }

                scope.delDriver = function(){
                    scope.deleteDriver({arg1:scope.id});
                }


            },
            restrict:"E",
            scope: {
                editDriver: "&edit",
                updateInline: "&inline",
                viewMore: "&more",
                deleteDriver: "&delete",
                tableData: "=list",
                colums:"=colums",
                titles:"=titles"
            },
            templateUrl:"public/app/modules/driver/directives/templates/customeTable.html"
        }
    })