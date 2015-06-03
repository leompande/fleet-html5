/**
 * Created by leo on 2/23/15.
 */
angular.module('vehicleApp')
    .factory('VehicleService', ['$http', '$resource','$q', 'baseUrlVehicles',function( $http, $resource,$q, baseUrlVehicles){
          return{
            apiPath:baseUrlVehicles,
            listVehicles: function(){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.get(this.apiPath).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while fetching items");
                });

                //Returning the promise object
                return deferred.promise;
            }
        }

    }]);