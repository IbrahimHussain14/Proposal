// ---------- FLOATING HEARTS ----------

for (let i = 0; i < 45; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.35 ? "💖" : "🌸";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (7 + Math.random() * 8) + "s";

    heart.style.animationDelay = (-Math.random() * 15) + "s";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    document.body.appendChild(heart);

}



// ---------- NO BUTTON ----------

const no = document.getElementById("no");

const funny = [

    "No 🙈",

    "Really? 🤨",

    "Think Again 😜",

    "Catch Me 😂",

    "Almost 😆",

    "No Chance 😝"

];

let current = 0;

function runAway() {

    const margin = 25;

    const width = window.innerWidth - no.offsetWidth - margin;

    const height = window.innerHeight - no.offsetHeight - margin;

    const x = Math.random() * width;

    const y = Math.random() * height;

    no.style.left = x + "px";

    no.style.top = y + "px";

    current++;

    if (current >= funny.length) current = 0;

    no.innerHTML = funny[current];

}

// Desktop

no.addEventListener("mouseenter", runAway);

// Android Chrome

no.addEventListener("pointerenter", runAway);

no.addEventListener("pointermove", runAway);

// Mobile

no.addEventListener("touchstart", function (e) {

    e.preventDefault();

    runAway();

}, { passive: false });


// If she somehow catches it

no.addEventListener("click", function () {

    window.location.href = "no.html";

});


// When phone rotates

window.addEventListener("resize", function () {

    runAway();

});
