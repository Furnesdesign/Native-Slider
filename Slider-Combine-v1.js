document.addEventListener("DOMContentLoaded", function () {
  // Select all slider wrappers
  const sliders = document.querySelectorAll('[slider-id]');

  // Iterate through each slider wrapper
  sliders.forEach((slider) => {
    // Select the two collection lists within the current slider
    const list1 = slider.querySelector('[slider-combine="list-1"]');
    const list2 = slider.querySelector('[slider-combine="list-2"]');

    // Check if both lists are found
    if (!list1 || !list2) {
      console.error("One or both collection lists are missing for slider:", slider);
      return;
    }

    // Gather all items from both lists
    const items1 = Array.from(list1.querySelectorAll('[slider-combine="item"]'));
    const items2 = Array.from(list2.querySelectorAll('[slider-combine="item"]'));

    // Combine the items
    const allItems = [...items1, ...items2];

    // Sort the items by the published date
    allItems.sort((a, b) => {
      const dateA = Date.parse(a.querySelector('[slider-combine="published"]').innerText.trim());
      const dateB = Date.parse(b.querySelector('[slider-combine="published"]').innerText.trim());
      return dateB - dateA; // Newest first
    });

    // Limit to the newest 9 items
    const newestItems = allItems.slice(0, 9);

    // Clear the first list and append sorted items
    list1.innerHTML = "";
    newestItems.forEach((item) => list1.appendChild(item));

    // Hide the second list
    list2.style.display = "none";

    console.log(`Lists combined for slider ID: ${slider.getAttribute('slider-id')}`);
  });
});