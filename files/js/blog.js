// Load and render blog posts
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blog-grid');
    
    if (!blogGrid) return;
    
    // Load blog data
    const script = document.createElement('script');
    script.src = 'js/blog-data.js';
    script.onload = function() {
        renderBlogPosts();
    };
    document.head.appendChild(script);
});

function renderBlogPosts() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid || typeof blogPosts === 'undefined') return;
    
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-card-header">
                <span class="blog-card-tag">${post.tag}</span>
                <h3>${post.title}</h3>
            </div>
            <div class="blog-card-content">
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-meta">
                    <div>${post.date} · ${post.readTime}</div>
                    <a href="blog-posts/${post.slug}.html" class="blog-card-link">Read Article →</a>
                </div>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}
