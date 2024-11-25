document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!');
    
    const buttons = document.querySelectorAll('.category-btn');
    const categories = document.querySelectorAll('.category');

    // Log elements to verify they're being found
    console.log('Buttons found:', buttons.length);
    console.log('Categories found:', categories.length);

    // Initially show all categories
    categories.forEach(category => {
        category.style.display = 'block';
        category.classList.add('active');
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked:', button.getAttribute('data-category'));
            
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            // Show/hide categories based on selection
            categories.forEach(category => {
                if (selectedCategory === 'all') {
                    category.style.display = 'block';
                    category.classList.add('active');
                    // Add fade-in animation
                    category.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    if (category.getAttribute('data-category') === selectedCategory) {
                        category.style.display = 'block';
                        category.classList.add('active');
                        // Add fade-in animation
                        category.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        category.style.display = 'none';
                        category.classList.remove('active');
                    }
                }
            });
        });
    });
}); 