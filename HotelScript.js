// Get the button:
let mybutton = document.getElementById("myScrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*JS for read more*/

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}