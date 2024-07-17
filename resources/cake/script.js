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

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

/* typewrite homepage */
// Texts to type
const texts = ["Best Food", "Delicious", "Enjoy your treat!"];

// Typing effect settings
const typingSpeed = 200; // Typing speed in milliseconds
const erasingSpeed = 100; // Erasing speed in milliseconds
const delayBetweenTexts = 2000; // Delay between texts in milliseconds

let textIndex = 0;
let charIndex = 0;
// let typing = true;

function typeWriter() {
  const typedtext = document.getElementById("typedtext");
  if (typedtext && charIndex < texts[textIndex].length) {
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

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeWriter, delayBetweenTexts);
});

/* wiggle effect */

document.addEventListener("DOMContentLoaded", function () {
  const wiggleBox = document.querySelector(".form2");
  wiggleBox.classList.add("wiggle");
});

/*start home page background image change */

document.addEventListener("DOMContentLoaded", function () {
let backgroundImages = document.querySelectorAll(".background-images img");
let imageIndex = 0;

function changeBackground() {
  // Hide the current image
  backgroundImages.forEach((img) => img.classList.remove("showContent"));

  // Move to the next image
  imageIndex++;
  if (imageIndex >= backgroundImages.length) {
    imageIndex = 0;
  }

  // Show the next image
  backgroundImages[imageIndex].classList.add("showContent");
}

// Call the function initially
changeBackground();

// Set interval to change image every 3 seconds
setInterval(changeBackground, 10000);

});

/*end home page background image change */

/*cupcake image loading animation on home page */

document.addEventListener("DOMContentLoaded", function () {
  const cupcakeElement = document.querySelector(".cupcake");
  cupcakeElement.classList.add("animate");
});

/* start home1 */
document.addEventListener("DOMContentLoaded", function () {
  let backgroundImageshomeOne = document.querySelectorAll(".background-images-home-one img");
  let imageIndexhomeOne = 0;
  
  function changeBackgroundhomeOne() {
    // Hide the current image
    backgroundImageshomeOne.forEach((img) => img.classList.remove("showContentHomeOne"));
  
    // Move to the next image
    imageIndexhomeOne++;
    if (imageIndexhomeOne >= backgroundImageshomeOne.length) {
      imageIndexhomeOne = 0;
    }
  
    // Show the next image
    backgroundImageshomeOne[imageIndexhomeOne].classList.add("showContentHomeOne");
  }
  
  // Call the function initially
  changeBackgroundhomeOne();
  
  // Set interval to change image every 3 seconds
  setInterval(changeBackgroundhomeOne, 8000);
  
  });

document.addEventListener('DOMContentLoaded', function () {
  const autoTexts = ["Welcome to Our Restaurant", "Experience the best dining in town", "Enjoy your treat!"];
  const autoTextElement = document.querySelector('#autotypedtext');
  let index = 0;

  function showAutoText() {
    // Move current text down and fade out
    autoTextElement.style.opacity = 0;

    autoTextElement.style.transform = ' translateY(20px)';
    

    setTimeout(() => {
      // Update text content
      autoTextElement.textContent = autoTexts[index];
      index = (index + 1) % autoTexts.length;

      // Move new text up and fade in
      autoTextElement.style.transform = ' translateY(0)';
      autoTextElement.style.opacity = 1;
    }, 1000); // Adjust timing to match your desired transition duration

    
    setTimeout(showAutoText, 10000); // Recursive call to cycle through texts
  }

  showAutoText();
});


document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('.logo-images');
  let currentIndex = 0;

  function showNextLogo() {
      // Fade out the current logo
      logos[currentIndex].classList.remove('visible');

      // Move to the next logo
      currentIndex = (currentIndex + 1) % logos.length;

      // Fade in the next logo after a short delay
      setTimeout(() => {
          logos[currentIndex].classList.add('visible');
      }, 100); // Adjust delay as needed for better transition
  }

  // Initial setup: show the first logo, hide the rest
  logos[currentIndex].classList.add('visible');

  // Change logo every 2 seconds
  setInterval(showNextLogo, 2000);
});


let commentbgImgs = document.querySelectorAll(".h3background-container img");
let comImgIndex=0;

function changeCommentBackground(){
  commentbgImgs.forEach((img) => img.classList.remove("showContent3"));

  comImgIndex ++;
  if(comImgIndex >= commentbgImgs.length){
    comImgIndex=0;
  }

  commentbgImgs[comImgIndex].classList.add("showContent3");

}

changeCommentBackground();

setInterval(changeCommentBackground,6000);

/* prevent card flip when scrolling */

// Select all cards
const cards = document.querySelectorAll('.chefSection .card');

// Function to add no-flip class when scrolling starts
function handleScrollStart() {
  cards.forEach(card => {
    card.classList.add('no-flip');
  });
}

// Function to remove no-flip class after a short delay
function handleScrollEnd() {
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.remove('no-flip');
    });
  }, 500); // Adjust delay as needed
}

// Add event listener to document for scroll events
document.addEventListener('scroll', () => {
  handleScrollStart();
  handleScrollEnd();
});


  document.addEventListener('DOMContentLoaded', function () {
    let reservbgImgs = document.querySelectorAll(".h3Revervation-container img");
    let reservIndex = 0;

    function changeReserveBackground() {
      reservbgImgs.forEach((img) => img.classList.remove("showContent4"));
      reservIndex++;
      if (reservIndex >= reservbgImgs.length) {
        reservIndex = 0;
      }
      reservbgImgs[reservIndex].classList.add("showContent4");
    }


    changeReserveBackground();
    setInterval(changeReserveBackground, 10000); // Change image every 10 seconds
  });


/*end home 3 */

/* single product view */

// Function to decrease quantity
function decreaseQuantity() {
  let quantityInput = document.getElementById('quantity-input');
  let currentValue = parseInt(quantityInput.value);

  if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
  }
}

// Function to increase quantity
function increaseQuantity() {
  let quantityInput = document.getElementById('quantity-input');
  let currentValue = parseInt(quantityInput.value);

  quantityInput.value = currentValue + 1;
}

// Function to add product to cart (you can implement your logic here)
function addToCart() {
  let quantityInput = document.getElementById('quantity-input');
  let quantity = parseInt(quantityInput.value);
  console.log(`Adding ${quantity} item(s) to cart.`);
}

function spView(){
  window.location= "singleProductView.html";
}
    
function checkOut(){
  window.location= "checkOut.html";
}


