
#VegOut - alpha
@Gold Iron Hack 2016   [10/4/16]

A website with a mashup that helps savvy consumers find fresh and cheap vegetables. The application plans to include an interactive timeline that allows those savvy veggie hunters to know the best time of the year for specific veggies. Uses a Google Map API combined with open datatsets from sources such as data.gov. It will have a compilation of data that will include but not limited to seasons, price, farmers market info, and agriculture / weather information. The app will place an emphasis on mobile first (responsive) design. Additionally, much of the apps data visualization and main elements will allow interaction.

##Description of the datasets and function design
 * [climate.gov] [http://toolkit.climate.gov/climate-explorer/?tp=g_a&center=-9673954.6,4927961.4&zoom=14&p=G&layers=aam:1&graphs=USW00014835:TEMP,USW00014835:PRCP_YTD&scales=time:20150427030347.5:20170826105111.1,ytd-prcp:0.0:60.0,temp:0.0:100.0] [csv] [2]
 * [Vegtable Seaons] [https://snaped.fns.usda.gov/nutrition-through-seasons/seasonal-produce]

 Fill in the structured description:
####Map View
---
- Basic Map with specific location is included.
- Maps include all three local farmers markets.
- Markers for location of markets
- Responsive design.


###Data Visualization & Frameworks
---
 [D3.js](https://d3js.org/)
 jQuery
 Bootstrap
 Season chart created with D3
 Graphs: Sunburst, Animated Donut, Bar Charts.
Interactive Navbar: Follows the users movements
	

####Build Case
----
Currently no external dependencies are needed.  All HTML/CSS/Javascript and Data are included with the files. Just download the entire solution and open up index.html

####Test Case
-----
Current frame was built and tested in the latest version of Chrome and Firefox Beta (50.0b4) [https://www.mozilla.org/en-US/firefox/50.0beta/releasenotes]

####Content
----
- index.html
- src (main housing resources folder)
    - css
    - fonts
    - js
    - images
    - data

#####Additional information You Want to Share with Us
-------
>Includes a sticky top navbar. Most of the data is static. 


>*Current Application is Under Development*
