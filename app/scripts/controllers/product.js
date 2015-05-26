'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.product = product;
    $scope.addStatus = null;

    $scope.addCart = function() {
    	$scope.addStatus = 'Adding to Cart...';
    	moltin.Cart.Insert(product.id, 1, null, function(){
    		$scope.addStatus = 'Success!';
	    	$scope.$apply();
    		$timeout(function() {
    			$scope.addStatus = null;
    		}, 1000)
    	});
    }

    console.log(product);

  });
