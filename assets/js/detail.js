document.addEventListener("DOMContentLoaded", function(e) {

	if (document.documentElement.offsetWidth <= 600) {

		let headline 		= document.querySelector(".headline"),
				mainContent = document.querySelector(".detailContent");
		changeBackground(headline);
		changeBackground(headline, null, mainContent);

		darkOverlay(headline, 40);
		darkOverlay(mainContent, 90);

		detailCarousel();

	} else {

		parallaxDetail(true);

	}

	initUpdateReadingScroll(-1);

	document.getElementById("highContrastMode").addEventListener("click", function(e) {

		e.preventDefault();

		a11yToggleHighContrast();

	});
	
});

window.addEventListener("resize", function(e) {

	if (document.documentElement.offsetWidth <= 600) {

		let headline 		= document.querySelector(".headline"),
				mainContent = document.querySelector(".detailContent");
		changeBackground(headline);
		changeBackground(headline, null, mainContent);

		darkOverlay(mainContent);

		detailCarousel();

	} else {
		parallaxDetail(true);
	}

	initUpdateReadingScroll(-1);

});

function detailCarousel() {

	var elem 		= document.querySelector('.drops-mobile-carousel'),
  		options = {
  			duration: 	200,
  			dist: 		-20,
  			padding: 	0,
  			shift: 		0,
  			numVisible: 3,
  			noWrap: 	true,
  			fullWidth: 	false,
  			indicators: false
  		},
  		instance 	= M.Carousel.init(elem, options);

	document.addEventListener("keydown", function(e) {

		switch(e.keyCode) {
			case 37:
			case 38:
				carouselGoTo(instance, "prev");
				break;
			case 39:
			case 40:
				carouselGoTo(instance, "next");
				break;
		}

	});

	newsNavigation(instance);

}