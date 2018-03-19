
$(document).ready(function() {

	// 1 Prevent the page from jumping when any a tag is clicked - use event.preventDefault()

$('a').click(function(event) {
    event.preventDefault();
});

	// 2 Using the $.click() handler, make the text in p slide down using $.slideDown(), $.hide() the "read more" button and $.show the "read less" button

$('.readmore').click(function() {
   $(this).next('#show-this-on-click').slideDown();
   $(this).hide();
   $('.readless').show();
});

	// 4 Using the $.click() handler, make the text in p slide up using $.slideUp(), $.hide() the "read less" button and $.show the "read more" function

$('.readless').click(function() {
   $('#show-this-on-click').slideUp();
   $(this).hide();
   $('.readmore').show();
});

	// 5 Make the span in p $.slideDown() when "Learn More" is clicked and $.hide() the button

$('.learnmore').click(function() {
   $('#learnmoretext').slideDown();
   $(this).hide();
});

});