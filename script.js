const no = document.getElementById("no");

const messages = [
  "No 🙈",
  "Really? 🤔",
  "Think again 😜",
  "Are you sure? 🥺",
  "Catch me! 😂"
];

let index = 0;

function moveButton() {
  const padding = 20;

  const maxX = window.innerWidth - no.offsetWidth - padding;
  const maxY = window.innerHeight - no.offsetHeight - padding;

  no.style.position = "fixed";
  no.style.left = Math.random() * maxX + "px";
  no.style.top = Math.random() * maxY + "px";

  index = (index + 1) % messages.length;
  no.textContent = messages[index];
}

if (no) {
  // Desktop
  no.addEventListener("mouseenter", moveButton);

  // Mobile
  no.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      moveButton();
    },
    { passive: false }
  );

  // Extra support for touch devices
  no.addEventListener("pointerenter", moveButton);
  no.addEventListener("pointerdown", function (e) {
    e.preventDefault();
    moveButton();
  });

  // If she somehow manages to click it
  no.addEventListener("click", function () {
    window.location.href = "no.html";
  });
}

// Floating hearts
for (let i = 0; i < 40; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.4 ? "💖" : "🌸";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 7 + Math.random() * 7 + "s";
  heart.style.animationDelay = -Math.random() * 10 + "s";
  heart.style.fontSize = 18 + Math.random() * 18 + "px";
  document.body.appendChild(heart);
}
