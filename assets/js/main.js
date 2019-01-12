(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('#preloader').fadeOut();
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
            closedSymbol: '<i class="icon-arrow-right"></i>',
            openedSymbol: '<i class="icon-arrow-down"></i>',
        });
        jQuery('#clock').countdown('2019/02/06', function (event) {
            var $this = jQuery(this).html(event.strftime(''
                + '<div class="time-entry days"><span>%-D</span> ימים</div> '
                + '<div class="time-entry hours"><span>%H</span> שעות</div> '
                + '<div class="time-entry minutes"><span>%M</span> דקות</div> '
                + '<div class="time-entry seconds"><span>%S</span> שניות</div> '));
        });
        var wow = new WOW({mobile: false});
        wow.init();
        $('.onepage-nev').onePageNav({currentClass: 'active'});
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
}(jQuery));