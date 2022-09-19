const containerE1 = document.querySelector(".container");
const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];
 let careerIndx = 0;
 let characterIndex = 0;
 updateText();
 function updateText() {
    characterIndex++;
    containerE1.innerHTML = `<h1> I am ${careers[careerIndx].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndx].slice(0, characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndx].length) {
        careerIndx++;
        characterIndex = 0;
    }
    setTimeout(updateText, 400);
 }
