# Auto Projects Integration 🚀

This resume website automatically integrates your GitHub repositories that are deployed on Vercel, creating a dynamic projects section that updates whenever you build new apps.

## How It Works

1. **Fetches GitHub Repositories**: Uses GitHub API to get your latest repositories
2. **Filters for Web Apps**: Identifies projects that are likely web applications by checking for:
   - `vercel.json` file (Vercel configuration)
   - `package.json` file (Node.js/web projects)
   - Project descriptions containing web-related keywords
3. **Auto-generates Deployment URLs**: Creates Vercel deployment URLs based on common patterns
4. **Displays Dynamically**: Shows projects in a beautiful terminal-styled grid

## Setup Instructions

### 1. Update Your GitHub Username

Edit the `config.js` file and replace `'rakesh-ramesh'` with your actual GitHub username:

```javascript
const CONFIG = {
    GITHUB_USERNAME: 'your-github-username', // Replace this!
    // ... other settings
};
```

### 2. Customize Project Detection

You can customize which projects get included by modifying the keywords in `config.js`:

```javascript
PROJECT_KEYWORDS: ['app', 'web', 'site', 'dashboard', 'portfolio', 'tool'],
```

### 3. Adjust Technology Detection

The system automatically detects technologies used in your projects. You can customize the detection by editing the `TECH_KEYWORDS` in `config.js`.

## Features

✅ **Automatic Updates**: New projects appear automatically when you visit the site  
✅ **Smart Filtering**: Only shows web applications and Vercel-deployed projects  
✅ **Technology Detection**: Automatically identifies technologies used  
✅ **Live Links**: Direct links to both live deployments and GitHub repositories  
✅ **Repository Stats**: Shows stars, forks, and last update date  
✅ **Responsive Design**: Looks great on all devices  
✅ **Terminal Theme**: Matches your resume's hacker aesthetic  

## Deployment URLs

The system attempts to construct Vercel deployment URLs using these patterns:
- `https://project-name.vercel.app`
- `https://project-name-username.vercel.app`
- `https://project-name-git-main-username.vercel.app`

## Customization Options

### Maximum Projects
```javascript
MAX_PROJECTS: 9, // Show up to 9 projects
```

### Project Keywords
Add keywords that help identify your web projects:
```javascript
PROJECT_KEYWORDS: ['app', 'web', 'site', 'dashboard', 'portfolio', 'tool'],
```

### Technology Keywords
Customize how technologies are detected in project descriptions:
```javascript
TECH_KEYWORDS: {
    'React': ['react', 'jsx'],
    'Next.js': ['next', 'nextjs'],
    // ... add your own
}
```

## Troubleshooting

### Projects Not Showing Up?

1. **Check GitHub Username**: Make sure it's correct in `config.js`
2. **Repository Visibility**: Only public repositories are fetched
3. **Project Keywords**: Add relevant keywords to your project descriptions
4. **Vercel Integration**: Ensure your projects have `vercel.json` or `package.json`

### Wrong Deployment URLs?

The system guesses Vercel URLs based on common patterns. You can:
1. Follow Vercel's default naming conventions
2. Add custom deployment URL detection logic
3. Ensure your repository names match your Vercel project names

## GitHub API Rate Limits

The GitHub API has rate limits:
- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour

For high-traffic sites, consider implementing GitHub authentication or caching.

## Technical Details

- **Framework**: Vanilla JavaScript (ES6+)
- **APIs Used**: GitHub REST API v3
- **Styling**: Custom CSS with terminal theme
- **Responsive**: Mobile-first design
- **Performance**: Lazy loading with staggered animations

## Future Enhancements

Possible improvements you could add:
- GitHub authentication for higher rate limits
- Caching mechanism for better performance
- Integration with Vercel API for accurate deployment URLs
- Project categories and filtering
- Search functionality
- Project screenshots via API

---

**Note**: This integration runs client-side, so your projects update automatically every time someone visits your website! 🎉 