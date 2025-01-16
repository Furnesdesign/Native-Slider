document.addEventListener("DOMContentLoaded", function () {
    // Select all slider wrappers
    const sliders = document.querySelectorAll('[slider-id]');
  
    // Iterate through each slider wrapper
    sliders.forEach((slider) => {
      // Select the collection list within the current slider
      const list = slider.querySelector('[slider-more-thumb="list"]');
  
      // Check if the list exists
      if (!list) {
        console.error("The collection list with slider-more-thumb='list' is missing for slider:", slider);
        return;
      }
  
      // Select all items within the list
      const items = list.querySelectorAll('[slider-more-thumb="item"]');
  
      // Check if there are any items
      if (items.length === 0) {
        console.error("No items found within the collection list for slider:", slider);
        return;
      }
  
      // Iterate over items and modify the last one
      items.forEach((item, index) => {
        const moreDiv = item.querySelector('[slider-more-thumb="more"]');
        const thumbDiv = item.querySelector('[slider-more-thumb="thumb"]');
  
        if (index === items.length - 1) {
          if (moreDiv) moreDiv.style.display = "flex";
          if (thumbDiv) thumbDiv.style.display = "none";
        } else {
          if (moreDiv) moreDiv.style.display = "none";
          if (thumbDiv) thumbDiv.style.display = "flex";
        }
      });
  
      console.log(`Script executed for slider ID: ${slider.getAttribute('slider-id')}`);
    });
  });