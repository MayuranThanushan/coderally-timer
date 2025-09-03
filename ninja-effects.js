// Simple ninja-themed effects (minimal and non-disruptive)
window.addEventListener('load', () => {
  createSimpleNinjaStars();
});

// Create just a few simple floating ninja stars
function createSimpleNinjaStars() {
  const container = document.getElementById('tsparticles');
  if (!container) return;

  // Create only 15 simple ninja stars for a subtle effect
  for (let i = 0; i < 15; i++) {
    const star = document.createElement('div');
    star.className = 'simple-ninja-star';
    star.innerHTML = '✦';
    
    // Random positioning and animation delays
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 20 + 's';
    star.style.animationDuration = (Math.random() * 20 + 20) + 's'; // Speed up slightly
    
    container.appendChild(star);
  }
}
