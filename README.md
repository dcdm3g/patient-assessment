# Patient Assessment

Hi! This app provides your tRPC backend and sample components at `src/app/_components` that uses your API. You can safely move it to `src/components` if you prefer this approach.

Run this app by executing the following commands:

```sh
# install dependencies
npm i

# start database using Docker
docker compose up -d

# set environment variables (read .env.example)
cp .env.example .env

# run database migrations using Prisma
npx prisma migrate dev

# start the NextJS development server
npm run dev
```
