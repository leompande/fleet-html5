/**
 * Created by leo on 6/10/15.
 */
angular.module('driverApp')
    .factory('DriverService', ['$http', '$resource','$q', 'baseUrlDrivers',function( $http, $resource,$q,baseUrlDrivers){
        return{
            apiPath:baseUrlDrivers,
            listDrivers: function(){
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
            addDriver:function(newDriver){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.post(this.apiPath,newDriver).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while adding item");
                });

                //Returning the promise object
                return deferred.promise;
            },
            editDriver:function(editedDriver,id){
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.get(this.apiPath+id,editedDriver).success(function(data){
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function(){

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while editing item");
                });

                //Returning the promise object
                return deferred.promise;
            },
            deleteDriver:function(id){
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
