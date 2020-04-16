

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Richa Patel
   Date:   03/04/2020
   
   Filename: hg_report.js
	
*/
var gameReport = '<h1>' + itemTitle + '</h1>'
    + '<h2>By:' + itemManufacturer + '</h2>'
    + '<img src="images/hg_10551.png" alt="id" id="gameImg" />'
    + '<table>'
    + '<tr><th>Product ID</th>'
    + '<td>' + itemID + '</td></tr>'
    + '<tr><th>List Price</th><td>' + itemPrice + '</td></tr> <tr><th>Platform</th><td>' + itemPlatform + '</td></tr>'
    + '<tr><th>ESRB Rating</th><td>' + itemESRB + '</td></tr> <tr><th>Condition</th><td>' + itemCondition + '</td></tr> <tr><th>Release</th><td>' + itemRelease + '</td></tr>'
    + '</table>'
    + itemSummary;

//display game report
document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingSum = 0;
var ratingCount = ratings.length;
//for loop 
var i;
for (i = 0; i < ratings.length; i++) {
    ratingSum += ratings[i];
}
var ratingsAvg = ratingSum / ratingCount;

var ratingReport = '<h1>Customer Reviews</h1>' + '<h2>' + ratingsAvg + ' out of 5 stars (' + ratingCount + 'reviews)</h2>';
var j;
//loop three customers reviews
for (j = 0; j < 3; j++) {
    ratingReport += '<div class="review"> <h1>' + ratingTitles[j] + '</h1><table> <tr><th>By</th><td>' + 
    ratingAuthors[j] + '</td></tr> <tr><th>Review Date</th><td>' + ratingDates[j] + '</td></tr> <tr><th>Rating</th><td>';

    for (var c = 0; c < ratings[j] ; c++) {
        ratingReport += '<img src="images/hg_star.png" />';
    }
    ratingReport += '</td></tr></table>'
        + ratingSummaries[j]
        + '</div>';
}
//display
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;