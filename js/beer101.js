
$(document).ready(function () {
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu functions

function toggleMenu() {
  $( '.toggle-menu' ).animate( { height: 'toggle' }, 250 );
}

function hideMobileMenu () {
  $('.dropdown-mobile-menu').hide();
}

// Toggle dropdwon mobile menu
  $( '.toggle-menu-header > .menu-glyph' ).click( toggleMenu );
  $( '.dropdown-menu-button' ).on( 'click', toggleMenu );

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle hidden-text functions

// function revealSectionText () {
//   $( this ).text( 'Read Less' ).siblings( '.hidden-text' ).slideToggle();
// }

// function hideSectionText () {
//   $( this ).text( 'Read More' ).siblings( '.hidden-text' ).slideToggle();
// }

// // Text-button Event Bindings
// $('.text-visibility-button').toggle( revealSectionText ,  hideSectionText );


//////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// Window Resize functions

// On window resize > 800px, move 'Read More/Read Less' button to 2nd paragraph

// text-visibility-buttons (all but 'beer-descriptors')

// function hideAllTextVisibilityButtons() {
//   $('.what-is-beer.text-visibility-button').hide();
//   $('.beer-assessment.text-visibility-button').hide();
//   $('.beer-descriptors.text-visibility-button').hide();
// }

// function showAllTextVisibilityButtons() {
//   $('.what-is-beer.text-visibility-button').show();
//   $('.beer-assessment.text-visibility-button').show();
//   $('.beer-descriptors.text-visibility-button').show();
// }
// //removeCLasses
// function removeFirstHiddenTextClass() {
//   $('.panel-body-text:nth-child(2)').removeClass('hidden-text');
// }

// function removeSecondHiddenTextClass() {
//   $('.panel-body-text:nth-child(3)').removeClass('hidden-text');
// }

// function removeThirdHiddenTextClass() {
//   $('.panel-body-text:nth-child(4)').removeClass('hidden-text');
// }
// function removeFourthHiddenTextClass() {
//   $('.panel-body-text:nth-child(5)').removeClass('hidden-text');
// }

// addClasses

// function addFirstHiddenTextClass() {
//   $('.panel-body-text:nth-child(2)').addClass('hidden-text');
// }

// function addSecondHiddenTextClass() {
//   $('.panel-body-text:nth-child(3)').addClass('hidden-text');
// }


// function addThirdHiddenTextClass() {
//   $('.panel-body-text:nth-child(4)').addClass('hidden-text');
// }

// function addFourthHiddenTextClass() {
//   $('.panel-body-text:nth-child(5)').addClass('hidden-text');
// }


  // $(window).resize(function(){
  //    var width = $(window).width();
  //       if( width < 620 ){
  //         addFirstHiddenTextClass();
  //         addSecondHiddenTextClass();
  //         addThirdHiddenTextClass();
  //         addFourthHiddenTextClass();
  //       }
  //   }).resize(); // Trigger resize function on page load

  // $(window).resize(function(){
  //    var width = $(window).width();
  //       if( width > 620){
  //         removeFirstHiddenTextClass();
  //       } else {
  //         addFirstHiddenTextClass();
  //       }
  //   }).resize();

  //   $(window).resize(function(){
  //      var width = $(window).width();
  //       if( width > 820 ){
  //         removeSecondHiddenTextClass();
  //         removeThirdHiddenTextClass();
  //         hideAllTextVisibilityButtons();
  //       } else {
  //         addSecondHiddenTextClass();
  //         addThirdHiddenTextClass();
  //         showAllTextVisibilityButtons();
  //      }
  //   }).resize();



}); // End of $(document).ready function

