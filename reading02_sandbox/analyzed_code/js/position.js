$(function() { //On DOM completion, run this code...
  var $window = $(window); //Store this jQ selection as it be used more than once. Select the window.
  var $slideAd = $('#slideAd'); // Store jQ selection. Select things IDed slideAd
  var endZone = $('#footer').offset().top - $window.height() - 500; // Define a zone of the page as the endZone. That zone is calculated here as the offset position of the footer from the top minus the height of the window minus 500.

  $window.on('scroll', function() { //when the user scrolls the window, trigger this function

    if (endZone < $window.scrollTop()) { //If we're in the endZone, run the following block
      $slideAd.animate({ 'right': '0px' }, 250); //slide the slideAd out from the right side over the next 250ms. We're bringing it to its normal position.
    } else { //if we're not in the endZone, though
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250); //Stop the animation if it's in progress. slide the ad back into the right side of the page.
    }

  });

});
