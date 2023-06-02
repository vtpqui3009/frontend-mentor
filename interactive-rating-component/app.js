// variables
const selectedRating = document.getElementById("selected-rating");
const ratingItems = document.querySelectorAll(".modal-item");
const submitButton = document.getElementById("submit-button");
const ratingModal = document.getElementById("rating-modal");
const thanksModal = document.getElementById("thanks-modal");

// handle active item
const handleRating = (item) => {
  selectedRating.textContent = item.textContent;
  ratingItems.forEach((item) => item.classList.remove("active"));
  item.classList.add("active");
};

ratingItems.forEach((item) =>
  item.addEventListener("click", () => handleRating(item))
);

// handle submit
const handleSubmit = () => {
  ratingModal.classList.toggle("hide");
  thanksModal.classList.toggle("hide");
};

submitButton.addEventListener("click", handleSubmit);
