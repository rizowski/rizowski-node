$(document).ready(function(){
  $('.img-holder').imageScroll({
      coverRatio: 0.5
  });
  $('.menu-link').bigSlide();

  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});
