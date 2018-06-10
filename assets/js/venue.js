// Google Maps
function initMap() {
    var center = {lat: 41.7916469, lng: -87.6034081};
    var map = new google.maps.Map(document.getElementById('venue'), {
        zoom: 18,
        center: center,
        scrollwheel: false,
    });

    // Marker setting for Knapp Center
    var centerMarker = new google.maps.Marker({
        position: center,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: "MTBA Symposium 2018 (Knapp Center for Biomedical Discovery)"
    });

    var centerInfoWindow = new google.maps.InfoWindow({
        content: "<div class='map-info'>" +
            "<h4>MTBA Symposium 2018</h4>" +
            "<p>Auditorium (Room 1103)<br>" +
            "Knapp Center for Biomedical Discovery<br>" +
            "900 E 57th St, Chicago, IL 60637<p>" +
            "</div>"
    });
    centerMarker.addListener('click', function () {
        centerInfoWindow.open(map, centerMarker);
    });
}
