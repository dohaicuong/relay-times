# Relay Playing Time

## Getting Started

### Start DB and backend
```
  Start db
    docker compose up -d

  Install backend deps
    cd backend
    pnpm i

  Migrate db
    cp .env.example .env
    npx prisma migrate dev

  Start backend
    pnpm dev
```

### Play with relay
- `vilay` - try out vilay https://github.com/XiNiHa/vilay
- `relay-entrypoint` - try relay entrypoint for `render-as-you-fetch` pattern https://relay.dev/docs/api-reference/use-entrypoint-loader/

```
install deps: pnpm i
fetch schema: pnpm schema
compile new query: pnpm relay
start: pnpm dev
```