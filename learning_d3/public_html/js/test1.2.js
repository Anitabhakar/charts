/* global d3 */
$(document).ready(function ()
{
    //creating margin
    var margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 700 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;
    //Determining chart dimension 
    var chart = d3.select(".chart")
            .attr("height", height)
            .attr("width", width);
    //making the axis
    var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .5);
    var y = d3.scale.linear()
            .range([height, 0]);
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(20);
    //Determining the axis dimension 
    var chart = d3.select(".chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    d3.tsv("data.tsv", function (error, data) {
        x.domain(data.map(function (d) {
            return d.name;
        }));
        y.domain([0, d3.max(data, function (d) {
                return d.value;
            })]);
        chart.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
        chart.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("salary in thousands");
        chart.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return x(d.name);
                })
                .attr("width", x.rangeBand())
                .attr("y", function (d) {
                    return y(d.value);
                })
                .attr("height", function (d) {
                    return height - y(d.value);
                });
    });
});
