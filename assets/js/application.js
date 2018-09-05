//= require materialize

document.addEventListener("DOMContentLoaded", function(e) {

	function initSlider() {
		const sliderItems		= document.getElementsByClassName('.newsCarousel-item');
		
		var		sliderLength 	= sliderItems.length,
					even 					= sliderLength / 2,
					odd 					= (sliderLength + 1) / 2;

		

		sliderItems.forEach(function() {
			this.addEventListener("click", function() {
				const sliderContainer = document.querySelector('.newsCarousel');
			  //let slide = document.querySelector('.newsCarousel-item.active').width();
			  //console.log(('.active').position().left);
			  
			  if (this.className.indexOf('next') > -1) {
			    sliderContainer.style.left = '-100vw';
			  } else if (this.className.indexOf('prev') > -1) {
			    sliderContainer.style.left = '100vw';
			  }
			  
			  this.classList.remove('prev next');
			  this.parentNode.children.forEach(function() {
			  	this.classList.remove('prev active next');
			  });
			  
			  this.classList.add('active');
			  this.previousSibling.classList.add('prev');
			  this.nextSibling.classList.add('next');
			});
		});


		// Keyboard nav
		('html body').addEventListener("keydown", function(e) {
		  if (e.keyCode == 37) { // left
		    document.querySelector('.active').previousSibling.dispatchEvent( new MouseEvent("click", {bubbles: true}) );
		  }
		  else if (e.keyCode == 39) { // right
		    document.querySelector('.active').nextSibling.dispatchEvent( new MouseEvent("click", {bubbles: true}) );
		  }
		});
	}

	initSlider();

});