$(document).ready(function () {

  $(window).on("scroll", function(){
    var _top = $(window).scrollTop();
  
    if (_top > 100) {
      $(".tp_header").addClass("act");
    } else {
      $(".tp_header").removeClass("act");
    }
  }); 
  
  // pricng

  
 
  const constrain = 100;

  $(".hover_img").on("mousemove", function (event) {
    const ex1Layer = $(this).find("img"); // Target the <img>
    if (ex1Layer.length > 0) {
      const x = event.clientX;
      const y = event.clientY;
      applyTransform(ex1Layer, x, y);
    }
  });
  
  $(".hover_img").on("mouseleave", function () {
    const ex1Layer = $(this).find("img");
    if (ex1Layer.length > 0) {
      ex1Layer.css("transform", "none");
    }
  });
  
  function calculateTransform(x, y, el) {
    const box = el[0].getBoundingClientRect(); // Get element's bounding box
    const calcX = -(y - box.y - box.height / 2) / constrain; // Calculate rotateX
    const calcY = (x - box.x - box.width / 2) / constrain;  // Calculate rotateY
    return `perspective(500px) rotateX(${calcX}deg) rotateY(${calcY}deg)`; // Apply perspective along with rotations
  }
  
  function applyTransform(el, x, y) {
    if (el.length > 0) {
      el.css("transform", calculateTransform(x, y, el)); // Apply the calculated transform
    }
  }
  
  
  // rotate animations
    // Select the rotating text element
    const rotatingText = document.querySelector('.theme-btn .animation_btn');
    let angle = 0;
    
    // Function to rotate the text using JavaScript
    const rotateText = () => {
      angle += 1; // Increase the angle (adjust value for speed)
      rotatingText.style.transform = `rotateZ(${angle}deg)`;
    };
    
    // Call the function every 16ms (approximately 60 frames per second)
    setInterval(rotateText, 16);
  // blog

  $('.blog_sec').mouseover(function(){
    $('.blog_sec').removeClass('active')
    $(this).addClass('active')
  })

    //sticky menu
    function toggleSubMenu() {
      if ($(window).width() <= 992) {
        // On click, toggle the 'act' class on the submenu
        $(".main-menu .fa-caret-down").on("click", function (e) {
          e.preventDefault();
          $(this).siblings(".sub-menu").toggleClass("act");
        });
      } else {
        // Mouseover and mouseleave for larger screens
        $(".dropdown, .main-menu .fa-caret-down").on("mouseover", function () {
          $(this).find(".sub-menu").addClass("act");
        }).on("mouseleave", function () {
          $(this).find(".sub-menu").removeClass("act");
        });
      }
    }
    
    // Initial call
    toggleSubMenu();
    
    // Re-apply the function on window resize
    $(window).on("resize", function () {
      toggleSubMenu();
    });
    
  

  $(".image-wrapper").addClass('act')

  const menuBar = document.querySelector('.menu_bar');
  const header = document.querySelector('.tp_header');
  const mainMenu = document.querySelector('.main-menu');
  const closeMenuIcon = document.querySelector('.close_menu i');
  
  menuBar.addEventListener('click', () => {
    header.classList.toggle('menu-open'); // Correct: Toggle the menu open/close
  });
  
  closeMenuIcon.addEventListener('click', () => {
    header.classList.remove('menu-open'); // Correct: Remove the 'menu-open' class
  });
  
  // 
  




  // awarrd tab
  // Select all award list items
const awardItems = document.querySelectorAll('.award-list li');

// Get elements to update
const awardYearElement = document.getElementById('year');
const awardDescriptionElement = document.getElementById('award-description');

// Add click event listeners to each award item
awardItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get the data attributes for the year and description
    const selectedYear = item.getAttribute('data-year');
    const selectedDescription = item.getAttribute('data-description');

    // Update the year and description in the left panel
    awardYearElement.textContent = selectedYear;
    awardDescriptionElement.textContent = selectedDescription;

    // Optional: Add an active class for styling
    awardItems.forEach(el => el.classList.remove('active'));
    
    item.classList.add('active');
  });
});






    
  
    


  




//window on scrool 


  
$(".hero_sec").mousemove(function(e) {
  var parentWidth = $(".line_ani").width();
  var childWidth = $(".line_inn").width();
  
  // Calculate the maximum translation value for X
  var maxTranslateX = parentWidth - childWidth;

  // Calculate the translation value for X and Y based on mouse position
  var translateX = e.pageX;
  var translateY = e.pageY;

  // Ensure the translation for X doesn't exceed the boundaries
  if (translateX < 0) translateX = 0;
  if (translateX > maxTranslateX) translateX = maxTranslateX;

  // Apply the translation using transform for both X and Y
  $(".line_ani .line_inn").css({
    "transform": "translateX(" + translateX + "px"});
  
  $(".hero_girl").css({
    "transform": "translate(" + (-translateX / 25) + "px, " + (-translateY / 25) + "px)"
  });
  
  $(".hero_boy").css({
    "transform": "translate(" + (translateX / 25) + "px, " + (translateY / 25) + "px)"
  });
});







// Handle toggle between monthly and yearly pricing
document.getElementById('monthly-btn').addEventListener('click', function () {
  updatePricing('data-month', '/Per Month');
  toggleActiveClass(this, document.getElementById('yearly-btn'));
});

document.getElementById('yearly-btn').addEventListener('click', function () {
  updatePricing('data-year', '/Per Year');
  toggleActiveClass(this, document.getElementById('monthly-btn'));
});

// Function to update all pricing plans dynamically
function updatePricing(attribute, durationText) {
  const prices = document.querySelectorAll('.price');
  prices.forEach((priceElement) => {
      const newPrice = priceElement.getAttribute(attribute);
      priceElement.innerHTML = `${newPrice} <span>${durationText}</span>`;
  });
}

// Function to toggle active class between buttons
function toggleActiveClass(activeBtn, inactiveBtn) {
  activeBtn.classList.add('active');
  inactiveBtn.classList.remove('active');
}


// why choose mousemove

$(".feature-card").mouseover(function(){
  $('.feature-card').removeClass('act')
  $(this).addClass('act')
})



});



document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".service-two-progress-bar");

  progressBars.forEach((bar) => {
    const width = bar.getAttribute("aria-valuenow");
    bar.style.transition = "width 1.5s ease-in-out, opacity 1.5s ease-in-out";
    bar.style.opacity = "1";  // Ensure visibility during animation.
    bar.style.width = `${width}%`;
  });
});


$(window).on('mousemove', function(e) {
  var w = $(window).width();
  var h = $(window).height();
  var offsetX = 0.5 - e.pageX / w;
  var offsetY = 0.5 - e.pageY / h;

  $(".parallax").each(function(i, el) {
      var offset = parseInt($(el).data('offset'));
      var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

      $(el).css({
          '-webkit-transform': translate,
          'transform': translate,
          'moz-transform': translate
      });
  });
});


