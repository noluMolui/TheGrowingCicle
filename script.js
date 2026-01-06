const colors = ['#FF0000', '#FF7F00', '#FFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // rainbow colors


// Function to apply the gradient to any paragraph
function applyGradientText(id) {
  const textElement = document.getElementById(id);
  const text = textElement.textContent;
  textElement.innerHTML = text
    .split('')
    .map((char, i) => `<span style="color:${colors[i % colors.length]}">${char}</span>`)
    .join('');
}

// Apply to multiple paragraphs
applyGradientText('rainbow-text');
applyGradientText('warm-text');