document.addEventListener("DOMContentLoaded", () => {
  const clapButton = document.getElementById("clap-button");
  clapButton.addEventListener("click", async () => {
    const storyId = parseInt(clapButton.classList[0], 10);

    const clapImage = document.getElementById("clap-button");
    const clapCount = document.getElementById("clap-count");

    const res = await fetch(`/stories/${storyId}/claps`, { method: "POST" });

    if (res.ok) {
      if (clapImage.classList.contains("has-been-clapped")) {
        // if the classList has-been-clapped
        clapImage.src = "../images/unclapped.png"; // turns black when it's unclapped
        clapImage.classList.remove("has-been-clapped");
        clapCount.innerHTML--;
      } else {
        // if it hasn't been clapped
        clapImage.src = "../images/clapped.png";
        clapImage.classList.add("has-been-clapped");
        clapCount.innerHTML++;
      }
    }

    return;
  });
});
