const revealBtn = document.querySelector(".revealBtn");

const content = document.querySelector(".revealed-content");

function revealContent() {
    if (!content.classList.contains("hidden-content")) {
        content.setAttribute('class',"hidden-content");
        revealBtn.textContent = 'Show content';
        return
    }
    content.setAttribute('class','revealed-content');
    revealBtn.textContent= 'hide content';
}

revealBtn.addEventListener('click',revealContent)