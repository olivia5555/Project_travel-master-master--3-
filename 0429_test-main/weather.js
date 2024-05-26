var svg = d3.select("svg");

const g = svg.append("g");

var projectmethod = d3.geoMercator().center([120.982, 24.15]).scale(8000);
var pathGenerator = d3.geoPath().projection(projectmethod);
d3.json("/dist/COUNTY_MOI_1090820.json")
  .then(data => {
    const geometries = topojson.feature(data, data.objects["COUNTY_MOI_1090820"])

    g.append("path")
    const paths = g.selectAll("path").data(geometries.features);
    paths.enter()
      .append("path")
        .attr("d", pathGenerator)
        .attr("class","county")
      // 加上簡易版本 tooltip
      .append("title")
        .text(d => d.properties["COUNTYNAME"])
  })