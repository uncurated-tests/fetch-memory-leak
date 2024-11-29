FROM --platform=linux/amd64 node:22.11-alpine AS base
WORKDIR /app
COPY example.cjs ./
CMD ["node", "example.cjs"]