var myApp = angular.module("myApp", []);

myApp.controller('StudentController', ['$scope', function($scope) {
  $scope.student = {};
  $scope.student.firstname = 'Sid';
  $scope.student.works = 'Nikola Tech';

}]);

var  myAppp = angular.module("myAppp", []);

myAppp.controller('PhoneListCtrl',['$scope', function($scope) {
	$scope.



}    ] 



// app.controller('StudentController', [ '$scope', function($scope){
// 	
// }]);

// function studentController($scope){
	
// 		fullname = function() {
// 			var studentObject ;
// 			studentObject = $scope.student;
// 			return studentObject.firstname + "  " + studentObject.lastname;

// 		}

// 	};
// }