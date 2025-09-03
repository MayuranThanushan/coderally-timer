// Ninja-themed animation system (replacing particles)
window.addEventListener('load', () => {
  createNinjaStars();
  createShadowMovement();
  createFloatingElements();
});

// Create floating ninja stars
function createNinjaStars() {
  const container = document.getElementById('tsparticles');
  
  // Create multiple ninja stars
  for (let i = 0; i < 15; i++) {
    const star = document.createElement('div');
    star.className = 'ninja-star';
    star.innerHTML = '✦'; // Ninja star symbol
    
    // Random positioning
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 10 + 's';
    star.style.animationDuration = (Math.random() * 10 + 15) + 's';
    
    container.appendChild(star);
  }
}

// Create shadow movement effects
function createShadowMovement() {
  const container = document.getElementById('tsparticles');
  
  // Create shadow elements
  for (let i = 0; i < 8; i++) {
    const shadow = document.createElement('div');
    shadow.className = 'ninja-shadow';
    
    // Random positioning and timing
    shadow.style.left = Math.random() * 100 + '%';
    shadow.style.animationDelay = Math.random() * 20 + 's';
    shadow.style.animationDuration = (Math.random() * 15 + 20) + 's';
    
    container.appendChild(shadow);
  }
}

// Create floating Japanese characters
function createFloatingElements() {
  const container = document.getElementById('tsparticles');
  const ninjaChars = ['忍', '者', '影', '刀', '隠', '術'];
  
  // Create floating characters
  for (let i = 0; i < 6; i++) {
    const char = document.createElement('div');
    char.className = 'ninja-char';
    char.innerHTML = ninjaChars[i];
    
    // Random positioning
    char.style.left = Math.random() * 100 + '%';
    char.style.top = Math.random() * 100 + '%';
    char.style.animationDelay = Math.random() * 15 + 's';
    char.style.animationDuration = (Math.random() * 20 + 25) + 's';
    
    container.appendChild(char);
  }
}

// Add mouse interaction for ninja effects
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  // Create temporary ninja trail
  if (Math.random() > 0.95) { // Only sometimes, for stealth
    createNinjaTrail(e.clientX, e.clientY);
  }
});

// Create ninja trail effect on mouse move
function createNinjaTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'ninja-trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
  
  document.body.appendChild(trail);
  
  // Remove after animation
  setTimeout(() => {
    if (trail.parentNode) {
      trail.parentNode.removeChild(trail);
    }
  }, 1000);
}
