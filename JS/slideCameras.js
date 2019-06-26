var slideIndex = 1;
showSlidesCam(slideIndex);

// Previous and Next Arrows
function plusSlidesCam(n) {
	showSlidesCam(slideIndex += n);
}

function currentSlideCam(n) {
	showSlidesCam(slideIndex = n);
}

function showSlidesCam(n) {

	var i;
	var slides = document.getElementsByClassName("slide-cameras");
	var dots = document.getElementsByClassName("dot-cameras");

	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	
}