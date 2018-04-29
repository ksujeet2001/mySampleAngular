var module= angular.module("myApp",[]);
module.controller("MainCtrl",Main);
       
        
function Main($scope){
    console.log("main function");          
    $scope.hourOfDay=18;
    $scope.currTime=(new Date()).toTimeString();   
    $scope.updateTime = function(){
        console.log("Button Clicked");

        $scope.currTime=(new Date()).toTimeString();
    }
}
 