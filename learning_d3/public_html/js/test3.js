/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){

var data = [4, 8, 15, 16, 23, 42];

var width = 620,
    barHeight = 60;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter()
  .append("g")
    .attr("transform", function(d, i) { 
        return "translate(0," + i * barHeight + ")";
         });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 6);

bar.append("text")
    .attr("x", function(d) { 
        return x(d) - 10; 
        })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { 
        return d;
});
}
);






