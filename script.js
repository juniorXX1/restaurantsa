function changeView() {
  var signUpBox = document.getElementById("signupbox");
  var signInBox = document.getElementById("signinbox");

  signUpBox.classList.toggle("d-none");
  signInBox.classList.toggle("d-none");
}

var bm;
function forgotPassword() {
  var m = document.getElementById("forgotPasswordModal");
  bm = new bootstrap.Modal(m);
  bm.show();
}

function signIn() {
  window.location = "index.html";
}

/* LOADING */

document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("preloader");
  if (loader) {
    window.addEventListener("load", function () {
      loader.style.display = "none";
    });
  }
});

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = data;
    }
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = data;
    }
  })
  .catch((error) => console.error("Error loading footer:", error));

/* typewrite homepage */
document.addEventListener("DOMContentLoaded", function () {
  const typedtext = document.getElementById("typedtext");
  if (typedtext) {
    const texts = ["Best Food", "Delicious", "Enjoy your treat!"];
    const typingSpeed = 200;
    const erasingSpeed = 100;
    const delayBetweenTexts = 2000;
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        typedtext.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setTimeout(eraseText, delayBetweenTexts);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        typedtext.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, typingSpeed);
      }
    }

    setTimeout(typeWriter, delayBetweenTexts);
  }
});

/* wiggle effect */

document.addEventListener("DOMContentLoaded", function () {
  const wiggleBox = document.querySelector(".form2");
  if (wiggleBox) {
    wiggleBox.classList.add("wiggle");
  }
});

/*start home page background image change*/

document.addEventListener("DOMContentLoaded", function () {
  let backgroundImages = document.querySelectorAll(".background-images img");
  if (backgroundImages.length > 0) {
    let imageIndex = 0;

    function changeBackground() {
      backgroundImages.forEach((img) => img.classList.remove("showContent"));
      imageIndex = (imageIndex + 1) % backgroundImages.length;
      backgroundImages[imageIndex].classList.add("showContent");
    }

    changeBackground();
    setInterval(changeBackground, 10000);
  }
});

/*end home page background image change */

/*cupcake image loading animation on home page */

document.addEventListener("DOMContentLoaded", function () {
  const cupcakeElement = document.querySelector(".cupcake");
  if (cupcakeElement) {
    cupcakeElement.classList.add("animate");
  }
});

/* start home1 */
document.addEventListener("DOMContentLoaded", function () {
  let backgroundImageshomeOne = document.querySelectorAll(
    ".background-images-home-one img"
  );
  if (backgroundImageshomeOne.length > 0) {
    let imageIndexhomeOne = 0;

    function changeBackgroundhomeOne() {
      backgroundImageshomeOne.forEach((img) =>
        img.classList.remove("showContentHomeOne")
      );
      imageIndexhomeOne =
        (imageIndexhomeOne + 1) % backgroundImageshomeOne.length;
      backgroundImageshomeOne[imageIndexhomeOne].classList.add(
        "showContentHomeOne"
      );
    }

    changeBackgroundhomeOne();
    setInterval(changeBackgroundhomeOne, 8000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const autoTextElement = document.querySelector("#autotypedtext");
  if (autoTextElement) {
    const autoTexts = [
      "Welcome to Our Restaurant",
      "Experience the best dining in town",
      "Enjoy your treat!",
    ];
    let index = 0;

    function showAutoText() {
      autoTextElement.style.opacity = 0;
      autoTextElement.style.transform = " translateY(20px)";
      setTimeout(() => {
        autoTextElement.textContent = autoTexts[index];
        index = (index + 1) % autoTexts.length;
        autoTextElement.style.transform = " translateY(0)";
        autoTextElement.style.opacity = 1;
      }, 1000);
      setTimeout(showAutoText, 10000);
    }

    showAutoText();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".logo-images");
  if (logos.length > 0) {
    let currentIndex = 0;

    function showNextLogo() {
      logos[currentIndex].classList.remove("visible");
      currentIndex = (currentIndex + 1) % logos.length;
      setTimeout(() => {
        logos[currentIndex].classList.add("visible");
      }, 100);
    }

    logos[currentIndex].classList.add("visible");
    setInterval(showNextLogo, 2000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let commentbgImgs = document.querySelectorAll(".h3background-container img");
  if (commentbgImgs.length > 0) {
    let comImgIndex = 0;

    function changeCommentBackground() {
      commentbgImgs.forEach((img) => img.classList.remove("showContent3"));
      comImgIndex = (comImgIndex + 1) % commentbgImgs.length;
      commentbgImgs[comImgIndex].classList.add("showContent3");
    }

    changeCommentBackground();
    setInterval(changeCommentBackground, 6000);
  }
});

/* prevent card flip when scrolling */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".chefSection .card");
  if (cards.length > 0) {
    function handleScrollStart() {
      cards.forEach((card) => {
        card.classList.add("no-flip");
      });
    }

    function handleScrollEnd() {
      setTimeout(() => {
        cards.forEach((card) => {
          card.classList.remove("no-flip");
        });
      }, 500);
    }

    document.addEventListener("scroll", () => {
      handleScrollStart();
      handleScrollEnd();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let reservbgImgs = document.querySelectorAll(".h3Revervation-container img");
  if (reservbgImgs.length > 0) {
    let reservIndex = 0;

    function changeReserveBackground() {
      reservbgImgs.forEach((img) => img.classList.remove("showContent4"));
      reservIndex = (reservIndex + 1) % reservbgImgs.length;
      reservbgImgs[reservIndex].classList.add("showContent4");
    }

    changeReserveBackground();
    setInterval(changeReserveBackground, 10000);
  }
});

/*end home 3 */

/* single product view */

// Function to decrease quantity
function decreaseQuantity() {
  let quantityInput = document.getElementById("quantity-input");
  let currentValue = parseInt(quantityInput.value);

  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Function to increase quantity
function increaseQuantity() {
  let quantityInput = document.getElementById("quantity-input");
  let currentValue = parseInt(quantityInput.value);

  quantityInput.value = currentValue + 1;
}

// Function to add product to cart (you can implement your logic here)
function addToCart() {
  let quantityInput = document.getElementById("quantity-input");
  let quantity = parseInt(quantityInput.value);
  console.log(`Adding ${quantity} item(s) to cart.`);
}

function spView() {
  window.location = "singleProductView.html";
}

function checkOut() {
  window.location = "checkOut.html";
}

/*index html smooth scrolling and swiper js */

// Check if Swiper is defined before initializing
if (typeof Swiper !== "undefined") {
  var swiper1 = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 110,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 500, // Delay between slides in milliseconds (2.5 seconds here)
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    speed: 2000, // Slide transition speed in milliseconds (1 second here)
  });

  var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 110,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 500, // Delay between slides in milliseconds (2.5 seconds here)
      disableOnInteraction: false, // Continue autoplay after user interactions
      reverseDirection: true,
    },
    speed: 2000, // Slide transition speed in milliseconds (1 second here)
  });
}

// Check if the current page requires Owl Carousel

if (document.querySelector("#testimonial-slider")) {
  $(document).ready(function () {
    var owl = $("#testimonial-slider");

    owl.owlCarousel({
      items: 1,
      itemsDesktop: [1000, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      singleItem: true,
      smartSpeed: 7000, // Speed of the transition in milliseconds (7 seconds)
      autoPlay: 10000,
      loop: true,
      rewindSpeed: 0,
      stopOnHover: true,
      autoplayTimeout: 90000, // Time between each auto transition in milliseconds (10 seconds)
    });

    // Smooth Scroll Initialization
    ScrollReveal().reveal("#testimonial-slider", {
      duration: 800,
    });
  });
}

/* end owl */

// Check if ScrollReveal is defined before initializing
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal(".home3-logo,.home3aboutText h2   ", {
    delay: 60,
    origin: "top",
    distance: "20px",
    duration: 2500,
  });

  ScrollReveal().reveal(".form3", {
    delay: 60,
    origin: "bottom",
    distance: "20px",
    duration: 2500,
  });

  ScrollReveal().reveal(
    ".menu-main-title,.reviewCarouselText h2,.chefSectionText h2, .reservation-text h2,.video-section h2 ",
    {
      delay: 60,
      origin: "left",
      distance: "20px",
      duration: 3000,
    }
  );

  ScrollReveal().reveal(
    ".menu-title-text,.reviewCarouselText p,.chefSectionText p, .reservation-text p,.video-section p ",
    {
      delay: 60,
      origin: "right",
      distance: "20px",
      duration: 2500,
    }
  );

  ScrollReveal().reveal(".chefSection .card,.social-icons-home3 li,.button ", {
    delay: 60,
    origin: "bottom",
    interval: 200,
    distance: "10px",
    duration: 3000,
  });

  ScrollReveal().reveal(".reservation-form, .home3aboutText p  ", {
    delay: 60,
    origin: "bottom",
    distance: "10px",
    duration: 3500,
  });

  ScrollReveal().reveal(
    ".home3CussReview , #reservation, .video-section, .video-container ",
    {
      delay: 60,
      origin: "bottom",
      distance: "25px",
      duration: 2500,
    }
  );

  ScrollReveal().reveal(".image-container3", {
    delay: 60,
    origin: "left",
    distance: "10px",
    duration: 2500,
  });

  //home4

  ScrollReveal({
    //reset: true,
  });

  ScrollReveal().reveal("#categories .img-border", {
    delay: 60,
    origin: "top",
    distance: "20px",
    duration: 2500,
  });

  ScrollReveal().reveal(
    ".cat-text,.cusfeedtext,.swiper2Text, .content .title03, .priceText  ",
    {
      delay: 60,
      origin: "left",
      distance: "50px",
      duration: 2000,
    }
  );

  ScrollReveal().reveal(".cusfeedtext .title03 ", {
    delay: 60,
    origin: "top",
    distance: "50px",
    duration: 1000,
  });

  ScrollReveal().reveal(".avatar_card", {
    delay: 60,
    origin: "right",
    interval: 100,
    distance: "20px",
    duration: 2000,
  });

  ScrollReveal().reveal(".price_list ", {
    delay: 60,
    origin: "right",
    interval: 200,
    distance: "20px",
    duration: 2500,
  });

  ScrollReveal().reveal(".owl-carousel ", {
    delay: 100,
    origin: "left",

    distance: "10px",
    duration: 3500,
  });

  //cart page

  ScrollReveal().reveal(".cart-page .cart-table", {
    delay: 60,
    origin: "bottom",
    distance: "20px",
    duration: 2500,
  });

  ScrollReveal().reveal(".cart-page .order-summary", {
    delay: 60,
    origin: "top",
    distance: "20px",
    duration: 2500,
  });

  //watchlist
  ScrollReveal().reveal(" .watchlist-card .card ", {
    delay: 60,
    origin: "bottom",
    distance: "25px",
    interval: 200,
    duration: 2500,
  });

  ScrollReveal().reveal(".watchlist-table, .watchlist-main-text ", {
    delay: 60,
    origin: "top",
    distance: "20px",
    duration: 2500,
  });
}

// JavaScript code for countdown timer
const countdownCommingZoon = () => {
  const countDate = new Date("December 31, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const daysElement = document.getElementById("commingZiddays");
  const hoursElement = document.getElementById("commingZidhours");
  const minutesElement = document.getElementById("commingZidminutes");
  const secondsElement = document.getElementById("commingZidseconds");

  if (daysElement) daysElement.innerText = textDay;
  if (hoursElement) hoursElement.innerText = textHour;
  if (minutesElement) minutesElement.innerText = textMinute;
  if (secondsElement) secondsElement.innerText = textSecond;
};

setInterval(countdownCommingZoon, 1000);

// back to top

// Show or hide the "Back to Top" button based on scroll position
// backToTop.js

function initializeBackToTopButton() {
  var backToTopButton = document.getElementById("back-to-top");
  var hideTimeout;

  if (backToTopButton) {
    // Show/hide the back-to-top button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        backToTopButton.style.display = "flex";
        resetHideTimeout();
      } else {
        backToTopButton.style.display = "none";
      }
    });

    // Smooth scroll back to top when the button is clicked
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    function resetHideTimeout() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      hideTimeout = setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 5000); // Adjust the time (3000 ms = 3 seconds) as needed
    }
  }
}

// Initialize the back-to-top button on page load
window.addEventListener("load", initializeBackToTopButton);

//single product view

// singleProductView.js

function initializeSingleProductView() {
  // Check if the required elements exist on the page
  var imageContainerSp = document.getElementById("imageZoomContainer");
  var initialImgSP = document.getElementById("SPproduct_img1");

  if (imageContainerSp && initialImgSP) {
    // Create the main image element for single product view
    var mainImgSP = document.createElement("img");
    mainImgSP.id = "SPmain_img";
    mainImgSP.className = "img-thumbnail mt-1 mb-1";

    // Set the initial image source for single product view
    var initialImgSPSrc = initialImgSP.src;
    mainImgSP.src = initialImgSPSrc;

    // Append the main image to the container for single product view
    imageContainerSp.appendChild(mainImgSP);

    // Add black border to the initial image for single product view
    initialImgSP.style.border = "3px solid black";

    // Define the function to change the main image
    window.changeMainImgSp = function (x) {
      var new_img = document.getElementById("SPproduct_img" + x).src;
      var main_img = document.getElementById("SPmain_img");

      main_img.src = new_img;

      // Remove border from all small images
      var small_images = document.querySelectorAll(".ssmall-img img");
      small_images.forEach(function (img) {
        img.style.border = "";
      });

      // Add border to the clicked image
      var clicked_img = document.getElementById("SPproduct_img" + x);
      clicked_img.style.border = "3px solid black";
    };
  }
}

// Initialize the single product view on page load
window.addEventListener("load", initializeSingleProductView);
