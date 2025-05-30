<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://new-tube-mu.vercel.app">
    <img src="public/logo.svg" alt="Logo" width="100" height="100" />
  </a>

  <h3 align="center">New Tube</h3>

  <p align="center">
    A Modern YouTube-Style App Built with Next.js 15, React 19 & a Bit of Fun
    <br />
    <a href="https://new-tube-mu.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/Antonov-S/youtube-clone-next15/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Antonov-S/youtube-clone-next15/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#why-we-use-trpc">Why We Use tRPC</a></li>
<li><a href="#built-for-fun-not-production">Built for Fun, Not Production</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#sneak-peek">Sneak Peek</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a fully functional YouTube clone designed to replicate the core features users expect—packed into a clean, responsive interface.

Here’s what it delivers:

- Includes a custom video player with volume control, quality switching, and support for captions.

- Enables user interactions such as liking videos, subscribing to channels, and engaging in threaded comment discussions.

- Features a Creator Studio dashboard where users can upload and manage videos, monitor real-time processing status, and generate thumbnails manually, via AI, or by restoring previous versions.

- Allows AI-powered generation of optimized titles and descriptions based on video transcripts.

- Supports home, trending, and subscription feeds, as well as individual user profiles with channel-specific content.

- Offers complete playlist functionality: create, edit, delete, and organize videos into collections. Users can also access automatically maintained playlists like watch history and liked videos.

- Designed to be fully responsive, ensuring seamless use across desktop and mobile devices for watching, uploading, and organizing content.

### Why We Use tRPC

tRPC was chosen for this project because it offers end-to-end type safety and tight integration with React Query, automatically generating hooks like useQuery and useMutation for each procedure. Unlike Hono RPC, tRPC v11 enables authenticated prefetching directly in server components, solving the issue of lost headers and allowing faster, secure data fetching with full access to user context.

This makes it ideal for implementing the "render as you fetch" pattern, improving load times and enabling seamless use of React Server Components as data loaders.

### Built for Fun, Not Production

This project was built as a modern hobby experiment — showcasing Next.js 15, React 19, the “render as you fetch” pattern, tRPC, and integrations like Mux, Clerk, and OpenAI — but it's not intended for production use. There are several practical limitations worth noting:

- Large video uploads are intentionally limited due to the high cost of video storage.

- AI-powered features like subtitle and title generation currently rely on English audio only.

- Playlists are available to logged-in users, with no public browsing.

- Comment threads support a single level of replies — replies to replies aren’t threaded further.

- Search and video categories are functional, but basic.

- And of course, some things are simplified or missing altogether by design.

Think of this project as a sandbox: fun to explore, educational to build, but not quite ready to host your next viral video platform.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

[![Bun][Bun-badge]][Bun-url]
[![TypeScript][TypeScript-badge]][TypeScript-url]
[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![tRPC][tRPC-badge]][tRPC-url]
[![Tailwind CSS][TailwindCSS-badge]][TailwindCSS-url]
[![Drizzle ORM][Drizzle-badge]][Drizzle-url]
[![Neon (Serverless PostgreSQL)][Neon-badge]][Neon-url]
[![Zod][Zod-badge]][Zod-url]
[![Upstash][Upstash-badge]][Upstash-url]
[![Mux][Mux-badge]][Mux-url]
[![Sonner][Sonner-badge]][Sonner-url]
[<img src="public/UploadThing-Logo.svg" alt="UploadThing Logo" height="32" />](https://uploadthing.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

```NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
CLERK_SIGNING_SECRET=
NEXT_PUBLIC_APP_URL_WEBHOOK=
NEXT_PUBLIC_APP_URL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
MUX_WEBHOOK_SECRET=
UPLOADTHING_TOKEN=
QSTASH_TOKEN=
UPSTASH_WORKFLOW_URL=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=
OPENAI_API_KEY=
DATABASE_URL=
```

### Installation

1. Adding .env.local file with all required environment variables

2. Clone the repo
   ```sh
   git clone https://github.com/Antonov-S/youtube-clone-next15
   ```
3. Install the packages

   ```sh
   bun install
   ```

   ⚠️ Note: Some package managers may throw warnings or errors related to peer dependencies, especially with the recent release of React 19. This can prevent installation unless you pass the --legacy-peer-deps flag.

   To avoid these issues, this project uses Bun as the package manager, which handles peer dependencies more gracefully.

4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Sneak Peek

### Homepage

![Homepage - Desktop](/public/home.png)
![Homepage - Mobile](/public/home-mobile.png)

### Creator Studio

![Studio Dashboard](/public/studio.png)
![Studio Video Editor](/public/studio-video.png)

### User Features

![User Profile](/public/profile.png)
![Subscriptions](/public/subscriptions.png)
![History](/public/history.png)
![Comments Section](/public/comments.png)

### Navigation

![Application Navigation](/public/new_tube_next_nav.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Basic layout
- [x] Authentication
- [x] Database setup
- [x] Webhook sync
- [x] TRPC setup
- [x] Video categories
- [x] Studio layout
- [x] Studio videos
- [x] Infinite loading
- [x] Mux integration and webhooks
- [x] Video form
- [x] Video thumbnails
- [x] AI background jobs
- [x] AI thumbnails
- [x] Video page
- [x] Video views
- [x] Video reactions
- [x] Subscriptions
- [x] Comments
- [x] Comments infinite loading
- [x] Comment reactions
- [x] Comment replies
- [x] Suggestions
- [x] Search page
- [x] Home feed
- [x] Playlists
- [x] Custom playlists
- [x] Populating playlists
- [x] Individual playlist
- [x] User page
- [x] Banner upload
- [x] Subscriptions list
- [x] Final improvements

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**. If you have a suggestion that would make this better, please fork the repo and create a pull request. If you like the project, please give it a ⭐

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

This project is **not licensed**. All rights are reserved by the author.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

S. Antonov - anto1nov1@gmail.com

Project Link: [https://new-tube-mu.vercel.app](https://new-tube-mu.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

🚀 Super generous free tiers:

- [Clerk](https://clerk.com)
- [Neon](https://neon.tech)
- [UploadThing](https://uploadthing.com)
- [Upstash](https://upstash.com)

🤏 …and then we have the “not quite as generous, but still helpful” crew:

- [OpenAI](https://openai.com)
- [Mux](https://mux.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[tRPC-badge]: https://img.shields.io/badge/tRPC-2596be?style=for-the-badge&logo=trpc&logoColor=white
[tRPC-url]: https://trpc.io/
[TailwindCSS-badge]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Bun-badge]: https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white
[Bun-url]: https://bun.sh/
[Drizzle-badge]: https://img.shields.io/badge/Drizzle%20ORM-0A0A0A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMwMDBGRkYiLz48L3N2Zz4=
[Drizzle-url]: https://orm.drizzle.team/
[Neon-badge]: https://img.shields.io/badge/Neon%20Database-1E90FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMxRUkwRkYiLz48L3N2Zz4=
[Neon-url]: https://neon.tech/
[Zod-badge]: https://img.shields.io/badge/Zod-3E66A0?style=for-the-badge&logo=zod&logoColor=white
[Zod-url]: https://zod.dev/
[Upstash-badge]: https://img.shields.io/badge/Upstash-DD2828?style=for-the-badge&logo=redis&logoColor=white
[Upstash-url]: https://upstash.com/
[Mux-badge]: https://img.shields.io/badge/Mux-EF2C4D?style=for-the-badge&logo=mux&logoColor=white
[Mux-url]: https://www.mux.com/
[Sonner-badge]: https://img.shields.io/badge/Sonner-1C1917?style=for-the-badge&logo=sonner&logoColor=white
[Sonner-url]: https://sonner.emilkowal.ski/
