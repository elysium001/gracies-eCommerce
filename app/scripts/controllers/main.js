'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
