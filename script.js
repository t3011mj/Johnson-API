
var app = angular.module('test', []);
app.controller('testWord', function($http) {
  
// vulgar
    $http.get("http://www.purgomalum.com/service/plain?text=ass")
        .then(function(response) {
            console.log(response);
        });

// Not vulgar
        $http.get("http://www.purgomalum.com/service/plain?text=test")
        .then(function(response) {
            console.log(response);
        });
});