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
	$scope.place = "Janiszew 99/2";
	$scope.town = "26-652 Zakrzew";

	var $carousel = $("#carousel");
	var $slides = $carousel.find("li");

	var url = window.location.href;
	var cut = url.slice(url.indexOf("#"));
	var $body = $("body");
	var navs = $("ul.main-nav li a");

	$carousel.cycle({
		slides: $slides, 
		speed: 3000,
		pauseOnHover: true,
		timeout: 2500,
		fx: "scrollHorz",
		pager: ">.around > .cycle-pager"  
	});

	$("a.trackto").click(function (event) {
		event.preventDefault();
		var trg = $(event.target).attr("href");
		$body.removeClass("short");
		$(".contact").find(".active").removeClass("active");
		$(".about").addClass("active");	
		window.location.href = trg;
	});


	checkStyle(cut);
	$.each(navs, function(i, el) {
		var $el = $(el);
		if ($el.attr("href") === cut) {
			$el.addClass('active');
		}
	});
	navs.click(function(e){
		var t = $(this);
		var href = $(e.target).attr("href");
		t.addClass('active');
		t.parent().siblings().find('a').removeClass("active");
		checkStyle(href);
	});


	function checkStyle(cut) {
		if (cut === "/" || cut === "#/" || cut ==="#/kontakt") {
			$body.addClass("short");
		} else {
			$body.removeClass("short");
		}
	}

});
