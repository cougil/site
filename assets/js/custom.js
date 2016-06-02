var Contact = function () {

    return {

        //Map
        initMap: function () {
					var map;
					$(document).ready(function(){
						if ( $( "#map" ).length ) {
							map = new GMaps({
								div: '#map',
								lat: 51.5175641,
								lng: -0.097832
							  });
							var marker = map.addMarker({
								lat: 51.5175641,
								lng: -0.097832,
					            title: 'Codurance Ltd'
					          });
						}

					});
        }

    };
}();

$(document).ready(function() { 

    //This function is necessary so Safari can redraw the menu 
    $(".dropdown").click(function(){
        return true;
    });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin: 20
        },
        600:{
            items:3,
            margin: 30
        },
        1000:{
            items:6,
            margin: 40
        }
    }
  });

    $('#services-button').click(function(){	
	$('html,body').animate({
	    scrollTop: $('#services').offset().top
	}, 600);
    });
});
