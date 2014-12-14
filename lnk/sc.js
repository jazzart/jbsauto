var jbsapp = angular.module('jbs', ['ngRoute']); 

jbsapp.config([ '$routeProvider',function ($routeProvider) {
	$routeProvider
	.when('/onas', {
		templateUrl: '/tree/about.html', 
		controller: 'main'
	})
	.when('/', {
		templateUrl: '/tree/sg.html',
		controller: 'main'		
	})
	.when('/uslugi', {
		templateUrl: '/tree/service.html', 
		controller: 'main'
	})
	.when('/aktualnosci', {
		templateUrl: '/tree/news.html', 
		controller: 'main'
	})
	.when('/kontakt', {
		templateUrl: '/tree/contact.html', 
		controller: 'main'
	})
}]).controller('main', function($scope) {
	var a = "jbs-78@";
	var b = "o2.pl";
	$scope.adrs = a + b;
	$scope.tel = "606 934 990";
	var $carousel = $("#carousel");
	var $slides = $carousel.find("li");

	$carousel.cycle({
		slides: $slides, 
		speed: 3000,
		pauseOnHover: true,
		timeout: 2500,
		fx: "scrollHorz",
		pager: ">.around > .cycle-pager"  
	});


});
