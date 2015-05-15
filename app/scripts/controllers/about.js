'use strict';

/**
 * @ngdoc function
 * @name graciesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the graciesApp
 */
angular.module('graciesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
