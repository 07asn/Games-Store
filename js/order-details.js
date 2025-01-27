// Utility Function: Copy keys to clipboard
function copyKey(keys) {
    // Check if the passed `keys` is an array, and join them with a separator (e.g., comma or new line)
    const keyText = Array.isArray(keys) ? keys.join(", ") : keys.trim();

    navigator.clipboard
        .writeText(keyText)
        .then(() => {
            alert("Keys copied to clipboard: " + keyText);
        })
        .catch((error) => {
            console.error("Failed to copy text: ", error);
        });
}

// Rating Logic: Handle Star Rating Selection
const stars = document.querySelectorAll(".rating-stars .star");
let selectedRating = 0;

// When a user clicks on a star, set the rating
stars.forEach((star) => {
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.getAttribute("data-value"));

        // Remove 'selected' class from all stars
        stars.forEach((star) => {
            star.classList.remove("selected");
            star.innerHTML = "☆"; // Reset all stars to empty
        });

        // Add 'selected' class to the clicked star and all stars before it
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("selected");
            stars[i].innerHTML = "★"; // Fill selected stars
        }
    });
});

// Submit Rating: Submit rating and comments to the server
document.getElementById("submitRatingBtn").addEventListener("click", () => {
    const comment = document.getElementById("feedback-comments").value;

    if (selectedRating === 0) {
        alert("Please select a rating.");
        return;
    }

    // Normally, you would send the rating and comment to the server here
    alert(
        `Thank you for your feedback!\nRating: ${selectedRating} stars\nComment: ${comment}`
    );

    // Close the modal
    const modal = bootstrap.Modal.getInstance(
        document.getElementById("ratingModal")
    );
    modal.hide();

    // Optionally, reset the form after submission
    document.getElementById("feedback-comments").value = "";
    stars.forEach((star) => {
        star.classList.remove("selected");
        star.innerHTML = "☆"; // Reset all stars
    });
    selectedRating = 0;
});
