var cosmal = {
  videoAspectRatio: 1.5,
  videoID: 'MKeweixBUQA'
}

$(function () { // Document ready
  // Toggle menu
  $("#navMenuBurger").on('click', function () {
    $("#navMenuBurger, #navMenu").toggleClass("is-active");
  });


  /* ----------------------
        Handle responsive video embeds.
        Only handle if necessary.    
    ----------------------- */
  if ($(".video-button").length > 0) {
    // Inject JS API into page
    $.getScript("https://www.youtube.com/iframe_api");

    // When YT API is ready, instantiate a new player
    window.onYouTubeIframeAPIReady = function() {
      cosmal.player = new YT.Player('cosmal-video-iframe', {
        playerVars: {
          rel: 0
        }
      });

      // Trigger resize to adjust size of video player
      $(window).resize();
    }

    


    // When a video button is clicked...
    $(".video-button").on("click", function () {
      // Show overlay
      $(".video-overlay").addClass("is-active");

      var newVideoID = $(this).attr('data-videoid');
      // If it's a new video, change global values.
      if (newVideoID !== cosmal.videoID) {
        cosmal.videoAspectRatio = parseFloat($(this).attr('data-aspectratio'));
        cosmal.videoID = $(this).attr('data-videoid');
        cosmal.player.loadVideoById(cosmal.videoID, 0, "hd1080");
      } else {
        cosmal.player.playVideo();
      }

      // Trigger window resize event to adjust size of video.
      $(window).resize();
    });

    // On video resize, need to adjust size of video iframe
    $(window).on("resize", function () {
      var bodyWidth = $('.video-overlay').width(),
        bodyHeight = $('.video-overlay').height(),
        scaleFactor = 0.9,
        W_dividedBy_H = cosmal.videoAspectRatio,
        H_dividedBy_W = 1 / cosmal.videoAspectRatio;

      var $vid = $(".video-overlay").find("iframe");
      // If height too large...
      if (scaleFactor * bodyWidth * H_dividedBy_W > scaleFactor * bodyHeight) {
        // Scale to height
        $vid.height(scaleFactor * bodyHeight)
          .width(W_dividedBy_H * (scaleFactor * bodyHeight));
      } else { // Otherwise...
        // Scale to width
        $vid.width(scaleFactor * bodyWidth)
          .height(H_dividedBy_W * (scaleFactor * bodyWidth));
      }

    });


    // Close overlay on click
    $(".video-overlay").on('click', function () {
      $(this).removeClass("is-active");
      cosmal.player.pauseVideo();
    });

    // Close overlay on esc key press
    $(document).on("keyup", function(e) {
      if (e.keyCode == 27 && $(".video-overlay").hasClass("is-active")) {
        $(".video-overlay").removeClass("is-active");
        cosmal.player.pauseVideo();
      }
    })

  } // END VIDEO RESPONSIVENESS

});