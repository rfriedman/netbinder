'use strict';
angular.module('blogApp', [])

  .controller('getBlogController',['$scope', function('$scope') {
    
    $scope.blog = 
      {id: 1,
      title:'blogText.blog.title', 
      meta:'blogText.blog.meta', 
      author:'blogText.blog.author', 
      body:'blogText.blog.body'};
    





  }]);

