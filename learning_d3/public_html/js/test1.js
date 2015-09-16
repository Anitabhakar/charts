/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    var myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

    d3.select(".chart")
            .selectAll("div")
            .data(myData)
            .enter()
            .append("div")
            .style("width", function (d, i) {
                return d * 50 + "px";
            })
            .text(function (d, i) {
                return d;
            });
}
);