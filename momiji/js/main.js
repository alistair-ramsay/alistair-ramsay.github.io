$.easing.easeOutCubic=function(o,a,e,t,s){return a==s?e+t:t*(1-Math.pow(2,-12*a/s))+e},$(document).ready(function(){$(".lodge-image").addClass("lodge-image-show").delay(500).queue(function(){$(".logo-circle").addClass("logo-circle-down")});var o=$("#hero-copy").offset().top+$("#hero-copy").outerHeight(!0);$("#hero").css("height",o),$(".gallery-image:nth-child(4n)").css("margin-right",0),$(".gallery").featherlightGallery({previousIcon:'<div class="gallery-go-left"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="79" viewBox="0 0 39.4 78.7"><polygon class="burgundy" points="17.9 30.4 12 39.4 17.9 48.3 20.1 46.9 15.1 39.4 20.1 31.8 "/><path class="cool-grey" d="M0 0v78.7c21.7 0 39.4-17.6 39.4-39.4C39.4 17.6 21.7 0 0 0zM20.1 46.9l-2.1 1.4L12 39.4l5.9-8.9 2.1 1.4 -5 7.5L20.1 46.9z"/></svg></div>',nextIcon:'<div class="gallery-go-right"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="79" viewBox="0 0 39.4 78.7"><polygon class="burgundy" points="17.9 30.4 12 39.4 17.9 48.3 20.1 46.9 15.1 39.4 20.1 31.8 "/><path class="cool-grey" d="M0 0v78.7c21.7 0 39.4-17.6 39.4-39.4C39.4 17.6 21.7 0 0 0zM20.1 46.9l-2.1 1.4L12 39.4l5.9-8.9 2.1 1.4 -5 7.5L20.1 46.9z"/></svg></div>',galleryFadeIn:100,galleryFadeOut:200}),$("#hero").waypoint(function(o){"down"===o&&$("nav #sections a").removeClass("active")},{offset:240}).waypoint(function(o){"up"===o&&$("nav #sections a").removeClass("active")},{offset:-800}),$(".photos").click(function(){return $("html, body").animate({scrollTop:$("#gallery").offset().top-118},1e3),$("nav #sections a").removeClass("active"),$(".photos").addClass("active"),!1}),$("#gallery").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".photos").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".photos").addClass("active"))},{offset:118}),$(".information").click(function(){return $("html, body").animate({scrollTop:$("#info").offset().top-118},1e3),$("nav #sections a").removeClass("active"),$(".information").addClass("active"),!1}),$("#info").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".information").addClass("active"))},{offset:140}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".information").addClass("active"))},{offset:118}),$(".location").click(function(){return $("html, body").animate({scrollTop:$("#map").offset().top-118},1e3),$("nav #sections a").removeClass("active"),$(".location a").addClass("active"),!1}),$("#map").waypoint(function(o){"down"===o&&($("nav #sections a").removeClass("active"),$(".location a").addClass("active"))},{offset:440}).waypoint(function(o){"up"===o&&($("nav #sections a").removeClass("active"),$(".location a").addClass("active"))},{offset:118}),$("#menu-icon").click(function(){$(this).toggleClass("open"),$("nav").fadeToggle(500).css("display","table"),$("#menu-bg").fadeToggle(500),$("body").toggleClass("fixed")});var a=$(window).width();$(window).height();$(window).resize(function(){if(a!=$(window).width())return void location.reload()}),a<737&&$("nav li a").click(function(){$("#menu-icon").toggleClass("open"),$("nav").fadeToggle(200),$("#menu-bg").fadeToggle(200),$("body").toggleClass("fixed")}),$(".go-top").click(function(){return $("html, body").animate({scrollTop:$("#home").offset().top},1e3),!1})});