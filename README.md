```sh
# Build the Dockerfile
docker build -t fetch-example .

# Run with 75MB memory maximum
docker run --platform=linux/amd64 --memory=55m --memory-swap=55m fetch-example

# Check current memory utilization (in another terminal)
docker stats

# After `docker run` crashes, check the exit code (137)
docker ps -a
```