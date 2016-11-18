angular.module('siteControllers',[])

.controller('mainSiteController',['modelService', '$scope',function(modelService,$scope){
//var s = siteStage('json/site.json');

modelService.init().then(

	function(response){
		$scope.data =response;
		$scope.info = $scope.data.siteinfo(); 	
		$scope.article = $scope.data.article();
		$scope.section = $scope.data.section();
		$scope.contacts = $scope.data.contacts();

$scope.hypothesis = $scope.section.slice(0,4);
$scope.experiment = $scope.section.slice(3,6);
$scope.conclusion = $scope.section.slice(6);
console.log($scope.conclusion);
console.log($scope.experiment);
$scope.contactsA = $scope.contacts[0];
},function(response){
	$scope.error = response;
})


}])



