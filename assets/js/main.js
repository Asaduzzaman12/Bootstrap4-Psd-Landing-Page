$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();


	// The code is for sticky header
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if(scroll < 200) {
			$("#header_sticky").removeClass("sticky");
		} else {
			$("#header_sticky").addClass("sticky");
		}
	});


	// The code is for header slider
	$('.header_slider').owlCarousel({
	    loop:true,
	    dots: true,
	    nav: false ,
	    autoplay: true,
    	autoplayTimeout: 8000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
    	}
	})
	$( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');
	

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');



    // Magnific popup
	
	$('#popup_video').magnificPopup({
  		type: 'iframe',
  		iframe: {
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', 
		      id: 'v=',
		      src: 'http://www.youtube.com/embed/%id%?autoplay=1'
		    }
		  },

		  srcAction: 'iframe_src', 
		}
	});


	// This code is for skll bar
	$('.skillbar').skillBars({
		 // options here
	});


	// This code is for counter
	$('.counter_num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        	}
    	});
	});

	// This code is for mixit up filtering
	var mixer = mixitup('.portfolio_content');


	// This code is portfolio image popup
	  $('.image-link').magnificPopup({type:'image'});


	// This code is team
	$('.our_team_item').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,

 
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})

	// This code is testimonial
	$('.owl-carousel-testimonial').owlCarousel({
    loop:true,
    nav:false,
    autoplay: true,
    items: 1,
    autoplayTimeout: 3000,

	})


	// This function is for scroll up button
	$(window).scroll(function () {
		if($(this).scrollTop() > 400){
			$(".scroll_up_btn").fadeIn();
		} else {
			$(".scroll_up_btn").fadeOut();
		}
	})


	$(".scroll_up_btn").click(function (){
		$("html, body").animate({
			scrollTop: 0
		}, 1000 )
	});


	// This code is for smooth scrolling 
	// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
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
		          scrollTop: target.offset().top
		        }, 1000, function() {
		          // Callback after animation
		          // Must change focus!
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { // Checking if the target was focused
		            return false;
		          } else {
		            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            $target.focus(); // Set focus again
		          };
		        });
		      }
		    }
		  });


}(jQuery));