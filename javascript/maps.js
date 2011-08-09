var maps = (function() {
    var geocoder, map;

    $(function() {
        //init Google maps
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
          zoom: 8,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        geocoder = new google.maps.Geocoder();   
    });
    
    return {
        setMapLocation: function(address) {        
            geocoder.geocode( {"address": address}, function(results, status) {
                google.maps.event.trigger(map, 'resize');
                map.setZoom(map.getZoom());
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                } else {
                    alert (status);
                }
            });
        }
    };
    
}());