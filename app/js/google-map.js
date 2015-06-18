'use strict';

function initialize() {
	var mmjvnLoc = new google.maps.LatLng(21.031857, 105.782611);
	var mapOptions = {
		zoom: 17,
		center: mmjvnLoc
	};

	var map = new google.maps.Map(document.getElementById('branch-map-1'), mapOptions);

	var marker = new google.maps.Marker({
		position: mmjvnLoc,
		map: map,
		title: 'MMJVN'
	});

	var contentString = '<div>MMJ Việt Nam</div>';

	var infoWindow = new google.maps.InfoWindow({
		content: contentString
	});

	infoWindow.open(map, marker);
}

function loadScript() {
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' + '&signed_in=true&callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;