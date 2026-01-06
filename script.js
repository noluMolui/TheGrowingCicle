document.addEventListener("DOMContentLoaded", () => {

  const colors = ['#FF0000', '#FF7F00', '#FFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

  function applyGradientText(id) {
    const textElement = document.getElementById(id);
    if (!textElement) return;

    const text = textElement.textContent;
    textElement.innerHTML = text
      .split('')
      .map((char, i) => `<span style="color:${colors[i % colors.length]}">${char}</span>`)
      .join('');
  }

  applyGradientText('rainbow-text');
  applyGradientText('warm-text');

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

});

