angular.module('OdooMobilePlatform', [])
    .controller('HelloController', function($scope) {
        $scope.name = "Pepe"
    })

    .controller('loginCtrl', ['$scope', 'jsonRpc', function($scope, jsonRpc) {

    jsonRpc.getDbList().then(function (result) {
        //get databases list
        $scope.dbs = result;
    });

    $scope.login = function(creds) {
        jsonRpc.login(creds.db, creds.username, creds.password).then(function () {
            //login successfull redirect here
        }, function(reason) {
            //display error
        });
    };

    $scope.closeLogin = function() {
          $scope.modal.hide();
    };

}]);