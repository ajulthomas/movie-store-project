CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    passwd VARCHAR(20) NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL
);
CREATE TABLE access_roles (
    role_id SERIAL PRIMARY KEY,
    access_role VARCHAR(20) NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL
);
CREATE TABLE customer_role_relations (
    cust_role_rel_id SERIAL PRIMARY KEY NOT NULL,
    role_id INT NOT NULL,
    customer_id INT NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES access_roles(role_id) ON DELETE CASCADE
);
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(30) NOT NULL,
    certification VARCHAR(10),
    imdb_rating NUMERIC(3, 1),
    release_date DATE NOT NULL,
    poster_path VARCHAR,
    synopsis TEXT,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL
);
CREATE TABLE tv_shows (
    tv_show_id SERIAL PRIMARY KEY,
    tv_show_name VARCHAR(30) NOT NULL,
    certification VARCHAR(10),
    imdb_rating NUMERIC(3, 1),
    release_date DATE NOT NULL,
    poster_path VARCHAR,
    synopsis TEXT,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL
);
CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(20) NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL
);
CREATE TABLE movie_genre_relations (
    movie_genre_id SERIAL PRIMARY KEY,
    movie_id INT NOT NULL,
    genre_id INT NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL,
    CONSTRAINT fk_movie FOREIGN KEY(movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
    CONSTRAINT fk_genre FOREIGN KEY(genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
);
CREATE TABLE tv_show_genre_relations (
    tv_show_genre_id SERIAL PRIMARY KEY,
    tv_show_id INT NOT NULL,
    genre_id INT NOT NULL,
    updated_by INT NOT NULL,
    last_updated TIMESTAMP NOT NULL,
    CONSTRAINT fk_tv_shows FOREIGN KEY(tv_show_id) REFERENCES tv_shows(tv_show_id) ON DELETE CASCADE,
    CONSTRAINT fk_genre FOREIGN KEY(genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
);