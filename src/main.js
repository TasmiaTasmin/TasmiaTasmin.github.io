const BLOG_POSTS = [
  {
    title: "Virtualization and Virtual Machines",
    description: "Why virtualization is necessary",
    date: "Saturday, March 04, 2023",
    author: "Sabbir Ahmed",
    tags: ["VMs", "DevOps", "SRE"],
    image: "/lovable-uploads/61803dee-4bb8-41e1-87b6-0a04fe8562e8.png",
  },
  {
    title: "Markdown Mystery Tour",
    description: "We designed a whodunnit-style game to introduce Markdown formatting. Suspense — suspicion — syntax!",
    date: "Monday, March 02, 2020",
    author: "Mahfuz Alam",
    tags: ["Design", "Branding", "Dev"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
  },
];

function createBlogCard(post) {
  const article = document.createElement('article');
  article.className = 'blog-card';
  
  article.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover" />
    <div class="p-6">
      <div class="flex gap-2 flex-wrap mb-4">
        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <h2 class="blog-title mb-2">${post.title}</h2>
      <p class="text-muted-foreground mb-4">${post.description}</p>
      <div class="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div class="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
          </svg>
          ${post.date}
        </div>
        <div class="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          ${post.author}
        </div>
      </div>
      <a href="#" class="read-more">
        Read More
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  `;
  
  return article;
}

function initializeBlogGrid() {
  const blogGrid = document.getElementById('blog-grid');
  BLOG_POSTS.forEach(post => {
    blogGrid.appendChild(createBlogCard(post));
  });
}

// Initialize the blog grid when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeBlogGrid);
