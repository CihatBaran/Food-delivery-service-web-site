$(document).ready(function () {

    /*This is for sticky navigation*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    

    /*Scroll on button*/
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-plans').offset().top - 60
        }, 1000);
    })

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top - 40
        }, 1000)
    })

    /*Smooth Scroll On Navigation*/
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    $('nav').removeClass('mobile-mode');
                    return false;
                }
            }
        });
    
    /*Animation Different Sections*/ 
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__fadeIn');
    }, {
        offset: '50%;'
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__fadeInUp');
    }, {
        offset: '50%;'
    });
    
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__pulse');
    }, {
        offset: '50%;'
    });
    
    
    /*Responsive Nav Bar*/  
    $('.js--open').click(function() {
        $('nav').addClass('mobile-mode');
    });
    
    $('.js--close').click(function() {
        $('nav').removeClass('mobile-mode');
    });
  
});


//var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})
