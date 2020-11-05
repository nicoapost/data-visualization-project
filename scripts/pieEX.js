// set the dimensions and margins of the graph
var width = 700
    height = 700
    margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#pieChart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 2, b: 7, c: 50, d: 40}


// set the color scale
var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#FF6060", "#FF9C60", "#BCFF60", "#25FF17"]);

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; });
var data_ready = pie(d3.entries(data));


// shape helper to build arcs:
var arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('path')
    .attr('d', arcGenerator)
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7);

// Now add the annotation. Use the centroid method to get the best coordinates

// To get GPA ranges
let count = -1;

svg
  .selectAll('mySlices')
  .data(data_ready)
  .enter()
  .append('text')
  .text(function(d){ 
      count++;
      return `${count} - ${count + 1}`;
    })
  .attr("transform", function(d) { return `translate(${arcGenerator.centroid(d)})`; })
  .style("text-anchor", "middle")
  .style("font-size", 17);