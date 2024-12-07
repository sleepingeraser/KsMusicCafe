document
  .getElementById("loadMoreReviews")
  .addEventListener("click", function () {
    // Fetch the JSON file
    fetch("overall.json")
      .then((response) => response.json())
      .then((data) => {
        const additionalReviewsContainer =
          document.getElementById("additionalReviews");
        data.forEach((review) => {
          const reviewElement = document.createElement("div");
          reviewElement.classList.add("review");
          reviewElement.innerHTML = `
                  <h4>${review.Reviewer}</h4>
                  <p>"${review.Review}"</p>
                  <div class="stars">${"★".repeat(review.Rating)}</div>
              `;
          additionalReviewsContainer.appendChild(reviewElement);
        });
      })
      .catch((error) => {
        console.error("Error loading reviews:", error);
      });
  });
