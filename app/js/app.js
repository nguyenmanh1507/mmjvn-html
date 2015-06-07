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
		var searchField = $('.search-form__field');
		var fakeSearchBtn = $('.search-form__icon');
		var searchBtn = $('.search-form__btn');

		fakeSearchBtn.on('click', function() {
			searchForm.addClass('is-visible');
		});
		};
	return {
		init: _init
	};

})(document, jQuery);

(function() {
	app.init();
})();
