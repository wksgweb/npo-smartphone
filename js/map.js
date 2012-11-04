$(function(){
	var myLatlng = new google.maps.LatLng(34.68757961,135.50039883);
	var myOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({
		position: myLatlng, 
		map: map, 
	});
	$('div#access').live('pageshow',function(){
		google.maps.event.trigger(map, 'resize');
		map.setCenter(myLatlng);
	});
});