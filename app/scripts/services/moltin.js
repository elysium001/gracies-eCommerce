angular.module('graciesApp.moltin', [])
	.factory('MoltinAuth', function($q) {
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'er45gdwJzCYeNAVPZRhtBevwpZE66r8afNkKCJlC'});
		moltin.Authenticate(function() {
  			deferred.resolve(moltin);
		});

		return deferred.promise;
	});