// --------------------
// Floating Hearts
// --------------------

for (let i = 0; i < 40; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.4 ? "💖" : "🌸";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    heart.style.animationDelay = (-Math.random() * 10) + "s";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

}


// --------------------
// No Button
// --------------------

const no = document.getElementById("no");

const funnyTexts = [
    "No 🙈",
    "Hmm 🤔",
    "Think again 😜",
    "Really? 🥺",
    "Catch me! 😂"
];

let current = 0;

function move() {

    const container = document.querySelector(".buttons");

    const startX = container.clientWidth * 0.55;

    const maxX = container.clientWidth - no.offsetWidth;

    const x = startX + Math.random() * (maxX - startX);

    no.style.position = "absolute";
    no.style.left = x + "px";
    no.style.top = "0px";

    current = (current + 1) % funnyTexts.length;

    no.innerHTML = funnyTexts[current];

}

// Desktop
no.addEventListener("mouseenter", move);

// Mobile
no.addEventListener("touchstart", function (e) {

    e.preventDefault();

    move();

}, { passive: false });

// If someone actually taps it
no.addEventListener("click", function (e) {

    e.preventDefault();

    move();

});
