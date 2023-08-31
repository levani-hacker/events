const outputElement = document.getElementById('output');

document.addEventListener('keydown', (event) => {
  if (event.key.length === 1 && /^[a-zA-Z]$/.test(event.key)) {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = event.key;
    letterSpan.classList.add('letter');
    
    outputElement.appendChild(letterSpan);
  }
});