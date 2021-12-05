import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const addComment = document.getElementById("add-comment");
  const removeComment = document.getElementById("remove-comments");

  addComment.addEventListener("click", function () {
    let newComment = document.getElementById("text-area").value;
    let newRating = document.getElementById("rate").value;
    let rating = "Amazing";
    if (newRating === "1") {
      rating = "Bad";
    } else if (newRating === "2") {
      rating = "Average";
    } else if (newRating === "3") {
      rating = "Good";
    } else if (newRating === "4") {
      rating = "Amazing";
    }
    let divElement = document.createElement("div");
    divElement.className = "comment";
    let divChild1 = document.createElement("div");
    divChild1.className = "comment-rating";
    let divChild2 = document.createElement("div");
    divChild2.className = "comment-text";
    let ratingButton = document.createElement("button");
    ratingButton.className = "remove-comment";
    ratingButton.innerHTML = "Delete comment";

    divChild1.appendChild(document.createTextNode(rating));
    divChild2.appendChild(document.createTextNode(newComment));
    divElement.appendChild(divChild1);
    divElement.appendChild(divChild2);
    const ratingsDiv = document.getElementById("all-ratings");
    ratingsDiv.appendChild(divElement);
  });

  removeComment.addEventListener("click", function () {
    const ratingsDiv = document.getElementById("all-ratings");
    ratingsDiv.innerHTML = "";
  });
}
