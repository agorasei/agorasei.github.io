document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		//initSlider();
		//initNewsNavigation();

		let parallaxContainer = document.querySelector(".parallax-container");

		parallaxContainer.style.backgroundImage = "url('" + parallaxContainer.getAttribute("data-image") + "')";
		parallaxContainer.style.backgroundRepeat = "no-repeat";
		parallaxContainer.style.backgroundPosition = "center center";

	} else {

		let parallaxContainer = document.querySelector(".parallax-container"),
				image = document.createElement("img");

		image.src = parallaxContainer.getAttribute("data-image");

		let elems = document.querySelector('.parallax');

		elems.appendChild(image);

	  var instancesParallax = M.Parallax.init(elems, {});
	}

	initUpdateReadingScroll(-1);
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		//initSlider();
		//initNewsNavigation();
	} else {
		var elems = document.querySelectorAll('.parallax');
	  var instancesParallax = M.Parallax.init(elems, {});
	}

});