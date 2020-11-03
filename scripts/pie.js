

// SET EACH SLICE TO EXPAND WHEN HOVERED??

// set the dimensions and margins of the graph
var width = 700
height = 700
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'pieChart'
var svg = d3.select("#pieChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {
    a: 2,
    b: 7,
    c: 50,
    d: 40
};


var color = d3.scaleOrdinal()
    .domain(data)
    .range(["#FF6060", "#FF9C60", "#BCFF60", "#25FF17"]);



// Compute the position of each group on the pie:
var pie = d3.pie()
    .value(function(d) {
        return d.value;
    });
var data_ready = pie(d3.entries(data));

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
    )
    .attr('fill', function(d) {
        console.log(d);
        return (color(d.data.key))
    })
    .attr("stroke", "#878787")
    .style("stroke-width", "3px")
    .style("opacity", 0.7);
