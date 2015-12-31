// When Document Loads

$(document).ready(function () {

// Global JS

// Toggle Mobile menu when clicking mobile-menu-button

  $('.mobile-menu-button').click( function() {
    $('.mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Toggle Mobile menu when clicking gi-mobile-menu-item

  $('.mobile-menu-item').click( function() {
    $('.mobile-menu').animate({height: 'toggle'}, 250, function () {
    });
  });

// Hide gi-mobile-menu when any anchor is clicked 

$('a').click(function() {
  $('.mobile-menu').hide();
});

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */


// Toggle Tap Text cards (Read More/Read Less)
$('.section-text-button').toggle(function() {
  // Read more/ Read less button toggle function should act independently from one another when clicked
  var $this = $(this);

  $this.text('Read Less').siblings('.complete-text').slideToggle();
  }, function () {
    $(this).text('Read More').siblings('.complete-text').slideToggle();
});



// Toggle Tap Text cards (Read More/Read Less)
$('.sub-section-text-button').toggle(function() {
  // Read more/ Read less button toggle function should act independently from one another when clicked
  var $this = $(this);

  $this.text('<< Read Less').siblings('.complete-text').slideToggle();
  }, function () {
    $(this).text('Read More >>').siblings('.complete-text').slideToggle();
});


// On window resize > 800px, move 'Read More/Read Less' button to 2nd paragraph
  $(window).resize(function(){
     var width = $(window).width();
     if( width > 620 ){
        $('.body:nth-child(3)').removeClass('complete-text');
        $('.body:nth-child(3)').removeClass('complete-text');
     }
     else {
        $('.body:nth-child(3)').addClass('complete-text');
        $('.body:nth-child(3)').addClass('complete-text');
     }
  }).resize() // Trigger resize function on page load

    $(window).resize(function(){
     var width = $(window).width();
     if( width > 800 ){
        $('.body:nth-child(4)').removeClass('complete-text');
        $('.body:nth-child(4)').removeClass('complete-text');
     }
     else {
        $('.body:nth-child(4)').addClass('complete-text');
        $('.body:nth-child(4)').addClass('complete-text');
     }
}).resize();

    $(window).resize(function(){
     var width = $(window).width();
     if( width > 1000 ){
        $('.body:nth-child(5)').removeClass('complete-text');
        $('.body:nth-child(5)').removeClass('complete-text');
        $( '.sub-section-text-button' ).hide();
        $( '.section-text-button' ).hide();
     }
     else {
        $('.body:nth-child(5)').addClass('complete-text');
        $('.body:nth-child(5)').addClass('complete-text');
        $( '.sub-section-text-button' ).show();
        $( '.section-text-button' ).show();
     }
}).resize();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Brewing-Slider


var $slideWidth = $('.slide-card').outerWidth(true);
var slidesN = $('.slider-wrapper').find('.slide-card').length;
var $currentSlide = 0;   // =  current slide

function animate () { 
  var $newCurrentSlide = $currentSlide === -1 ? $currentSlide = slidesN - 1 : $currentSlide = $currentSlide % slidesN;
  $('.slider').stop().animate({left: - ( $slideWidth * $currentSlide ) }, 1000 );  
}

$('.gallery-button').on('click', function () {
  var theclass = $(this).hasClass('arrow-right') ? $currentSlide++ : $currentSlide--;
  animate();
});









}); // End of $(document).ready function

