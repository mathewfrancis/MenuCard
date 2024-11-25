document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-btn');
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const title = category.querySelector('.category-title').textContent.toLowerCase().replace(' ', '-');
        category.id = title;
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            categories.forEach(category => {
                if (selectedCategory === 'all') {
                    category.classList.add('active');
                } else {
                    if (category.id === selectedCategory) {
                        category.classList.add('active');
                    } else {
                        category.classList.remove('active');
                    }
                }
            });
        });
    });

    categories.forEach(category => category.classList.add('active'));
});