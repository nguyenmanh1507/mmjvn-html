'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
       
			_userAgentInit();

			// Custom js place here

			// search box appear when click
			var searchForm = $('.search-form');
			var fakeSearchBtn = $('.search-form__icon');

			fakeSearchBtn.on('click', function() {
				searchForm.addClass('is-visible');
			});

			// Slider
			$('#carousel').flexslider({
		    animation: 'slide',
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 222,
		    itemMargin: 5,
		    asNavFor: '#slider',
				directionNav: false
		  });
		 	
		 	// Carousel
		  $('#slider').flexslider({
		    animation: 'slide',
		    controlNav: false,
		    animationLoop: false,
		    nextText: '',
		    prevText: '',
		    slideshow: false,
		    sync: '#carousel'
		  });

		  // Recent news slider
		  var rnSlider = $('#news-recent-slider');
		  rnSlider.owlCarousel({
		  	autoPlay: 10000,
		  	items: 2,
		  	itemsDesktop: [1024, 2],
		  	itemsDesktopSmall : [900, 2],
		  	itemsTablet: [640, 1],
		  	itemsMobile: false
		  });

		  // custom navigation events
		  $('.rnn-prev').click(function() {
		  	rnSlider.trigger('owl.prev');
		  	return false;
		  });

		  $('.rnn-next').click(function() {
		  	rnSlider.trigger('owl.next');
		  	return false;
		  });


		  // Quote slider
		  $('#quote-slider').flexslider({
		  	animation: 'slide',
		  	slideshow: false
		  });

		  // Change icon when click accordion

		  $('.accordion').on('toggled', function(event, accordion) {
		    console.log(accordion);
		    var iconMinus = accordion.prev().children('.fa');
		    var iconPlus = accordion.closest('.accordion').find('a').children('.fa');

		    console.log(event);

		    console.log(iconPlus);
		    iconPlus.removeClass('fa-minus-circle').addClass('fa-plus-circle');
		    iconMinus.removeClass('fa-plus-circle').addClass('fa-minus-circle');

		  });

		};
	return {
		init: _init
	};

})(document, jQuery);

(function() {
	app.init();
})();
