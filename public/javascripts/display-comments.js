document.addEventListener("DOMContentLoaded", () => {
    const commentButton = document.getElementById("comment-button");
    const form = document.querySelector(".form");
    const commentContainer = document.querySelector(".comments__container");

    commentButton.addEventListener("click", () => {
        form.classList.toggle("hidden");
        commentContainer.classList.toggle("hidden");
    });
});