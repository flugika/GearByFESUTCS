FROM golang:1.19-alpine3.16 AS builder
RUN apk add build-base
WORKDIR /app
COPY . /app

RUN go build -o main main.go

# Build small size image
FROM alpine:3.16
WORKDIR /app
COPY --from=builder /app/main .

EXPOSE 8080
CMD ["/app/main"]