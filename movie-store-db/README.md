# Setup movie database



##### Build image

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
```



##### List images

```sh
$ docker image ls
```



##### Run Container

Run the container in detached mode:

```sh
$ docker run -d \
> --name movie-db \
> -p 5432:5432 \
> -v movie-db-volume:/var/lib/postgresql/data \
> movie-db-image
```



##### List Container

```sh
$ docker ps
```



##### Inspect the container

```sh
$ docker inspect movie-db
```



##### Stop the container:

```sh
$ docker stop movie-db
```

