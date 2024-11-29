FROM --platform=linux/amd64 oven/bun:alpine
WORKDIR /app
COPY example.cjs ./
CMD ["bun", "run", "example.cjs"]