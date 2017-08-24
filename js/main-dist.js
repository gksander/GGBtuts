"use strict";

var cosmal = {
    videoAspectRatio: 1.5,
    videoID: "MKeweixBUQA"
};

$(function() {
    $("#navMenuBurger").on("click", function() {
        $("#navMenuBurger, #navMenu").toggleClass("is-active");
    }), $(".video-button").length > 0 && ($.getScript("https://www.youtube.com/iframe_api"), 
    window.onYouTubeIframeAPIReady = function() {
        cosmal.player = new YT.Player("cosmal-video-iframe", {
            playerVars: {
                rel: 0
            }
        }), $(window).resize();
    }, $(".video-button").on("click", function() {
        $(".video-overlay").addClass("is-active"), $(this).attr("data-videoid") !== cosmal.videoID ? (cosmal.videoAspectRatio = parseFloat($(this).attr("data-aspectratio")), 
        cosmal.videoID = $(this).attr("data-videoid"), cosmal.player.loadVideoById(cosmal.videoID, 0, "hd1080")) : cosmal.player.playVideo(), 
        $(window).resize();
    }), $(window).on("resize", function() {
        var bodyWidth = $(".video-overlay").width(), bodyHeight = $(".video-overlay").height(), W_dividedBy_H = cosmal.videoAspectRatio, H_dividedBy_W = 1 / cosmal.videoAspectRatio, $vid = $(".video-overlay").find("iframe");
        .9 * bodyWidth * H_dividedBy_W > .9 * bodyHeight ? $vid.height(.9 * bodyHeight).width(W_dividedBy_H * (.9 * bodyHeight)) : $vid.width(.9 * bodyWidth).height(H_dividedBy_W * (.9 * bodyWidth));
    }), $(".video-overlay").on("click", function() {
        $(this).removeClass("is-active"), cosmal.player.pauseVideo();
    }), $(document).on("keyup", function(e) {
        27 == e.keyCode && $(".video-overlay").hasClass("is-active") && ($(".video-overlay").removeClass("is-active"), 
        cosmal.player.pauseVideo());
    })), $("#menuButton").on("click", function() {
        $("#menuButton i").toggleClass("fa-bars fa-times"), $("#sideMenu").toggleClass("sideMenuShown");
    });
});