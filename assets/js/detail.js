document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		initSlider();
		initNewsNavigation();

	    var elems = document.querySelectorAll('.parallax');
	    var instances = M.Parallax.init(elems, {});
	}

	initUpdateReadingScroll(-1);
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {
		initSlider();
		initNewsNavigation();
	}

});