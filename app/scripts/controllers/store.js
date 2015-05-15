'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
    console.log(categories);
  });
