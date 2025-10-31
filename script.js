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
  { title: 'هوية بصرية حديثة', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio1.webp' },
  { title: 'تصميم شعار جريء', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio2.webp' },
  { title: 'حملة سوشيال ميديا', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio3.webp' },
  { title: 'تصميم إعلان مطبوع', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio4.webp' },
  { title: 'واجهة تطبيق حديثة', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio5.webp' },
  { title: 'تصميم تعبئة وتغليف', image: 'https://boldraphic-portfolio2.vercel.app/assets/portfolio6.webp' }
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

