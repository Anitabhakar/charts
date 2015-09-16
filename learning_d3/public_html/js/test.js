/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var myData = [400000, 800000, 1500000, 1600000, 2300000];
    var myNames = ['A', 'B', 'C', 'D', 'E']

    var x = d3.scale.linear()
            .domain([0, d3.max(myData)])
            .range([0, 420]);

    d3.select(".chart")
            .selectAll("div")
            .data(myData)
            .enter()
            .append("div")
//            .style("width", function (d, i) {
//                return d * 10 + "px";
//            })
            .style("width", function (d) {
                return x(d) + "px";
            })
            .text(function (d, i) {
                return d;
            });

})


