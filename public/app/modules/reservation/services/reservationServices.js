/**
 * Created by leo on 6/3/15.
 */
angular.module('reservationApp')
    .factory('ReservationService', ['$http', '$resource','$q', 'baseUrlReservations',function( $http, $resource,$q, baseUrlReservations){
        return{
            apiPath:baseUrlReservations,
            listReservations: function(){
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
            },
            listReserveVehicles:function(){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.get('public/index.php/reservedvehicles/').success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while fetching items");
                });

                //Returning the promise object
                return deferred.promise;
            },
            addReservations:function(newReservation){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.post(this.apiPath,newReservation).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while adding item");
                });

                //Returning the promise object
                return deferred.promise;
            },
            editReservation:function(editedReservation,id){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.get(this.apiPath+id,editedReservation).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while editing item");
                });

                //Returning the promise object
                return deferred.promise;
            },
            deleteReservation:function(id){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.put(this.apiPath+id).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while editing item");
                });

                //Returning the promise object
                return deferred.promise;
            }

        }

    }]);