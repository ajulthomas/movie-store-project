INSERT INTO movies (
        movie_name,
        certification,
        imdb_rating,
        release_date,
        poster_path,
        synopsis,
        updated_by,
        last_updated
    )
VALUES (
        'Fight Club',
        'R',
        8.8,
        '1999-10-15',
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        1,
        CURRENT_TIMESTAMP
    )
RETURNING *;