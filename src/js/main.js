//  Created by andrewjst on 9.21.16
//  Latest Update: 9.28.16

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Google Maps Data
function marketMaps() {
    var mapPurdueCanvas = document.getElementById("mapPurdueMarket");
    var mapWestLafCanvas = document.getElementById("westLafMarket");
    var mapLafCanvas = document.getElementById("mapLafMarket");
    var mapPurdueOptions = {    // TODO: Move to JSON.
        center: new google.maps.LatLng(40.4258564, -86.9145723),
        zoom:19
    }
    var mapWestLafOptions = {
        center: new google.maps.LatLng(40.4631075, -86.9163442),
        zoom:18
    }
    var mapLafOptions = {
        center: new google.maps.LatLng(40.4186128, -86.8921425),
        zoom:19
    }
    var mapPurdueMarkets = new google.maps.Map(mapPurdueCanvas, mapPurdueOptions);
    var mapWestLafMarkets = new google.maps.Map(mapWestLafCanvas, mapWestLafOptions);
    var mapLafMarkets = new google.maps.Map(mapLafCanvas, mapLafOptions)
}
<!-- Bar Chart for Historical Weather for Veggies in the region -->
var data = {
    labels: [
        'Tempature', 'Percip', 'accessibility',
        'uptime', 'functionality', 'impact'
    ],
    series: [
        {
            label: '2013',
            values: [12, 43, 22, 11, 73, 25]
        },
        {
            label: '2014',
            values: [31, 28, 14, 8, 15, 21]
        }
    ]
};
var chartWidth = 300,
    barHeight = 20,
    groupHeight = barHeight * data.series.length,
    gapBetweenGroups = 10,
    spaceForLabels = 150,
    spaceForLegend = 150;

// Zip the series data together (first values, second values, etc.)
var zippedData = [];
for (var i = 0; i < data.labels.length; i++) {
    for (var j = 0; j < data.series.length; j++) {
        zippedData.push(data.series[j].values[i]);
    }
}

// Color scale
var color = d3.scale.category20();
var chartHeight = barHeight * zippedData.length + gapBetweenGroups * data.labels.length;

var x = d3.scale.linear()
    .domain([0, d3.max(zippedData)])
    .range([0, chartWidth]);

var y = d3.scale.linear()
    .range([chartHeight + gapBetweenGroups, 0]);

var yAxis = d3.svg.axis()
    .scale(y)
    .tickFormat('')
    .tickSize(0)
    .orient("left");

// Specify the chart area and dimensions
var chart = d3.select(".chart")
    .attr("width", spaceForLabels + chartWidth + spaceForLegend)
    .attr("height", chartHeight);

// Create bars
var bar = chart.selectAll("g")
    .data(zippedData)
    .enter().append("g")
    .attr("transform", function (d, i) {
        return "translate(" + spaceForLabels + "," + (i * barHeight + gapBetweenGroups * (0.5 + Math.floor(i / data.series.length))) + ")";
    });

// Create rectangles of the correct width
bar.append("rect")
    .attr("fill", function (d, i) {
        return color(i % data.series.length);
    })
    .attr("class", "bar")
    .attr("width", x)
    .attr("height", barHeight - 1);

// Add text label in bar
bar.append("text")
    .attr("x", function (d) {
        return x(d) - 3;
    })
    .attr("y", barHeight / 2)
    .attr("fill", "red")
    .attr("dy", ".35em")
    .text(function (d) {
        return d;
    });

// Draw labels
bar.append("text")
    .attr("class", "label")
    .attr("x", function (d) {
        return -10;
    })
    .attr("y", groupHeight / 2)
    .attr("dy", ".35em")
    .text(function (d, i) {
        if (i % data.series.length === 0)
            return data.labels[Math.floor(i / data.series.length)];
        else
            return ""
    });

chart.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + spaceForLabels + ", " + -gapBetweenGroups / 2 + ")")
    .call(yAxis);

// Draw legend
var legendRectSize = 18,
    legendSpacing = 4;

var legend = chart.selectAll('.legend')
    .data(data.series)
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
        var height = legendRectSize + legendSpacing;
        var offset = -gapBetweenGroups / 2;
        var horz = spaceForLabels + chartWidth + 40 - legendRectSize;
        var vert = i * height - offset;
        return 'translate(' + horz + ',' + vert + ')';
    });

legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', function (d, i) {
        return color(i);
    })
    .style('stroke', function (d, i) {
        return color(i);
    });

legend.append('text')
    .attr('class', 'legend')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function (d) {
        return d.label;
    });