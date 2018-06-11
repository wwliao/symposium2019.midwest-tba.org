// Google Maps
function initMap() {
    var center = {lat: 41.7916469, lng: -87.6034081};
    var map = new google.maps.Map(document.getElementById('venue'), {
        zoom: 14,
        center: center,
        scrollwheel: false,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    });

    // Marker setting for Knapp Center
    var centerMarker = new google.maps.Marker({
        position: center,
        map: map,
        title: "MTBA Symposium 2018 (Knapp Center for Biomedical Discovery)"
    });

    var centerInfoWindow = new google.maps.InfoWindow({
        content: "<div class='map-info'>" +
            "<h4>MTBA Symposium 2018</h4>" +
            "<p>Auditorium (Room 1103)<br>" +
            "Knapp Center for Biomedical Discovery<br>" +
            "The University of Chicago<br>" +
            "900 E 57th St, Chicago, IL 60637<p>" +
            "</div>"
    });
    centerMarker.addListener('click', function () {
        centerInfoWindow.open(map, centerMarker);
    });
}
