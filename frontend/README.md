# My Portfolio (Static Version)

This is a modern, static React portfolio. Projects are managed via a JSON file—no backend or database required!

## Features

- Multi-page React app (Home, Projects, About, Contact)
- Projects/achievements are loaded from a static JSON file
- Responsive, accessible, and modern UI
- Easy to add/edit projects
- No backend or upload form needed

## How to Add or Edit Projects

1. Open `public/projects.json`.
2. Add, edit, or remove project objects. Example:

```json
{
  "type": "frontend",
  "title": "My Cool App",
  "description": "A fun React project.",
  "liveLink": "https://mycoolapp.com",
  "github": "https://github.com/yourusername/mycoolapp",
  "date": "2024-06-01",
  "tech": ["React", "CSS"],
  "image": "/images/mycoolapp.png"
}
```

3. Save the file and restart/redeploy your frontend if needed.

## Deployment

- You can deploy this site to Netlify, Vercel, GitHub Pages, or any static host.
- No backend server is required.

## Cleaning Up

- The backend code is no longer needed and can be deleted.
- The upload form has been removed.

---

Enjoy your fast, secure, and easy-to-update portfolio!
