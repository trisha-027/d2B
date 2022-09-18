var myApp = angular.module('myApp',[]);
myApp.controller('myController', ['$scope','$filter',($scope) => {
        $scope.decimal = "";
        $scope.binary = "";

        $scope.$watch('decimal', function (newValue, oldValue) {
            if(newValue != ""){
                $scope.binary = parseInt(newValue, 10).toString(2);
            }
            else{
                $scope.binary = "";

            }
            
        });
        $scope.$watch('binary', function (newValue, oldValue) {
            if(newValue != ""){
            $scope.decimal = parseInt(newValue, 2).toString(10);
            }
            else{
                $scope.decimal="";
            }
        });
    }]);