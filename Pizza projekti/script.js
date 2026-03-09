// Add to cart button functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        const pizzaCard = this.closest('.pizza-card');
        const pizzaName = pizzaCard.querySelector('h2').textContent;
        const pizzaPrice = pizzaCard.querySelector('.price').textContent;

        // Show confirmation
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.backgroundColor = '#4CAF50';

        // Reset button after 1.5 seconds
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 1500);

        // Log to console (in a real app, this would add to cart)
        console.log(`Added ${pizzaName} (${pizzaPrice}) to cart`);
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
