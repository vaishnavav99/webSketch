$(window).scroll(function(){
    var scrl = $(window).scrollTop();
    if(scrl < 60)
        {
            $('.header-1').removeClass('fixedbar');
        }
    else{
        $('.header-1').addClass('fixedbar');
    }
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
   showSlides(slideIndex += n);
}

function showSlides(n){
   var i;
   var slides = document.getElementsByClassName("myslides");
   if(n > slides.length){
       slideIndex = 1
   }

   if(n < 1){slideIndex = slides.length}
   for(i = 0; i < slides.length; i++){
       slides[i].style.display = "none";
   }
   slides[slideIndex-1].style.display = "block";


}



// // lootie
// LottieInteractivity.create({
//   mode: 'scroll',
//   player: '#firstLottie',
//   actions: [
//     {
//       visibility: [0, 1],
//       type: 'seek',
//       frames: [0, 100],
//     },
//   ],
// });


// counter starts here
(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

})(jQuery);
