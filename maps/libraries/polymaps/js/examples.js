var po = org.polymaps;
var map2 = po.map();

function callback(data) {
    /* Display each resource as an image layer. */
    var resourceSets = data.resourceSets;
    for (var i = 0; i < resourceSets.length; i++) {
    var resources = data.resourceSets[i].resources;
        for (var j = 0; j < resources.length; j++) {
            var resource = resources[j];
            map2.add(po.image()
            .url(template(resource.imageUrl, resource.imageUrlSubdomains)))
            .tileSize({x: resource.imageWidth, y: resource.imageHeight});
        }
    }

    /* Display compass control. */
    map2.add(po.compass().pan("none"));
}

/** Returns a Bing URL template given a string and a list of subdomains. */
function template(url, subdomains) {
    var n = subdomains.length,
    salt = ~~(Math.random() * n); // per-session salt
    /** Returns the given coordinate formatted as a 'quadkey'. */
    function quad(column, row, zoom) {
        var key = "";
        for (var i = 1; i <= zoom; i++) {
            key += (((row >> zoom - i) & 1) << 1) | ((column >> zoom - i) & 1);
        }
        return key;
    }
    return function(c) {
        var quadKey = quad(c.column, c.row, c.zoom),
        server = Math.abs(salt + c.column + c.row + c.zoom) % n;
        return url.
        replace("{quadkey}", quadKey).
        replace("{subdomain}", subdomains[server]);
    };
}

$(document).ready(function() {
    /* mapa 1 */
    //Creando el objeto mapa
    var po = org.polymaps;
    var map = po.map();
    //seleccionando contenedor
    var div = document.getElementById("example1");
    //
    map.container(div.appendChild(po.svg("svg")));
    //Dibujando mapa interactivo, con controles para moverse y sum
    map
    .zoomRange([0, 9])
    .zoom(5)
    .center({lat: 19.4326077, lon: -99.13320799999997})
    .add(po.image().url("http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg"))
    .add(po.interact())
    .add(po.compass().pan("none"))
    ;

    /* mapa 2 */
    var div2 = document.getElementById("example2");
    map2.container(div2.appendChild(po.svg("svg")));

    map2
    .center({lat: 19.509071897736277, lon: -99.1387152671814})
    .zoom(14)
    .zoomRange([0, 18])
    .add(po.interact())
    ;

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "http://dev.virtualearth.net"
    + "/REST/V1/Imagery/Metadata/AerialWithLabels"
    + "?key=AmT-ZC3HPevQq5IBJ7v8qiDUxrojNaqbW1zBsKF0oMNEs53p7Nk5RlAuAmwSG7bg"
    + "&jsonp=callback");
    document.body.appendChild(script);
});