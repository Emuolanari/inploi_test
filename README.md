## Getting Started

First, install the project dependencies:

```bash
npm install
# or
yarn install
```

You would need the environment variables (which I believe you have access to because I was sent that), 
I know it's not that 'secret' but just following good practice, create a '.env.local' file in the root directory
and save them with the same names used in the project e.g ALGOLIA_API_KEY for the api key

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:6006](http://localhost:6006) with your browser to view storybook.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To view live version, visit https://inploi-test.vercel.app/
