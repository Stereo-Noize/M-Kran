$(document).ready(function() {

	// Input Mask

	$('input[type="tel"]').mask('+7 (999) 999-99-99');
	
	// Mobile Menu

	$('.top-bar__menu__trigger').click(function() {
		$('.top-bar__menu__list').toggleClass('top-bar__menu__list-open');
	});

	// Menu

	$('.sub-menu-toggler').click(function() {
		$('.sub-menu').toggleClass('sub-menu-open');
	});

	// Header Slider

	$('.header-slider').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="assets/img/arrow-right.png"></button>',
		responsive: [    
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false,
	        dots: true,
	      }
	    }
	  ]
	});

	// Objects Slider

	$('.objects-slider').slick({
		autoplay: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="la la-arrow-circle-o-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="la la-arrow-circle-o-right"></i></button>',
		fade: true,
	});

	// Licenses Slider

	$('.licenses__slider').slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		  	{
		      breakpoint: 992,
		      settings: {
		        arrows: false,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	// Clients Slider

	$('.clients__slider').slick({
		autoplay: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="la la-arrow-circle-o-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="la la-arrow-circle-o-right"></i></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
		  	{
		      breakpoint: 1199,
		      settings: {
		      	variableWidth: false,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		      	variableWidth: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		      	variableWidth: false,
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	// Releated Slider

	$('.releated__products').slick({
		autoplay: true,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="la la-arrow-circle-o-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="la la-arrow-circle-o-right"></i></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		  	{
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	// More News

	$('#moreNews').click(function() {
		$('.news-block .item:nth-child(n+5)').addClass('d-block');
		$('.more-news a').removeClass('d-none');
		$(this).hide('500');
	});

	// More Objects

	$('#moreObjects').click(function() {
		$('.objects .item:nth-child(n+7)').addClass('d-block');
		$(this).hide('500');
	});

	// Form Check 

	$('.privacy-label').click(function() {
		$(this).toggleClass('privacy-label__checked');
	});

	// Map
/*
	var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, { 
		iconImageHref: '/maps/doc/jsapi/2.x/examples/images/myIcon.gif', 
		iconImageSize: [30, 42], 
		iconImageOffset: [-3, -42] 
	});
*/

});