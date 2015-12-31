$(document).ready(function () {

/* Menu functions */

function animateMobileMenu() {
  $( '.mobile-menu' ).animate( { height: 'toggle' }, 250 );
}

function hideMobileMenu () {
  $('.mobile-menu').hide();
}

//Menu Event Bindings
  $( '.mobile-menu-button' ).on( 'click', animateMobileMenu );
  $( '.mobile-menu-item' ).on( 'click', animateMobileMenu );
  $('a').on( 'click', hideMobileMenu );

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// Toggle hidden-text functions

function revealSectionText () {
  $( this ).text( 'Read Less' ).siblings( '.complete-text' ).slideToggle();
}

function hideSectionText () {
  $( this ).text( 'Read More' ).siblings( '.complete-text' ).slideToggle();
}

function revealSub_SectionText () {
  $( this ).text( '<< Read Less' ).siblings( '.complete-text' ).slideToggle();
}

function hideSub_SectionText () {
  $( this ).text( 'Read More >>' ).siblings( '.complete-text' ).slideToggle();
}

// Text-button Event Bindings
$('.section-text-button').toggle( revealSectionText ,  hideSectionText );
$('.sub-section-text-button').toggle( revealSub_SectionText ,  hideSub_SectionText );

/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// Window Resize functions

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
        $( '.section-text-button' ).hide();
        $( '.sub-section-text-button' ).hide();
     }
     else {
        $('.body:nth-child(5)').addClass('complete-text');
        $('.body:nth-child(5)').addClass('complete-text');
        $( '.section-text-button' ).show();
        $( '.sub-section-text-button' ).show();
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

