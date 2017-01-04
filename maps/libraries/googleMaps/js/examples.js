function initMap() {
    /* mapa default */
    var map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 19.509071897736277, lng: -99.1387152671814},
            scrollwheel: false,
            zoom: 15
        });
    /* mapa satelite con zoom con scroll y geojson */
    var map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: -21.1895625, lng: 130.5664828},
            mapTypeId: 'satellite',
            scrollwheel: true,
            zoom: 4
        });
     map2.data
     .loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
    /* Ejemplo de rutas  */
    var cu = {lat: 19.3216466, lng: -99.202668};
    var ipnTurismo = {lat: 19.514384, lng: -99.140244};
    var map3 = new google.maps.Map(document.getElementById('map3'), {
            center: ipnTurismo,
            scrollwheel: false,
            zoom: 10
        });
    //elegir visualización de dirección
    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map3
    });
    //formar el request con la ruta
    var request = {
        destination: cu,
        origin: ipnTurismo,
        travelMode: 'DRIVING'
    };
    //ejecutar la direccion del servicio
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            //si se realizo correctamente la consulta se despliega en el map3
            directionsDisplay.setDirections(response);
        }
    });
    /* Ejemplo de markets */
    var punto2 = {lat: 19.515260, lng: -99.142244};
    var punto3 = {lat: 19.51136, lng: -99.13800};
    var map4 = new google.maps.Map(document.getElementById('map4'), {
            center: ipnTurismo,
            scrollwheel: false,
            zoom: 16
        });
    //creando el market en el mapa
    var marker1 = new google.maps.Marker({
            map: map4,
            position: ipnTurismo,
            title: 'Escuela nacional de turismo'
        });
    var marker2 = new google.maps.Marker({
            map: map4,
            position: punto2,
            title: 'Pabellón lindavista'
        });
    var marker3 = new google.maps.Marker({
            map: map4,
            position: punto3,
            title: 'Escuela nacional de medicia y homeopatia'
        });
}