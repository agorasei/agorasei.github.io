function initUpdateReadingScroll(index) {

	const progress 						= document.querySelector(".progress"),
				progressDeterminate = document.querySelector(".progress .determinate");

	if (document.documentElement.offsetWidth <= 600) {

		let sliderItems		= document.querySelectorAll('.carousel-item'),
				sliderLength 	= sliderItems.length,
				initialWidth	= (100 / sliderLength),
				currentWidth	= 0;

		if (index && index > 0) {
			currentWidth = initialWidth * (++index);

			progress.setAttribute("aria-valuenow", parseInt(currentWidth));
			progressDeterminate.style.width = currentWidth + "%";

		} else {

			progress.setAttribute("aria-valuenow", parseInt(initialWidth));
			progressDeterminate.style.width = initialWidth + "%";

		}

	} else {

		window.addEventListener("scroll", function() {

			const winScroll = document.body.scrollTop || document.documentElement.scrollTop,
						height		= document.documentElement.scrollHeight - document.documentElement.clientHeight,
						scrolled	= (winScroll / height) * 100;

			progress.setAttribute("aria-valuenow", parseInt(scrolled));
			progressDeterminate.style.width = scrolled + "%";

		});
		
	}

}