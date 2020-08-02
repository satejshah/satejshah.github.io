function myFunction() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

  var margin = {top: 20, right: 30, bottom: 40, left: 180},
  width = 560 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

  var svg = d3.select("#my_dataviz")
  .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
  .append("g")
      .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")"); 

    d3.csv("Bulls.18-19.CS498.csv", function(data) {

        var x = d3.scaleBand()
          .domain(data.map(function(d) { return d.Year; }))
          .range([ 0, width ])
          .padding(.2);
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
    
        var y = d3.scaleLinear()
          .domain([0, 82])
          .range([ height, 0 ]);
        svg.append("g")
          .call(d3.axisLeft(y));
    
        svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.Year); })
          .attr("y", function(d) { return y(d.Wins); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - y(d.Wins); })
          .attr("fill", "#CE1141")
    });


   }

function myFunction2() {
    //document.getElementById("demo").innerHTML = "Paragraph changed.";

    d3.csv("Bulls.18-19.CS498.csv", function(data) {

      var x = d3.scaleBand()
        .domain(data.map(function(d) { return d.Year; }))
        .range([ 0, width ])
        .padding(.2);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
      var y = d3.scaleLinear()
        .domain([0, 82])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));
  
      svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.Year); })
        .attr("y", function(d) { return y(d.Wins); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.Wins); })
        .attr("fill", "#CE1141")
  });
}

function myFunction3() {
    document.getElementById("demo").innerHTML = "Chicago Bulls.";
}