jQuery(document).ready(function($) {

    "use strict";

    var grid = document.querySelector(
            '.cv-portfolio--masonry'
        ),
        masonry;

    if (
        grid &&
        typeof Masonry !== undefined &&
        typeof imagesLoaded !== undefined
    ) {
        imagesLoaded( grid, function( instance ) {
            masonry = new Masonry( grid, {
                itemSelector: '.single-portfolio-wrap'
            } );
        } );
    }
    
    /**
     * Masonry for archive
     */    
    var gridlist = document.querySelector(
            '.site-main'
        ),
        masonry;

    if (
        gridlist &&
        typeof Masonry !== undefined &&
        typeof imagesLoaded !== undefined
    ) {
        imagesLoaded( gridlist, function( instance ) {
            masonry = new Masonry( gridlist, {
                itemSelector: 'article'
            } );
        } );
    }
     
    /* 
     * Inner Page header image background height
     */
     function setHeight() {
        var windowHeight = $(window).innerHeight();
        $('.custom-header').css('min-height', windowHeight);
    };
    setHeight();
    
    $(window).resize(function() {
        setHeight();
    });
    
     /**
     * Scroll to next section
     */
     
    $(".icon-scroll").click(function() {
        var cls = $(this).closest(".cv-fullpage-section").next().offset().top;
        $("html, body").animate({scrollTop: cls}, "slow");
    });

    /**
     * Settings about WOW animation
     */
    var wowOption = fullscreenagencyObject.wow_effect;
    if( wowOption === 'on' ) {
        new WOW().init();
    }

    var anchor = [];
    var i;

    for (i = 0; i < $("#cv-fullscreen > .cv-fullpage-section").length; i++) {
        anchor.push( 'cv-fullpage-section' + i );
    }

    //full page custom script
    $('#cv-fullscreen').fullpage({
        sectionSelector: '.cv-fullpage-section',
        scrollOverflow: true,
        lockAnchors: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true,
        navigationPosition: 'right',
        //loopTop: true,
        scrollBar: true
    });

    // Add Arrow Down and Arrow Up for page navigation.
    $('#fp-nav').prepend('<i class="fa fa-sort-up"></i>');
    $('#fp-nav').append('<i class="fa fa-sort-down"></i>');

    $('.fa-sort-up').on('click', function(){
        $.fn.fullpage.moveSectionUp();
    });

    $('.fa-sort-down').on('click', function(){
        $.fn.fullpage.moveSectionDown();
    });

    /*
     * Testimonial Section show on click
     */
    $('.thumb-image-block').click(function(){
        var testimonialshow = $(this).attr('data-filter');
        $(this).parent().find('.thumb-image-block').removeClass('active');
        $(this).addClass('active');
        $('.single-testimonial-member-wrap').hide();
        $('.'+testimonialshow+'').show();
    });

    /**
     * Header Search script
     */
    $('.fullscreen-agency-search-icon').click(function() {
        $('.fullscreen-agency-form-wrap').toggleClass('search-activate');
    });
      
    $('.fullscreen-agency-form-close').click(function() {
        $('.fullscreen-agency-form-wrap').removeClass('search-activate');
    });

     //responsive menu toggle
    $('#masthead .menu-toggle').click(function(event) {
        $( '#site-navigation' ).addClass('active-nav'); 
    });
    $('.menu-toggle-off').click(function(event) {
        $( '#site-navigation' ).removeClass('active-nav'); 
    });

      /*

     * Sticky menu script

     */
    $(function(){
        var shrinkHeader = 10;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.site-header').addClass('header-sticky');
            } else {
                $('.site-header').removeClass('header-sticky');
            }
        });
       function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    //responsive sub menu toggle
    $('#site-navigation .menu-item-has-children, #site-navigation .page_item_has_children').append('<span class="sub-toggle"> <i class="fa fa-angle-right"></i> </span>');

    $('#site-navigation .sub-toggle').click(function() {
        $(this).parent('.menu-item-has-children').children('ul.sub-menu').first().slideToggle('1000');
        $(this).parent('.page_item_has_children').children('ul.children').first().slideToggle('1000');
        $(this).children('.fa-angle-right').first().toggleClass('fa-angle-down');
    });
});