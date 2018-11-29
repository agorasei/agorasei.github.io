function newsNavigation() {

  const previous      = document.querySelector(".newsNavigation-previous a"),
        next          = document.querySelector(".newsNavigation-next a"),
        total         = document.getElementById("newsNavigation-total"),
        sliderLength  = document.querySelectorAll('.newsCarousel-item').length;

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

function manageControls (el, previous, next) {

  previous.classList.remove("disabled");
  next.classList.remove("disabled");

  if (!el.previousElementSibling) {
    previous.classList.add("disabled");
  } else {
    previous.classList.remove("disabled");
    el.previousElementSibling.classList.add('prev');
  }

  if (!el.nextElementSibling) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
    el.nextElementSibling.classList.add('next');
  }

}

function changeBackground() {}

// Todas as funções iniciadas com a11y são relacionadas a acessibilidade
function a11yToggleHighContrast() {}

function a11yIncreaseFont() {

}

function enterFullScreen() {}

function exitFullScreen() {

}