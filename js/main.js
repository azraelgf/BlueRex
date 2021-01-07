'use strict'

$(document).ready(function () {

    $(window).on('load', function (){
        $('.preloader').delay(200).fadeOut('slow', function (){
            $(this).attr('style', 'display : none !important')
        });
    });
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

    $(window).scroll(function (){
        if($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        }else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function (){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});


