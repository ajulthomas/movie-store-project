# syntax=docker/dockerfile:1
FROM postgres:13.4
ENV POSTGRES_PASSWORD admin 
ENV POSTGRES_DB movieDB
COPY init.sql /docker-entrypoint-initdb.d/
COPY load.sql /docker-entrypoint-initdb.d/
EXPOSE 5432