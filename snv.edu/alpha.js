



document.getElementById("start-btn").addEventListener("click", function() {
    let alphabetDivs = document.querySelectorAll(".Alphabet");
    let delay = 0;

    alphabetDivs.forEach((div, index) => {
        setTimeout(() => {
            // Add the glow effect and scale up
            div.classList.add("glow");
            div.style.transform = "scale(1.2)";

            // Play the corresponding audio
            let letter = div.textContent.trim();
            let audio = new Audio(`audio/${letter.toLowerCase()}.mp3`);
            audio.play();

            // Remove the glow and scale down after 2 seconds
            setTimeout(() => {
                div.classList.remove("glow");
                div.style.transform = "scale(1)";
            }, 2000);
        }, delay);

        delay += 2500; // Increase the delay by 2.5 seconds for each alphabet
    });
});