document.addEventListener("DOMContentLoaded", () => {
  const followButtons = document.querySelectorAll(".nav__follow-button");

  if (followButtons) {
    followButtons.forEach((followButton) => {
      followButton.addEventListener("click", async (e) => {
        const userId = parseInt(e.target.classList[0], 10);
        const followedUserId = parseInt(e.target.classList[1], 10);

        const res = await fetch(`/users/${followedUserId}/follows`, {
          method: "POST",
        });

        if (res.ok) {
          if (e.target.classList.contains("nav__followed")) {
            // if the user is followed
            e.target.classList.remove("nav__followed");
            e.target.innerHTML = "Follow";
          } else {
            // if the user is not followed
            e.target.classList.add("nav__followed");
            e.target.innerHTML = "Following";
          }
        }

        // the following should reflect on that followedUser's
        return;
      });
    });
  }
});
