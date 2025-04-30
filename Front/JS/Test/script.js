document.addEventListener('DOMContentLoaded', function() {
    // Select all card containers
    const cardContainers = document.querySelectorAll('.card-container');
    
    cardContainers.forEach(container => {
        const card = container.querySelector('.card');
        const shine = container.querySelector('.card-shine');
        
        let is3DActive = false;
        let zoomTimer;
        
        // Set basic transition
        card.style.transition = 'transform 0.4s ease-out, box-shadow 0.4s ease-out';
        
        // When mouse enters the card
        container.addEventListener('mouseenter', function() {
            // Reset any previous transforms
            card.style.transform = '';
            
            // Wait briefly before activating 3D effect
            zoomTimer = setTimeout(() => {
                is3DActive = true;
                card.classList.add('active-3d');
            }, 40);
        });
        
        // When mouse moves over the card
        container.addEventListener('mousemove', function(e) {
            if (!is3DActive) return;
            
            const rect = container.getBoundingClientRect();
            
            // Calculate mouse position (-0.5 to 0.5)
            const x = (e.clientX - rect.left) / rect.width - 0.5;  
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            // Apply 3D effect
            card.style.transform = `
                rotateY(${x * 60}deg) 
                rotateX(${-y * 60}deg) 
                translateX(${x * 25}px) 
                translateY(${y * 25}px) 
                scale(${1.05 + Math.abs(x * 0.05) + Math.abs(y * 0.05)}) 
                translateZ(10px)
            `;
            
            // Shine effect
            shine.style.opacity = 0.95;
            shine.style.backgroundPosition = `${x * 150 + 50}% ${y * 150 + 50}%`;
        });
        
        // When mouse leaves the card
        container.addEventListener('mouseleave', function() {
            clearTimeout(zoomTimer);
            is3DActive = false;
            card.classList.remove('active-3d');
            
            card.style.transition = 'transform 0.6s ease-out, box-shadow 0.1s ease-out';
            card.style.transform = '';
            shine.style.opacity = 0;
        });
    });
});