// Cultural Background Animation for College Festival
// This creates a festive, artistic background with dancing particles and patterns

const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Configuration
const config = {
  particleCount: 80,
  colorPalette: [
    '#FF5252', // Red
    '#FF9D76', // Orange
    '#FFCD56', // Yellow
    '#4BC0C0', // Teal
    '#36A2EB', // Blue
    '#9966FF', // Purple
    '#FF6384'  // Pink
  ],
  baseSize: 5,
  speedFactor: 0.5,
  connectDistance: 150,
  symbols: ['♫', '♪', '✦', '✧', '✩', '✬', '✮', '✭', '✯', '✰', '★', '♡', '❀', '❁', '❂', '❃', '❋', '✿'],
  symbolFrequency: 0.3, // 30% of particles will be symbols
  flowLines: true,
  showSymbols: true,
  running: true // Flag to track animation state
};

// Create particles
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = (Math.random() * config.baseSize) + 2;
    this.speedX = (Math.random() - 0.5) * config.speedFactor;
    this.speedY = (Math.random() - 0.5) * config.speedFactor;
    this.color = config.colorPalette[Math.floor(Math.random() * config.colorPalette.length)];
    this.isSymbol = Math.random() < config.symbolFrequency;
    this.symbol = config.symbols[Math.floor(Math.random() * config.symbols.length)];
    this.opacity = Math.random() * 0.5 + 0.2;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 2;
  }

  update() {
    // Move the particle
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    // Bounce off edges with some buffer
    if (this.x > canvas.width + 10) {
      this.x = canvas.width + 10;
      this.speedX = -this.speedX;
    } else if (this.x < -10) {
      this.x = -10;
      this.speedX = -this.speedX;
    }
    
    if (this.y > canvas.height + 10) {
      this.y = canvas.height + 10;
      this.speedY = -this.speedY;
    } else if (this.y < -10) {
      this.y = -10;
      this.speedY = -this.speedY;
    }

    // Reset particles that somehow still go too far out of bounds
    if (this.x < -100 || this.x > canvas.width + 100 || 
        this.y < -100 || this.y > canvas.height + 100) {
      this.reset();
    }

    // Slowly change size for pulsing effect
    this.size += Math.sin(Date.now() / 1000) * 0.03;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    
    if (this.isSymbol && config.showSymbols) {
      // Draw cultural symbol
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.font = `${this.size * 5}px Arial`;
      ctx.fillStyle = this.color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.symbol, 0, 0);
    } else {
      // Draw circle
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    
    ctx.restore();
  }
}

// Create particles array
const particles = [];
for (let i = 0; i < config.particleCount; i++) {
  particles.push(new Particle());
}

// Connect particles with lines if they're close enough
function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.connectDistance) {
        // Calculate line opacity based on distance
        const opacity = 1 - (distance / config.connectDistance);
        
        ctx.beginPath();
        ctx.strokeStyle = particles[i].color;
        ctx.globalAlpha = opacity * 0.2;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
}

// Create a gradient flowing effect in the background
function drawFlowingGradient() {
  const time = Date.now() * 0.001;
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  
  gradient.addColorStop(0, `hsl(${(time * 10) % 360}, 70%, 20%)`);
  gradient.addColorStop(0.5, `hsl(${((time * 10) + 120) % 360}, 70%, 15%)`);
  gradient.addColorStop(1, `hsl(${((time * 10) + 240) % 360}, 70%, 20%)`);
  
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
}

// Set up request animation frame with fallbacks
const requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function(callback) {
           window.setTimeout(callback, 1000 / 60);
         };
})();

// Animation loop with performance optimization
let lastTime = 0;
const targetFPS = 60;
const frameInterval = 1000 / targetFPS;

function animate(timestamp) {
  // Only run if animation is active
  if (!config.running) {
    requestAnimFrame(animate);
    return;
  }
  
  // Control frame rate for performance
  if (!timestamp) timestamp = 0;
  const elapsed = timestamp - lastTime;
  
  if (elapsed > frameInterval) {
    lastTime = timestamp - (elapsed % frameInterval);
    
    // Clear canvas with a slight fade effect for trails
    ctx.fillStyle = 'rgba(13, 1, 40, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Optional flowing gradient in background
    if (config.flowLines) {
      drawFlowingGradient();
    }
    
    // Update and draw all particles
    for (const particle of particles) {
      particle.update();
      particle.draw();
    }
    
    // Connect nearby particles with lines
    connectParticles();
  }
  
  // Continue animation loop
  requestAnimFrame(animate);
}

// Start animation
animate();

// Add interactive effect - particles follow mouse
let mouse = {
  x: undefined,
  y: undefined,
  radius: 150
};

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  
  // Make a few particles follow the mouse
  for (let i = 0; i < 5; i++) {
    const particle = particles[i];
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < mouse.radius) {
      particle.x += dx * 0.05;
      particle.y += dy * 0.05;
    }
  }
});

// Handle visibility change to keep animation running when tab is not active
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Pause intensive operations when tab is not visible
    config.running = false;
  } else {
    // Resume when tab becomes visible again
    config.running = true;
    
    // Reset lastTime to avoid animation jump
    lastTime = 0;
  }
});

// Reset animation on window focus to prevent freezing
window.addEventListener('focus', function() {
  // Reset particles that might be stuck
  particles.forEach(particle => {
    // 10% chance to reset a particle on focus
    if (Math.random() < 0.1) {
      particle.reset();
    }
  });
  
  // Make sure animation is running
  config.running = true;
});

// Add audio responsiveness - connect to audio context if music is playing
document.addEventListener('click', () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 64;
    
    // Connect to audio element if exists
    const audioElements = document.getElementsByTagName('audio');
    if (audioElements.length > 0) {
      const source = audioContext.createMediaElementSource(audioElements[0]);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      
      // Update animation based on audio
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      
      // Store original animation function for reference
      const updateConfigFromAudio = function() {
        analyser.getByteFrequencyData(dataArray);
        let avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        
        // Adjust particle size and speed based on audio
        config.baseSize = 3 + (avg / 50);
        config.speedFactor = 0.2 + (avg / 100);
      };
      
      // Set interval to regularly check audio data
      setInterval(updateConfigFromAudio, 100);
    }
  } catch (e) {
    console.log('Audio visualization not supported or allowed.');
  }
});

// Add this function to periodically reset some particles to prevent freezing
function performMaintenanceReset() {
  // Every 30 seconds, reset 10% of particles
  setInterval(() => {
    particles.forEach(particle => {
      if (Math.random() < 0.1) {
        particle.reset();
      }
    });
  }, 30000);
}

performMaintenanceReset();

// Add this to make the animation more resilient to browser throttling
let lastAnimationFrameTime = 0;
setInterval(() => {
  const currentTime = Date.now();
  
  // If no animation frames have fired for 5 seconds, force a reset
  if (currentTime - lastAnimationFrameTime > 5000) {
    console.log('Animation appears to be stalled, resetting...');
    
    // Reset all particles
    particles.forEach(particle => particle.reset());
    
    // Update lastAnimationFrameTime to avoid multiple resets
    lastAnimationFrameTime = currentTime;
    
    // Make sure animation is running
    config.running = true;
  }
}, 5000);

// Update lastAnimationFrameTime in the animation loop
const originalAnimate = animate;
function animateWithMonitoring(timestamp) {
  lastAnimationFrameTime = Date.now();
  originalAnimate(timestamp);
}

// Use the monitored version instead
animate = animateWithMonitoring;

// Start animation
animate();