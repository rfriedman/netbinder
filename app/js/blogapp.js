angular.module('blogApp', [])


  .controller('blogController',['$scope', function($scope) {
    $scope.blogPost = {
      title: 'blogPost.title',
      meta:'blogPost.meta',
      author: 'blogPost.author',
      body: 'blogPost.body'
    };
    
    
  }]);


