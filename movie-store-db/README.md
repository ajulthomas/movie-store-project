# Setup movie database

## Build image

```dockerfile
# syntax=docker/dockerfile:1
FROM postgres:13.4
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB movieDB
COPY init_script.sql /docker-entrypoint-initdb.d/
COPY load_data.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
```

Build movie-db-image from `Dockerfile`:

```sh
$ docker build -t movie-db-image .
// builds docker image using the Dockerfile present in current directory
```

## List images

```sh
$ docker image ls
// lists all locally available docker images
```

## Run Container

Run the container in detached mode:

```sh
$ docker run -d \
> --name movie-db \
> -p 5432:5432 \
> -v movie-db-volume:/var/lib/postgresql/data \
> movie-db-image
```

## List Container

```sh
$ docker ps
// shows currently running containers
```

## Inspect the container

```sh
$ docker inspect movie-db
// shows details about the movie-db container
```

## Stop the container

```sh
$ docker stop movie-db
movie-db
```

[Reference](https://wkrzywiec.medium.com/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50)
