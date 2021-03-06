"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   
   
   Filename: hg_report.js
	
*/
//making a graph in javascript 
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id = 'gameImg'/> <table> <tr> <th> Product ID </th><td>" + itemID + "</td> </tr> <tr><th>List Price</th> <td>" + itemPrice + "</td></tr> <tr> <th> Platform </th><td>" + itemPlatform + "</td> </tr> <tr><th>ESRB Rating</th> <td> " + itemESRB + "</td></tr> <tr> <th> Condition </th><td> " + itemCondition + "</td> </tr> <tr><th>Release</th> <td>" + itemRelease + "</td></tr> </table>" + itemSummary;
//this displays the code onto the website 
document.getElementsByTagName('article')[0].innerHTML = gameReport;

var ratingsSum = 0;
var ratingsCount = ratings.length;

for (var i = 0; i < ratingsCount; i++) {
    ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = " <h1>Customer Reviews</h1><h2>" + ratingsAvg + " out of 5 stars(" + ratingsCount + " reviews)</h2>";
//this is going to make the stars appear on the right side of the website 
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}


document.getElementsByTagName('aside')[0].innerHTML = ratingReport;