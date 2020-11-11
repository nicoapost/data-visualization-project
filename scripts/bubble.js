// const dataset = [
//     {'word': 'Fuck', 'freq': 'huge', 'category': 'swear'},
//     {'word': 'Shit', 'freq': 'huge', 'category': 'swear'},
//     {'word': 'Damn', 'freq': 'medium', 'category': 'swear'},
//     {'word': 'Hell', 'freq': 'medium', 'category': 'swear'},
//     {'word': 'Drat', 'freq': 'small', 'category': 'swear'},

//     {'word': 'Virus', 'freq': 'huge', 'category': 'health'},
//     {'word': 'Corona', 'freq': 'huge', 'category': 'health'},
//     {'word': 'COVID', 'freq': 'huge', 'category': 'health'},
//     {'word': 'Sick', 'freq': 'medium', 'category': 'health'},
//     {'word': 'Die', 'freq': 'small', 'category': 'health'},

//     {'word': 'Rent', 'freq': 'medium', 'category': 'finance'},
//     {'word': 'Tuition', 'freq': 'large', 'category': 'finance'},
//     {'word': 'Broke', 'freq': 'large', 'category': 'finance'},
//     {'word': 'Paycheck', 'freq': 'small', 'category': 'finance'},

//     {'word': 'Homework', 'freq': 'small', 'category': 'school'},
//     {'word': 'GPA', 'freq': 'tiny', 'category': 'school'},
//     {'word': 'Graduate', 'freq': 'tiny', 'category': 'school'},
//     {'word': 'Passing', 'freq': 'medium', 'category': 'school'},
//     {'word': 'Advisor', 'freq': 'large', 'category': 'school'},
//     {'word': 'Credits', 'freq': 'huge', 'category': 'school'},

//     {'word': 'Netflix', 'freq': 'large', 'category': 'leisure'},
//     {'word': 'Relaxed', 'freq': 'tiny', 'category': 'leisure'},
//     {'word': 'Sleep', 'freq': 'tiny', 'category': 'leisure'},
//     {'word': 'Chill', 'freq': 'medium', 'category': 'leisure'},
//     {'word': 'Free', 'freq': 'small', 'category': 'leisure'}

// ];

// var width = 650,
//     height = 650,
//     padding = 1.5;


// var diameter = {'tiny': 100, 'small': 200, 'medium': 250, 'large': 350, 'huge': 450};

// var bubble = d3.pack(dataset)
//     .size([width, height])
//     .padding(padding);

// var svg = d3.select("#bubble")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("class", "bubble");

// var nodes = d3.hierarchy(dataset)
//     .sum(function(d) { return d.Count; });

// var node = svg.selectAll(".node")
//     .data(bubble(nodes).descendants())
//     .enter()
//     .filter(function(d){
//         return  !d.children
//     })
//     .append("g")
//     .attr("class", "node")
//     .attr("transform", function(d) {
//         return "translate(" + d.x + "," + d.y + ")";
//     });

// node.append("title")
//     .text(function(d) {
//         return d.Name + ": " + d.Count;
//     });

// node.append("circle")
//     .attr("r", function(d) {
//         return d.r;
//     })
//     .style("fill", function(d,i) {
//         return color(i);
//     });

// node.append("text")
//     .attr("dy", ".2em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//         return d.data.Name.substring(0, d.r / 3);
//     })
//     .attr("font-family", "sans-serif")
//     .attr("font-size", function(d){
//         return d.r/5;
//     })
//     .attr("fill", "white");

// node.append("text")
//     .attr("dy", "1.3em")
//     .style("text-anchor", "middle")
//     .text(function(d) {
//         return d.data.Count;
//     })
//     .attr("font-family",  "Gill Sans", "Gill Sans MT")
//     .attr("font-size", function(d){
//         return d.r/5;
//     })
//     .attr("fill", "white");

// d3.select(self.frameElement)
//     .style("height", diameter + "px");