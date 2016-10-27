angular.module('bodyApp', [])


  .controller('alphaController', function() {
    var bodyText = this;
    bodyText.body = [
      {text:'I come from angular'},
      {text:'my controller is testController'}];
    };

    bodyText.raw = function(){

		return bodyText.body;    	
    }

    
    );


