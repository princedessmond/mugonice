# MugoNice

Public website for [mugonice.com](https://mugonice.com), an AI, creative, and
growth company helping ambitious businesses with:

- AI automation and intelligent agents
- Web design and development
- Performance marketing
- Brand strategy and creative systems

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Deploying to Netlify

Connect this GitHub repository to Netlify. Netlify detects the Next.js
application automatically; use the following settings if prompted:

- Build command: `npm run build`
- Publish directory: `.next`
- Production branch: `main`

After the first deployment, add `mugonice.com` as the custom domain in
Netlify and follow the provided DNS instructions.
