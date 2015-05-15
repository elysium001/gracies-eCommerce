'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  });
