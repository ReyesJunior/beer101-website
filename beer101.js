$(document).ready(function () {

/* Menu functions */

function toggleMobileMenu() {
  $( '.dropdown-mobile-menu' ).animate( { height: 'toggle' }, 250 );
}

function hideMobileMenu () {
  $('.dropdown-mobile-menu').hide();
}

// Toggle dropdwon mobile menu
  $( '.dropdown-hamburger' ).on( 'click', toggleMobileMenu );
  $( '.dropdown-menu-button' ).on( 'click', toggleMobileMenu );
  // $('a').on( 'click', hideMobileMenu );

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

  $(window).resize(function(){

    var width = $(window).width();
      if( width > 767 ){

          $('#collapseOne.panel-collapse.collapse').addClass( 'in' );

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 575) {
                $( '.accordion' ).addClass( 'fixed-accordion' );
                
            } else {
                $( '.accordion' ).removeClass( 'fixed-accordion' );
                // $('#collapseOne.panel-collapse.collapse').removeClass( 'in' );
            }

          });

      } else {
            $( '.accordion' ).removeClass( 'fixed-accordion' );
            $('#collapseOne.panel-collapse.collapse').removeClass( 'in' );

   }

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

