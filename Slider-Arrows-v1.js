document.addEventListener("DOMContentLoaded", function () {
    // Select all slider wrappers
    const sliders = document.querySelectorAll('[slider-id]');
  
    // Iterate through each slider wrapper
    sliders.forEach((slider) => {
      // Select elements within the current slider
      const list = slider.querySelector('[slider-arrows="list"]');
      const items = slider.querySelectorAll('[slider-arrows="item"]');
      const arrowLeft = slider.querySelector('[slider-arrows="left"]');
      const arrowRight = slider.querySelector('[slider-arrows="right"]');
  
      // Check if required elements exist
      if (!list || items.length === 0 || !arrowLeft || !arrowRight) {
        console.error("One or more required elements are missing for slider:", slider);
        return;
      }
  
      // Initialize variables
      let scrollPosition = 0;
      const itemWidth = items[0].offsetWidth;
      const listWidth = list.scrollWidth;
      const visibleWidth = list.offsetWidth;
  
      // Apply initial styles
      list.style.scrollBehavior = "smooth";
      arrowLeft.style.opacity = "0";
  
      // Function to update arrow visibility
      function updateArrows() {
        if (scrollPosition <= 0) {
          arrowLeft.style.opacity = "0";
        } else {
          arrowLeft.style.opacity = "1";
        }
  
        if (scrollPosition >= listWidth - visibleWidth) {
          arrowRight.style.opacity = "0";
        } else {
          arrowRight.style.opacity = "1";
        }
      }
  
      // Event listener for arrow-right
      arrowRight.addEventListener("click", function () {
        const maxScroll = listWidth - visibleWidth;
        scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
        list.scrollTo({ left: scrollPosition, behavior: "smooth" });
        updateArrows();
      });
  
      // Event listener for arrow-left
      arrowLeft.addEventListener("click", function () {
        scrollPosition = Math.max(scrollPosition - itemWidth, 0);
        list.scrollTo({ left: scrollPosition, behavior: "smooth" });
        updateArrows();
      });
  
      // Ensure arrows are updated on resize
      window.addEventListener("resize", function () {
        scrollPosition = list.scrollLeft; // Update scroll position
        updateArrows();
      });
  
      // Initial arrow update
      updateArrows();
  
      console.log(`Flex slider initialized for slider ID: ${slider.getAttribute('slider-id')}`);
    });
  });
  