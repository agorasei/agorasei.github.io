function initSlider() {
	const sliderItems		= document.querySelectorAll('.newsCarousel-item'),
				current 			= document.getElementById("newsNavigation-current"),
				previous 			= document.querySelector(".newsNavigation-previous a"),
				next 					= document.querySelector(".newsNavigation-next a");
	
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
		  sliderContainer.style.transform = 'translateX(' + position + 'vw)';
		  
		  el.classList.remove('prev', 'next');
		  
		  sliderItems.forEach(function(el, i, arr) {
		  	el.classList.remove('prev', 'active', 'next');
		  });
		  
		  el.classList.add('active');

		  current.innerText = (i + 1);

		  if (el.previousElementSibling) {
		  	el.previousElementSibling.classList.add('prev');

	  		manageControls(el, previous, next);
		  }

		  if (el.nextElementSibling) {
		  	el.nextElementSibling.classList.add('next');

	  		manageControls(el, previous, next);
		  }

		  initUpdateReadingScroll(i);
		});
	});

	// Keyboard nav
	document.body.addEventListener("keydown", function(e) {
		let active = document.querySelector('.active');

	  if (e.keyCode == 37) {
	    active.previousElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
	  }
	  else if (e.keyCode == 39) {
	    active.nextElementSibling.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
	  }
	});
}

function initNewsNavigation() {

	const previous 			= document.querySelector(".newsNavigation-previous a"),
				next 					= document.querySelector(".newsNavigation-next a"),
				total					= document.getElementById("newsNavigation-total"),
				sliderLength	= document.querySelectorAll('.newsCarousel-item').length;

	total.innerText = sliderLength;
	previous.classList.add("disabled");

	previous.addEventListener("click", function(e) {
		e.preventDefault();

		let el = document.querySelector('.active').previousElementSibling;

		if (el) {
	  	el.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		}
	});

	next.addEventListener("click", function(e) {
		e.preventDefault();
		
		let el = document.querySelector('.active').nextElementSibling;

		if (el) {
	  	el.dispatchEvent( new MouseEvent("click", {bubbles: false}) );
		}
	});

}