document.addEventListener("DOMContentLoaded", function(e) {
		
	pageSetup();

	document.querySelector(".highContrastMode").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleHighContrast();
	});

	document.querySelector(".highContrastMode-small").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleHighContrast();
	});

	document.querySelector(".increaseFontMode").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleIncreaseFont();
	});

	document.querySelector(".increaseFontMode-small").addEventListener("click", function(e) {
		e.preventDefault();
		a11yToggleIncreaseFont();
	});

	document.querySelector(".fullScreenMode").addEventListener("click", function(e) {
		e.preventDefault();
		toggleFullScreen();
	});

	document.querySelector(".exitFullScreen").addEventListener("click", function(e) {
		e.preventDefault();
		toggleFullScreen();
	});

});

window.addEventListener("resize", function(e) {

	pageSetup();

});

function pageSetup() {

	let headline 		= document.querySelector(".headline"),
			mainContent = document.querySelector(".detailContent")
			elem 				= document.querySelector('.drops-mobile-carousel'),
			carousel 		= M.Carousel.getInstance(elem);

	if (carousel) carousel.destroy();

	if (document.documentElement.offsetWidth <= 600) {

		destroyParallaxDetail(headline);

		changeBackground(headline);
		changeBackground(headline, null, mainContent);

		darkOverlay(headline, 40);
		darkOverlay(mainContent, 90);

		detailCarousel();

	} else {

		initParallaxDetail(headline, true);
		darkOverlay(headline, 60);

	}

	initUpdateReadingScroll(-1);

}

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
  			indicators: false,
  			onCycleTo: function() {
					newsNavigation(M.Carousel.getInstance(elem));
  			}
  		},
  		instance 	= M.Carousel.init(elem, options);

	document.addEventListener("keydown", function(e) {

		switch(e.keyCode) {
			case 37:
			case 38:
				e.preventDefault();
				carouselGoTo(instance, "prev");
				break;
			case 39:
			case 40:
				e.preventDefault();
				carouselGoTo(instance, "next");
				break;
		}

		return true;

	});

	newsNavigation(instance);

}