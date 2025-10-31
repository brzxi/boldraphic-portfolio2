// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio items data
const portfolioItems = [
    { title: 'تصميم هوية بصرية', image: 'https://via.placeholder.com/400x400/5DADE2/FFFFFF?text=Portfolio+1' },
    { title: 'تصميم سوشيال ميديا', image: 'https://via.placeholder.com/400x400/E8F48C/2C3E50?text=Portfolio+2' },
    { title: 'تصميم شعار', image: 'https://via.placeholder.com/400x400/F39C6B/FFFFFF?text=Portfolio+3' },
    { title: 'تصميم طباعي', image: 'https://via.placeholder.com/400x400/5DADE2/FFFFFF?text=Portfolio+4' },
    { title: 'تصميم إعلاني', image: 'https://via.placeholder.com/400x400/E8F48C/2C3E50?text=Portfolio+5' },
    { title: 'تصميم إبداعي', image: 'https://via.placeholder.com/400x400/F39C6B/FFFFFF?text=Portfolio+6' }
];

// Render portfolio items
function renderPortfolio() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid) return;
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-overlay">
                <div class="portfolio-item-title">${item.title}</div>
            </div>
        `;
        grid.appendChild(portfolioItem);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
});

