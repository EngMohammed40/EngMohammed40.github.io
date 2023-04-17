$(document).ready(function(){
$('.bxslider').bxSlider({
    minSlides: 5,
    maxSlides: 5,
    moveSlides:1,
    slideWidth: 360,
    slideMargin: 10,
    responsive:true,
    auto:true,
    controls:false
  });   
});

var player = videojs('video_js');

$(window).scroll(function() {
  var hT = $('.projects-counts').offset().top,
      hH = $('.projects-counts').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $('.count-number').each(function (index,value) {
      let count  = $(this).data('count');
      $(value).counto(count,2000)
    });
  }
});

$(window).scroll(function() {
  var hT = $('.who-are-we').offset().top,
      hH = $('.who-are-we').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    player.autoplay('any');
  }
});
