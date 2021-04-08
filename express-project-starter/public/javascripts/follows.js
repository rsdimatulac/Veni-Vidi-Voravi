document.addEventListener("DOMContentLoaded", () => {
    const followButton = document.querySelector(".nav__follow-button");

    followButton.addEventListener("click", async () => {
        const userId = parseInt(followButton.classList[0], 10);
        const followedUserId = parseInt(followButton.classList[1], 10);

        if (followButton.classList.contains("nav__followed")) { // if the user is followed
            followButton.classList.remove("nav__followed");
            followButton.innerHTML = "Follow";
        } else {// if the user is not followed
            followButton.classList.add("nav__followed");
            followButton.innerHTML = "Following";
        }

        // the following should reflect on that followedUser's 
        await fetch(`/users/${followedUserId}/follows`, { method: 'POST' })
        return
        // TODO LATER: figure this out
        // if you your own profile page, and followd yourself
        // console.log("USERSS", userId); // shows your ID 
        // console.log("TO FOLLOWWWWW", followedUserId); // shows NaN
    });
});