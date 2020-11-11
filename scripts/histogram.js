// set the dimensions and margins of the graph
var width = 650,
    height = 650,
    margin = {top: 40, left: 50, right: 40, bottom: 40};

// append the svg object to the body of the page
var svg = d3.select("#histogram")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data

var data = [{"time":0,"users":14000},{"time":1,"users":13567},{"time":2,"users":13765},{"time":3,"users":12876},{"time":4,"users":13432},{"time":5,"users":15439},{"time":6,"users":24765},{"time":7,"users":34217},{"time":8,"users":43212},{"time":9,"users":67432},{"time":10,"users":80761},{"time":11,"users":100235},{"time":12,"users":98563},{"time":13,"users":95127},{"time":14,"users":79532},{"time":15,"users":65218},{"time":16,"users":55123},{"time":17,"users":58234},{"time":18,"users":63445},{"time":19,"users":78909},{"time":20,"users":72444},{"time":21,"users":43789},{"time":22,"users":18223},{"time":23,"users":15009}];

// X axis: scale and draw:
var x = d3.scaleLinear()
    .domain([0, 23])
    .range([0, width]);

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(24));

// set the parameters for the histogram
var histogram = d3.histogram()
    .value(function(d) { return d.users; })   // I need to give the vector of value
    .domain(x.domain())  // then the domain of the graphic
    .thresholds(24); // then the numbers of bins

// And apply this function to data to get the bins
var bins = histogram(data);

// Y axis: scale and draw:
var y = d3.scaleLinear()
    .domain([0, 101000])
    .range([height, 0]);   // d3.hist has to be called before the Y axis obviously
svg.append("g")
    .call(d3.axisLeft(y));

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(x)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

svg.append("g")
    .attr("class", "y axis")
    .call(y)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end");

svg.selectAll("bar")
    .data(data)
    .enter()
    .append("rect")
    .style("fill", "#88e6b7")
    .attr("x", function(d) {
        return x(d.time);
    })
    .attr("width", 25)
    .attr("y", function(d) {
        return y(d.users);
    })
    .attr("height", function(d) {
        return height - y(d.users);
    });