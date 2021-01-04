

   $(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });


  $(document).ready(function(){
      $("#testimonial-slider").owlCarousel({
         items:1,
          itemsDesktop:[1000,1],
          itemsDesktopSmall:[979,1],
          itemsTablet:[768,1],
          pagination:true,
          autoPlay:false

      });
     $('.count').counterUp({
                delay: 10,
                time: 4000
            });
  });

    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true


    });


});

jQuery(document).ready(function(){
   $(window).scroll(function() {

    if ($(window).scrollTop() > 80) {
        $('.main_header').addClass('sticky');
    } else {
        $('.main_header').removeClass('sticky');
    }
});


$('.mobile-toggle').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.main_header').removeClass('open-nav');
    } else {
        $('.main_header').addClass('open-nav');
    }
});





$('.main_header li a').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_header').removeClass('open-nav');
    }
});


$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 600);
    event.preventDefault();
});

new WOW().init();
});
