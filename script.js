
function testWord($scope, $http) {$http.get("http://www.purgomalum.com/service/plain?text=test")
     .then(function(response) {
            console.log(response);
        });
}