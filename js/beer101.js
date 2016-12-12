
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


}); // End of $(document).ready function

