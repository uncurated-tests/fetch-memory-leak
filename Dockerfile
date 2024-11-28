FROM --platform=linux/amd64 node:22.11-alpine AS base
WORKDIR /app
COPY package.json pnpm-lock.yaml example.cjs ./
RUN corepack enable pnpm
RUN pnpm install
CMD ["node", "example.cjs"]