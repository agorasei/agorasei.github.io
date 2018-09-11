document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		initSlider();
		initNewsNavigation();
	}

	initUpdateReadingScroll(-1);
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		initSlider();
		initNewsNavigation();
	}

});