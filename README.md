# aurorasbloodbank
A Cloudflare Workers NEXT app for managing cat blood donor programs

## Stack
Cloudflare Workers Next app: https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/
Cloudflare D1 DB
Cloudflare Workers KV cache

## Commands
`next dev` - runs the app locally in node.js runtime

According to https://developers.cloudflare.com/workers/frameworks/framework-guides/nextjs/

`npm run build:worker` - builds the app via `next build` then transforms the output to something Cloudflare-friendly
`npm run dev:worker` - runs the output of build:worker locally in the Workers Runtime
`npm run preview:worker` - runs build:worker && dev:worker 
`npm run deploy` - builds and deploys to Cloudflare

