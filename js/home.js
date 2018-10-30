/**
 * Home View
 */

// Route
mainApp.config( function( $stateProvider, WP ) {
	$stateProvider.state( {
		name: 'home',
		url: '/',
		templateUrl: WP.plugin_url + '/views/home.html',
		controller: 'homeCtrl'
	} );
} );

// Controller
//mainApp.controller( 'homeCtrl', function( $scope ) {} );

//mainApp.module('ngrepeatSelect', [])


mainApp.factory('CreditoObj', function(){
    return {
    	nombre: '',
    	apellido: '',
    	email:'',
    	telefono: '',
    	destino: '',
    	garantia: '',
    	plazo: null,
    	monto: null
    };
});


 mainApp.controller('homeCtrl', ['$scope', 'CreditoObj', '$state', function($scope,CreditoObj,$state) {
 	$scope.NewCredito = CreditoObj;

	$scope.data = {
		model: null,
		availableOptions: [
		{id: '1', name: 'Credito'},
		{id: '2', name: 'Ahorro Programado'},
		{id: '3', name: 'Ahorro a Plazo Fijo'}
		]
	};

	$scope.preview = function(){
		console.log("entro funcion");
		$state.go('preview')
	}
}]);

mainApp.controller('creditoCtrl', ['$scope', 'CreditoObj', function( $scope, CreditoObj ){
  $scope.datos = CreditoObj;
}]); 

