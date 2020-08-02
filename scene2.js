// The source for the code in this file is derived from these source:
// https://www.d3-graph-gallery.com/graph/barplot_button_data_csv.html
// https://www.d3-graph-gallery.com/graph/interactivity_tooltip.html#template

//The data was derived from this source: https://www.basketball-reference.com/teams/CHI/stats_basic_totals.html

var margin = {top: 20, right: 10, bottom: 20, left: 400},
    width = 1060 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

 //d3.select("body").append('p').text('This shows the points for the Chicago Bulls basketball team since 2010. The team has averaged around 8500 points in recent years.');

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")


// A function that create / update the plot for a given variable:
function update(selectedVar) {

  // Parse the Data
  d3.csv("Bulls.18-19.CS498.csv", function(data) {
    // X axis
    x.domain(data.map(function(d) { return d.Year; }))
    xAxis.transition().duration(1500).call(d3.axisBottom(x))

    // Add Y axis
    y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
    yAxis.transition().duration(1500).call(d3.axisLeft(y));

    // create a tooltip
    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("border-width", "2px")
      .style ("fill", "white")
      .style("opacity", .4)
    }
    var mousemove = function(d) {
    Tooltip
      .html("Rebounds: " + d[selectedVar]).style("left", (d3.mouse(this)[0]+90) + "px").style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("fill", "#CE1141")
      .style("opacity", 1)
    }

    svg.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")

    // variable u: map data to existing bars
    var u = svg.selectAll("rect")
      .data(data)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

    // update bars
    u
      .enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(2000)
        .attr("x", function(d) { return x(d.Year); })
        .attr("y", function(d) { return y(d[selectedVar]); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d[selectedVar]); })
        .attr("fill", "#CE1141")
  });

}

// Initialize plot
update('Rebounds')