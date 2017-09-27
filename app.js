var app = angular.module('app', []);

app.controller('mainController', function ($scope){

	$scope.person = {
		name : 'Piotr',
		surname : ''
	}

	$scope.addSurname = function(name) {
		$scope.person.surname = name + ' Kowalski';
	}

});

