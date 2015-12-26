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

  $this.text('Read Less').siblings('.complete-text').slideToggle();
  }, function () {
    $(this).text('Read More').siblings('.complete-text').slideToggle();
});








// On window resize 
/*  $(window).resize(function(){
     var width = $(window).width();
     if(width >= x){
   
     }
     else{
         
     }
  }).resize() // Trigger resize function on page load

*/


}); // End of $(document).ready function

