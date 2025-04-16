// Simple confetti effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8'];
    const shapes = ['circle', 'square', 'triangle'];

    // Create 150 confetti pieces
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = color;
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-20px`;
        confetti.style.opacity = Math.random() + 0.5;

        if (shape === 'circle') {
          confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
          confetti.style.width = '0';
          confetti.style.height = '0';
          confetti.style.backgroundColor = 'transparent';
          confetti.style.borderLeft = `${parseInt(confetti.style.width) / 2}px solid transparent`;
          confetti.style.borderRight = `${parseInt(confetti.style.width) / 2}px solid transparent`;
          confetti.style.borderBottom = `${parseInt(confetti.style.width)}px solid ${color}`;
        }

        confettiContainer.appendChild(confetti);

        // Animate the confetti
        const animationDuration = Math.random() * 3 + 2;
        const xMovement = (Math.random() - 0.5) * 15;

        confetti.animate(
          [
            { transform: `translate(0, 0) rotate(0deg)` },
            { transform: `translate(${xMovement}vw, 100vh) rotate(${Math.random() * 360}deg)` }
          ],
          {
            duration: animationDuration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
          }
        );

        // Remove the confetti element after animation
        setTimeout(() => {
          confetti.remove();
        }, animationDuration * 1000);
      }, Math.random() * 1500);
    }
  }
