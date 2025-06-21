// Configuration for auto-project integration
const CONFIG = {
    // Replace with your actual GitHub username
    GITHUB_USERNAME: 'rak96',
    
    // Maximum number of projects to display
    MAX_PROJECTS: 9,
    
    // Keywords to identify web projects (in addition to vercel.json and package.json)
    PROJECT_KEYWORDS: ['app', 'web', 'site', 'dashboard', 'portfolio', 'tool'],
    
    // Technologies to highlight
    TECH_KEYWORDS: {
        'React': ['react', 'jsx'],
        'Vue': ['vue', 'vuejs'],
        'Angular': ['angular'],
        'Next.js': ['next', 'nextjs'],
        'Nuxt.js': ['nuxt', 'nuxtjs'],
        'Svelte': ['svelte'],
        'TypeScript': ['typescript', 'ts'],
        'Node.js': ['node', 'nodejs', 'express'],
        'Python': ['python', 'django', 'flask', 'fastapi'],
        'Tailwind': ['tailwind', 'tailwindcss'],
        'Bootstrap': ['bootstrap'],
        'MongoDB': ['mongodb', 'mongo'],
        'PostgreSQL': ['postgresql', 'postgres'],
        'Firebase': ['firebase'],
        'Vercel': ['vercel'],
        'Netlify': ['netlify'],
        'Docker': ['docker'],
        'GraphQL': ['graphql'],
        'REST': ['rest', 'api'],
        'WebSocket': ['websocket', 'socket.io'],
        'AI/ML': ['ai', 'ml', 'machine learning', 'llm', 'openai', 'tensorflow', 'pytorch'],
        'Streamlit': ['streamlit'],
        'FastAPI': ['fastapi']
    }
};

// Make config available globally
window.PROJECTS_CONFIG = CONFIG; 