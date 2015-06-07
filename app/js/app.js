'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
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
    animation: 'fade',
    controlNav: false,
    animationLoop: false,
    nextText: '',
    prevText: '',
    slideshow: false,
    sync: '#carousel'
  });

		};
	return {
		init: _init
	};

})(document, jQuery);

(function() {
	app.init();
})();
