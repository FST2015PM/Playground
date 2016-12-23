var width = 960,
    height = 628;

var rateById = d3.map();

var quantize = d3.scaleQuantize()
  .domain([0, 56])
  .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

var projection = d3.geoConicConformal()
  .rotate([102, 0])
  .center([0, 24])
  .parallels([17.5, 29.5])
  .scale(1850)
  .translate([width / 2, height / 2]);

var path = d3.geoPath()
  .projection(projection);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

queue()
  .defer(d3.csv, "testimonios.csv", function(d) { rateById.set(d.id, +d.rate); })

d3.json("mx.json", function(error, mx) {
  svg.append("g")
    .attr("class", "municipalities")
    .selectAll("path")
    .data(topojson.feature(mx, mx.objects.states).features) //aqui se indica la caracteristica a representar
    .enter()
      .append("path")
        .attr("class", function(d) { return quantize(rateById.get(d.properties.state_code)); })
        .attr("d", path)
      .append("title")
        .text(function(d) { return d.properties.state_name; });

  svg.append("path")
    .datum(topojson.mesh(mx, mx.objects.states, function(a, b) { return a.properties.state_code !== b.properties.state_code; }))
      .attr("class", "state-boundary")
      .attr("d", path);
});
d3.select(self.frameElement).style("height", height + "px");
