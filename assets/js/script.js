

// TESTIOMONAILS SLIDER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, 
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
   
    991: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2000, // Time between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});

// HOME2 SLIDER
var swiper = new Swiper(".home-tow-slider", {
  slidesPerView: 1, 
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2000, // Time between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});



// PROJECTS DETAILS SLIDER
var swiper = new Swiper(".projects_slider", {
  slidesPerView: 1, 
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2000, // Time between slides in milliseconds
    disableOnInteraction: false, // Continue autoplay after user interactions
  },
});



var animationTriggered = false; // Flag to prevent repeated animations
$(window).on('scroll', function() {

  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  
  // Project Area dynamic height adjustment
  var projectAreaTop = $('.project-area').offset().top;

  // Check if the project area is in view
  if (scrollTop + windowHeight > projectAreaTop) {
      var heightIncrease = (scrollTop + windowHeight - projectAreaTop) * 0.9; // Adjust multiplier for desired effect
      $('.line').css('height', heightIncrease + 'px');
  } else {
      $('.line').css('height', '0px');
  }

  // Testimonial section scroll-triggered animation
  var testimonial_top = $('.testimonial-2').offset().top - 350; // Subtracting 350 from top
  var testimonial_bottom = $('.testimonial-2').offset().top + $('.testimonial-2').outerHeight(); // No need to add height to top
  
  // Check if the testimonial section is in view based on adjusted top and bottom
  if (scrollTop + windowHeight > testimonial_top && scrollTop < testimonial_bottom) {
      var testi_heading = $('.testimonial-2 .theme_heading .main_heading');
      var translateX = "-" + (scrollTop - testimonial_top) - 60 + "px";
      var translateY = "-" + (scrollTop - testimonial_top) / 1 + "px";
        // Heading animation
        testi_heading.css({
          'transform': 'translateX(' + translateX + ')',
          'transition': 'transform 0.1s ease-out'
      });
      // Testimonial card animation
      $('.testimonial-2 .testimonial-card').css({
          'transform': 'translateY(' + translateY + ')',
          'opacity': '1',
       
          'transition': 'transform 0.1s ease-out, opacity 0.1s ease-out',
          
      });

    
  } else {
      // Reset the transform and opacity when out of view
      $('.testimonial-2 .testimonial-card').css({
          'transform': 'translateY(150px)', 
          'opacity': '0', 
          'transition': 'transform 0.3s ease-in, opacity 0.3s ease-in'
      });
  }
  
  // PROJECTS ANIMATIONMS
  const scrollY = $(window).scrollTop();

  // Get the bounding rectangle of the enter_transform element
  const enterTransformElement = $('.enter_transform')[0];
  const rect = enterTransformElement.getBoundingClientRect();

  // Select the element you want to transform
  const element = $('.project-box');

  // Check if the element is within the viewport (entered the scrollable area)
  if (rect.top < window.innerHeight && rect.bottom) {
      const visibleY = Math.max(0, window.innerHeight - rect.top);

      // Calculate scale from 0 to 1
      const scaleValue = Math.min(1, visibleY / 500);

      // Apply the calculated transformations
      element.css({
          'transform': `scale(${scaleValue})`,
          'opacity': scaleValue
      });
  }

// COUNT START
// Calculate the position of the element relative to the viewport
var elementOffset = $('.count_block').offset().top - $(window).height();

// Check if animation should be triggered
if (!animationTriggered && $(window).scrollTop() > elementOffset) {
  $('.counter').each(function () {
    var $this = $(this);
    var targetCount = $this.data('count'); // Retrieve the target value using .data()

    $({ countValue: 0 }).animate(
      { countValue: targetCount },
      {
        duration: 2000, // Animation duration in milliseconds
        easing: 'swing', // Easing function
        step: function () {
          $this.text(Math.floor(this.countValue)); // Update the element text during animation
        },
        complete: function () {
          $this.text(this.countValue); // Set the final value when the animation completes
        },
      }
    );
  });

  animationTriggered = true; // Prevents the animation from running again
}




// HOME-2 JS FILES


});




  

// BRAND SLIDER ANIMATIONS
const $marqueeInner = $('.brand-inner');
const marqueeWidth = $marqueeInner[0].scrollWidth;

// Clone the marquee content to create a seamless loop
$marqueeInner.append($marqueeInner.html());

let currentX = 0;

function animateMarquee() {
  currentX -= 1; // Adjust this value to control the speed

  // Reset when it reaches the end of the original content
  if (Math.abs(currentX) >= marqueeWidth) {
    currentX = 0;
  }

  $marqueeInner.css('transform', `translateX(${currentX}px)`);
  requestAnimationFrame(animateMarquee);
}

animateMarquee();




// AWARD TAB HOME2
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

  
  


