document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded successfully!');
    
    const buttons = document.querySelectorAll('.category-btn');
    const categoryElements = document.querySelectorAll('.category');
    const floatingButton = document.getElementById('categoryButton');
    const floatingContent = document.querySelector('.floating-content');
    const floatingCategoryBtns = document.querySelectorAll('.float-category-btn');
    const mainCategoryBtns = document.querySelectorAll('.category-btn');

    // Log elements to verify they're being found
    console.log('Buttons found:', buttons.length);
    console.log('Categories found:', categoryElements.length);

    // Initially show all categories
    categoryElements.forEach(category => {
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
            categoryElements.forEach(category => {
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

    // Toggle floating menu
    floatingButton.addEventListener('click', () => {
        console.log('Floating button clicked');
        floatingContent.classList.toggle('show');
    });

    // Close floating menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!floatingButton.contains(e.target) && !floatingContent.contains(e.target)) {
            floatingContent.classList.remove('show');
        }
    });

    // Handle floating category button clicks
    floatingCategoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update floating buttons
            floatingCategoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update main category buttons
            mainCategoryBtns.forEach(b => {
                if (b.dataset.category === category) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Show/hide categories
            categoryElements.forEach(cat => {
                if (category === 'all') {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = cat.dataset.category === category ? 'block' : 'none';
                }
            });

            // Scroll to selected category
            if (category !== 'all') {
                const targetCategory = document.querySelector(`.category[data-category="${category}"]`);
                targetCategory.scrollIntoView({ behavior: 'smooth' });
            }

            // Close floating menu
            floatingContent.classList.remove('show');
        });
    });

    // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const menuImages = document.querySelectorAll('.item-image');

    menuImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}); 