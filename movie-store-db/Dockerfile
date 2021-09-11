# syntax=docker/dockerfile:1
FROM postgres:13.4
ENV POSTGRES_PASSWORD admin 
ENV POSTGRES_DB movieDB
COPY init_script.sql /docker-entrypoint-initdb.d/
COPY load_data.sql /docker-entrypoint-initdb.d/
EXPOSE 5432