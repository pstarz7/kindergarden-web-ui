



document.getElementById("start-btn").addEventListener("click", function() {
    let alphabetDivs = document.querySelectorAll(".Alphabet");
    let delay = 0;

    alphabetDivs.forEach((div, index) => {
        setTimeout(() => {
           
            div.classList.add("glow");
            div.style.transform = "scale(1.2)";

            let letter = div.textContent.trim();
            let audio = new Audio(`audio/${letter.toLowerCase()}.mp3`);
            audio.play();


            setTimeout(() => {
                div.classList.remove("glow");
                div.style.transform = "scale(1)";
            }, 2000);
        }, delay);

        delay += 2500; 
    });
});
