/**
 * Preview View
 */

// Route
mainApp.config(function($stateProvider, WP){
  $stateProvider.state({
    name: 'preview',
    url: '/preview/',
    templateUrl: WP.plugin_url + '/views/preview.html',
    controller: 'previewCtrl'
  });
});


mainApp.controller('previewCtrl', ['$scope', 'CreditoObj', function( $scope, CreditoObj ){
  $scope.datos = CreditoObj;
  console.log($scope.datos);
}]);


