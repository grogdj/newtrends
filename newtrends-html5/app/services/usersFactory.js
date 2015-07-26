(function () {
    var $users = function ($http) {
        var factory = {};
        //SIGNUP
        factory.signup = function (email, password) {
           
        }
        //LOGOUT
        factory.logout = function () {
           
        };
        //LOGIN
        factory.login = function (user) {
         
        };
        
        return factory;
    };

    $users.$inject = ['$http'];
    angular.module("newtrends").factory("$users", $users);

}());