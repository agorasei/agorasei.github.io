document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		//initSlider();
		//initNewsNavigation();

		let headline = document.querySelector(".headline");

		changeBackground(headline);


	} else {

		parallaxDetail(true);

	}

	initUpdateReadingScroll(-1);
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		//initSlider();
		//initNewsNavigation();
	} else {
		parallaxDetail();
	}

});