
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const cards = document.querySelectorAll(".card");
  let currentCardIndex = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values entered by the user
    const bookName = document.querySelector("#book-name").value;
    const author = document.querySelector("#author").value;
    const pageNumber = document.querySelector("#page-number").value;
    const pagesRead = document.querySelector("#pages-read").value;

    // Get the addedText elements for the current card
    const addedTextElements = cards[currentCardIndex].querySelectorAll(".added-text");

    // Update the content of the current card
    addedTextElements[0].textContent = bookName;
    addedTextElements[1].textContent = author;
    addedTextElements[2].textContent = pageNumber;
    addedTextElements[3].textContent = pagesRead;

    // Display the current card and hide the previous one
    cards[currentCardIndex].style.display = "flex";

    // Increment the index for the next card
    currentCardIndex++;

    // Reset the form and check if we've reached the last card
    if (currentCardIndex < cards.length) {
      form.reset();
    } else {
      alert("All Cards Are Filled!");
    }
  });
});

