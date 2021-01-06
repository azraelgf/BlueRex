'use strict'
$(document).ready(function () {
    let playBtn = $('#videoPlayBtn');
    $(playBtn).click(function() {
        playBtn.hide();
        $('.player-image').hide();
        $('.embed-responsive').removeClass('d-none');
        var $video = $('#video'),
            src = $video.attr('src');
        $video.attr('src', src + '&autoplay=1');
    });
    baguetteBox.run('.gallery');
});


