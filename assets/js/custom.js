$(".btn").on("click",function(){
  $('.menu').toggleClass("show");
});








// accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// accordian2

$(document).ready(function() {
	$('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
	$('.acc-container .acc:nth-child(1) .acc-content').slideDown();
	$('.acc-head').on('click', function() {
		if($(this).hasClass('active')) {
		  $(this).siblings('.acc-content').slideUp();
		  $(this).removeClass('active');
		}
		else {
		  $('.acc-content').slideUp();
		  $('.acc-head').removeClass('active');
		  $(this).siblings('.acc-content').slideToggle();
		  $(this).toggleClass('active');
		}
	});     
	});




// video script
// update variable with the Youtube ID
const videoID = "MkRSmynqonM";
const parentContainer = document.querySelector(".video-container");
parentContainer.addEventListener("click", function () {
  const lazyLoadingChild = document.querySelector(".lazy-loading-content");
  parentContainer.removeChild(lazyLoadingChild);
  const responsiveVideoContainer = document.createElement("div");
  responsiveVideoContainer.classList.add(
    "embed-responsive",
    "embed-responsive-16by9"
  );
  const videoIframe = document.createElement("iframe");

  videoIframe.classList.add("embed-responsive-item");

  videoIframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`;

  videoIframe.setAttribute("allow", "autoplay");
  responsiveVideoContainer.appendChild(videoIframe);
  parentContainer.appendChild(responsiveVideoContainer);
});



//Annimation Scroll


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');