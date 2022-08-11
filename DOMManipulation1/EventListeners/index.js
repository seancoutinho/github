// add event to Card 2's Enter button

//create a variale for the button

const button2 = document.querySelector(".btn-2");

function alertBtn() {
    alert("You've clicked the second button");
}

button2.addEventListener("click", alertBtn);

const card3 = document.querySelector("#card-3");

function changeBgColor() {
    card3.style.backgroundColor = "blue";
}

card3.addEventListener("mouseover", changeBgColor);

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
    if (hiddenContent.classList.contains("reveal-btn")) {
        hiddenContent.classList.remove("reveal-btn");
    } else {
        hiddenContent.classList.add("reveal-btn");
    }
}

revealBtn.addEventListener("click", revealContent);