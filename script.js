// Typing effect

const text = "You make my life beautiful 💕";

let i = 0;

const typing = document.getElementById("typing");

function type() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, 80);

    }

}

type();

// Floating hearts

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);

// Proposal Button

const btn = document.getElementById("proposalBtn");

const result = document.getElementById("result");

btn.addEventListener("click", () => {

    result.innerHTML = "you are my valintine forever ✨💖💫 happy valientines day maa ☺️";

    result.style.fontSize = "28px";

});