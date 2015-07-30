/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // Tooltip init
        tooltipInit();

        // Init the posts
        postInit();

        // Waypoints
        waypointsInit();

        // Mark Videos for fitVids
        markVideos();

        // Mark Images for magnificPopup
        markImages();
    });

// Init waypoints for header and footer animations
function waypointsInit() {
    $('#masthead').waypoint(function(direction) {
       $('#masthead').addClass('animation-on');
    });
    $('#masthead').waypoint(function(direction) {
       $('#masthead').toggleClass('animation-on');
    }, { offset: '-30%' });

    $('#footer').waypoint(function(direction) {
      $('#footer').toggleClass('animation-on');
    } , { offset: 'bottom-in-view' });
}

// Init bootstrap tooltip
function tooltipInit() {
    $('[data-toggle]').tooltip();
}

function postInit() {

    // Set feature image
    var featured = $('.featured-image').find('img').attr('src');
    if (featured) {
        $('#masthead').css('backgroundImage','url('+featured+')');
        $('#footer').css('backgroundImage','url('+featured+')');
    };
}

function markVideos () {
  $("article").fitVids();
}

function markImages () {
  $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  $(".image-popup").magnificPopup({
    type: "image"
  });
}

}(jQuery));
