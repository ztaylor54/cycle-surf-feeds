var curr = 0; // Set the initial index
var first = true; // Needed to grab initial iframe
var buffered = null; // Store info on the buffered iframe
var hiddenid = null; // Store the id of the hidden frame
var visibleid = null; // Store the id of the visible frame

function cycle() {
  if (curr == feeds.length) {
    curr = 0; // Loop back to the beginning
  }
  if(first == true) {
    var displayed = feeds[curr];
    buffered = feeds[(curr + 1) % feeds.length];  // loop around (just in case)
    $('#title').text(displayed.name); // Set the title
    $('#frame1').html(displayed.embed);
    $('#frame2').html(buffered.embed);
    $('#frame2').hide(); // Hide the buffer
    hiddenid = '#frame2';
    visibleid = '#frame1';
    first = false;
    curr += 1; // Make sure the next one skips the buffer we read in
  }
  else {
    $('#title').text(buffered.name); // Set the title
    $(hiddenid).show(); // Make the buffer visible
    $(visibleid).hide(); // Hide the display
    // Swap the buffers
    var temp = hiddenid;
    hiddenid = visibleid;
    visibleid = temp;
    buffered = feeds[curr]; // Next feed to go to the buffer
    $(hiddenid).html(buffered.embed); // Load the new frame into the hidden buffer
  }
  curr += 1;
}

$(document).ready(function() {
  cycle();
  var timer = setInterval(cycle, 30 * 1000); // 3 minutes
  $('#next').click(function() {
    cycle();
    clearInterval(timer);
    timer = setInterval(cycle, 30 * 1000);
  });
});

var feeds = [
  { "name"  : "Malibu second-to-third point",
    "link"  : "http://www.surfline.com/surf-report/malibu-second-to-third-point-southern-california_4209/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4209\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Topanga beach",
    "link"  : "http://www.surfline.com/surf-report/topanga-beach-southern-california_4210/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4210\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Malibu first point",
    "link"  : "http://www.surfline.com/surf-report/malibu-first-point-southern-california_119811/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=119811\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Malibu overview",
    "link"  : "http://www.surfline.com/surf-report/malibu-overview-southern-california_135847/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=135847\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Sunset point",
    "link"  : "http://www.surfline.com/surf-report/sunset-point-southern-california_4883/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4883\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Sunset beach",
    "link"  : "http://www.surfline.com/surf-report/sunset-beach-southern-california_119813/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=119813\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Zuma",
    "link"  : "http://www.surfline.com/surf-report/zuma-southern-california_4949/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4949\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "County line",
    "link"  : "http://www.surfline.com/surf-report/county-line-southern-california_4203/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4203\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "County line overview",
    "link"  : "http://www.surfline.com/surf-report/county-line-overview-southern-california_135846/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=135846\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Mavericks",
    "link"  : "http://www.surfline.com/surf-report/mavericks-northern-calif",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4152\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Venice beach 2",
    "link"  : "http://www.surfline.com/surf-report/venice-beach-southern-california_4211/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=4211\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  },
  {
    "name"  : "Venice breakwater",
    "link"  : "http://www.surfline.com/surf-report/venice-breakwater-southern-california_146850/",
    "embed" : "<iframe width=\"640\" height=\"360\" src=\"http://e.cdn-surfline.com/syndication/embed/v1/player.html?id=146850\" frameborder=\"0\" scrolling=\"no\" allowfullscreen></iframe>"
  }
];
