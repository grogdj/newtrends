(function () {

    var newtrends = angular.module('newtrends', [ 'ngRoute', 'ngAnimate' ]);

    newtrends.config(function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'app/views/login.html',
                            controller: 'loginController'
                        })

                        .when('/home', {
                            templateUrl: 'app/views/home.html',
                            controller: 'homeController'
                        })
                      
                
                        .when('/teachers', {
                            templateUrl: 'app/views/teachers.html',
                            controller: 'teachersController'
                        })
                        .when('/teachers/add', {
                            templateUrl: 'app/views/teachers_add.html',
                            controller: 'teachersController'
                        })
                        .when('/teachers/:id', {
                            templateUrl: 'app/views/teachers_view.html',
                            controller: 'teachersController'
                        })
                        
                        .when('/groups', {
                            templateUrl: 'app/views/groups.html',
                            controller: 'groupsController'
                        })
                        .when('/groups/add', {
                            templateUrl: 'app/views/groups_add.html',
                            controller: 'groupsController'
                        })
                        .when('/groups/:id', {
                            templateUrl: 'app/views/groups_view.html',
                            controller: 'groupsController'
                        })
                
                
                              
                        .when('/students', {
                            templateUrl: 'app/views/students.html',
                            controller: 'studentsController'
                        })
                        .when('/students/add', {
                            templateUrl: 'app/views/students_add.html',
                            controller: 'studentsController'
                        })
                        .when('/students/:id', {
                            templateUrl: 'app/views/students_view.html',
                            controller: 'studentsController'
                        })  
                              
                        
                        .when('/books', {
                            templateUrl: 'app/views/books.html',
                            controller: 'booksController'
                        })
                
                              
                        
                        .when('/settings', {
                            templateUrl: 'app/views/settings.html',
                            controller: 'settingsController'
                        })

                        .otherwise({
                            redirectto: '/'
                        });
                
            });


    //HISTORY 
    newtrends.run(function ($rootScope, $location) {

        var history = [];

        $rootScope.$on('$routeChangeSuccess', function () {
            history.push($location.$$path);
        });
        
        $rootScope.back = function () {
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            $location.path(prevUrl);
        };
    });

    //END HISTORY


}());

// HELPER FUNCTIONS
// CHECK EMPTY OBJECTS
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
