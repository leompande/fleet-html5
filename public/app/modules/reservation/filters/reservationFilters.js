/**
 * Created by leo on 6/3/15.
 */
var dashboardModule = angular.module("reservationApp");
dashboardModule.filter('FilterPeriod',function(){
    return function(jsonObjects,month,year){
        var monthIndex = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        var newObj = [];
        angular.forEach(jsonObjects,function(jsonObject){
          var dateObject = new Date(jsonObject.start_date);
            if(year==dateObject.getFullYear() && month==monthIndex[dateObject.getMonth()]){
                newObj.push(jsonObject);

            }
        });

        return newObj;
    }
});
dashboardModule.filter('toDate',function(){
    return function(jsonObject){
        //angular.forEach(jsonObjects,function(index,jsonObject){
        // if(jsonObject<10){
        //     jsonObjects[index] = "0"+jsonObject;
        // }
        //});
        if(jsonObject<10){
            jsonObject = "0"+jsonObject;
        }
        return jsonObject;
    }
});