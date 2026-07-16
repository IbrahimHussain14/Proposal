// ---------- Floating Hearts ----------

for (let i = 0; i < 35; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.4 ? "💖" : "🌸";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (7 + Math.random() * 7) + "s";

    heart.style.animationDelay = (-Math.random() * 10) + "s";

    heart.style.fontSize = (18 + Math.random() * 16) + "px";

    document.body.appendChild(heart);

}

// ---------- No Button ----------

const no = document.getElementById("no");

let rightSide = true;

const funnyTexts = [
    "No 🙈",
    "Nice try 😜",
    "Catch me 😂",
    "Almost 😆",
    "Think again 🤭"
];

let textIndex = 0;

function runAway() {

    if (rightSide) {

        no.style.right = "";
        no.style.left = "0";

    } else {

        no.style.left = "";
        no.style.right = "0";

    }

    rightSide = !rightSide;

    textIndex = (textIndex + 1) % funnyTexts.length;
    no.innerHTML = funnyTexts[textIndex];
}

// Desktop
no.addEventListener("mouseenter", runAway);

// Mobile
no.addEventListener("touchstart", function (e) {

    e.preventDefault();

    runAway();

}, { passive: false });

// If somehow tapped
no.addEventListener("click", function (e) {

    e.preventDefault();

    runAway();

});
