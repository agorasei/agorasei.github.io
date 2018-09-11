//= require materialize

document.addEventListener("DOMContentLoaded", function(e) {

	function initSlider() {
		const sliderItems		= document.querySelectorAll('.newsCarousel-item'),
					current 			= document.getElementById("newsNavigation-current");
		
		var		sliderLength 	= sliderItems.length,
					even 					= sliderLength / 2,
					odd 					= (sliderLength + 1) / 2;

		sliderItems[0].classList.add("active");
		sliderItems[1].classList.add('next');

		sliderItems.forEach(function(el, i, arr) {
			el.addEventListener("click", function(e) {
				
				e.preventDefault();
				e.stopPropagation();

				const sliderContainer = document.querySelector('.newsCarousel');

				let position = (((70 * i) + (10 * (i - 1))) * -1);
			  //debugger;
			  sliderContainer.style.transform = 'translateX(' + position + 'vw)';
			  
			  el.classList.remove('prev', 'next');
			  
			  sliderItems.forEach(function(el, i, arr) {
			  	el.classList.remove('prev', 'active', 'next');
			  });
			  
			  el.classList.add('active');

			  current.innerText = (i + 1);

			  if (el.previousElementSibling) el.previousElementSibling.classList.add('prev');
			  if (el.nextElementSibling) el.nextElementSibling.classList.add('next');

			  //debugger;
			  if (i == 0) {
			  	unbindNewsNavigationLeft();
			  	bindNewsNavigationRight();
			  } else if (i == (sliderLength - 1)) {
			  	bindNewsNavigationLeft();
			  	unbindNewsNavigationRight();
			  }

			  initUpdateReadingScroll(i);
			});
		});

		// Keyboard nav
		document.body.addEventListener("keydown", function(e) {
		  if (e.keyCode == 37) {
		    document.querySelector('.active').previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		  }
		  else if (e.keyCode == 39) {
		    document.querySelector('.active').nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		  }
		});
	}

	function initNewsNavigation() {

		const total					= document.getElementById("newsNavigation-total"),
					sliderLength	= document.querySelectorAll('.newsCarousel-item').length;

		total.innerText = sliderLength;

		bindNewsNavigationLeft();
		bindNewsNavigationRight();

	}

	function bindNewsNavigationLeft() {
		const previous = document.querySelector(".newsNavigation-previous a");

		previous.classList.remove("disabled");

		previous.addEventListener("click", function(e) {
			e.preventDefault();
		  document.querySelector('.active').previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		});
	}

	function unbindNewsNavigationLeft() {
		const previous = document.querySelector(".newsNavigation-previous a");

		previous.classList.add("disabled");

		previous.addEventListener("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
	}

	function bindNewsNavigationRight() {
		const next = document.querySelector(".newsNavigation-next a");

		next.classList.remove("disabled");

		next.addEventListener("click", function(e) {
			e.preventDefault();
		  document.querySelector('.active').nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		});
	}

	function unbindNewsNavigationRight() {
		const next = document.querySelector(".newsNavigation-next a");

		next.classList.add("disabled");

		next.addEventListener("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
		});
	}

	function initUpdateReadingScroll(index) {

		const progress 						= document.querySelector(".progress"),
					progressDeterminate = document.querySelector(".progress .determinate");

		if (document.documentElement.offsetWidth <= 600) {

			let sliderItems		= document.querySelectorAll('.newsCarousel-item'),
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

	if (document.documentElement.offsetWidth <= 600) {
		initSlider();
		initNewsNavigation();
	}

	if (document.querySelector(".progress")) {
		initUpdateReadingScroll(-1);
	}


});