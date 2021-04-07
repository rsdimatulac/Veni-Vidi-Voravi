document.addEventListener("DOMContentLoaded", () => {
    
    const clapButton = document.getElementById('clap-button')
    clapButton.addEventListener('click', async () => {
        const storyId = parseInt(clapButton.classList[0], 10);

        const clapImage = document.getElementById('clap-button');
        const clapCount = document.getElementById('clap-count');
        if (clapImage.classList.contains("has-been-clapped")) { // if the classList has-been-clapped
            clapImage.src = '../images/clap.png';
            clapImage.classList.remove('has-been-clapped');
            clapCount.innerHTML--;
        } else { // if it hasn't been clapped
            clapImage.src = '../images/comment.png';
            clapImage.classList.add('has-been-clapped');
            clapCount.innerHTML++;
        }

        await fetch(`/stories/${storyId}/claps`, { method: 'POST' })
        return
    });
});