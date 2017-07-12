$about = $('.about');
$aboutLink = $('.about-link');

$aboutLink.on('click', function(event){
	$about.stop().slideToggle(800);
});

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');
var $leftArrow = $('<p>Предыдущая</p>');
var $rightArrow = $('<p>Следующая</p>');

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);
$overlay.append($leftArrow);
$overlay.append($rightArrow);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  $leftArrow.click(function(){
    
  });

  $rightArrow.click(function(){
    
  });

  //Show the overlay.
  $overlay.fadeIn();
  
  //Get child's title attribute and set caption
  var captionText = $(this).children("img").attr("title");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.fadeOut();
});

