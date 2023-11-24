# Pocketbase serve astro
FROM golang:1.21.4

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./

# Build
RUN CGO_ENABLED=0 GOOS=linux ASTRO_HOST=astro go build -o /docker-gradegrid

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 8080

# Run
CMD ["/docker-gradegrid", "serve", "--http=0.0.0.0:8080"]