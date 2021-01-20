// document.getElementById("heading").innerHTML = " Documentation for better understanding";
document.getElementById("text").innerHTML = "\n" + "When we make anything or learn anything. it is neccessary that we must understand what are we doing. Just follwing along is not enough for become a good developer. You have to do hard work. You have to understand how things are working. We can never get anything without understanding. For this we give you the blog page where you will find all our content and our youtube class. but that page only allows you to learn what we are teaching you. But for becoming good developer you must understand and get more infotmation and learn ore. So that you can make good products. That is why we have these page. As we move further this page will also move further. Things that we used you will find the detailed documents. Also how to use them so you do not need to google it all the time. It is important for a developer to read things. Most of the people try to acoid it which is so bad. If we do not read we will face much trouble. IN my career I have seen many people like this. So in the right side I am giving a chart.";

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Read', 5],
  ['Do not read', 15],
  ['Copy & paste', 4],
  ['watch just Tutorial', 10],
  ['success', 3]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}





