(function () {
    
    var loginController = function ($scope, $rootScope, $users, $location) {
        $scope.submitted = false;
        $rootScope.logged = false;
        
        $scope.loginUser = function (isValid, user) {


            $scope.submitted = true;

            if (isValid) {
                /*
                $users.login(user).success(function (data) {

                }).error(function (data) {
                    console.log("Error: " + data.error);
                });
                */
                
                $location.path("/home");
                $rootScope.logged = true;
            }
        };
    }
    
    loginController.$inject = ['$scope', '$rootScope', '$users', '$location'];
    angular.module( "newtrends" ).controller("loginController", loginController);
    
}());