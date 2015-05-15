'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('CartCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
