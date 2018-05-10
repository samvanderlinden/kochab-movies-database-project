-- CREATE 'MOVIES' TABLE
CREATE TABLE movies (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
	"release_date" DATE, 
	"run_time" VARCHAR (15),
	"image_url" VARCHAR (150),
	"genre_id" INT
);

-- INSERT INITIAL DATA INTO 'MOVIES' TABLE
INSERT INTO "movies" ("name", "release_date", "run_time", "image_url", "genre_id")
VALUES ('batman', '2010-01-01', '02:30', 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg', 2),
('superman', '2010-06-01', '01:30', 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg', 1),
('avengers', '2010-01-01', '02:45', 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg', 3);

-- CREATE 'GENRE' TABLE
CREATE TABLE genre (
    "id" SERIAL PRIMARY KEY,
    "genre_name" VARCHAR (80) NOT NULL
);

-- INSERT INITIAL DATA INTO 'GENRE' TABLE
INSERT INTO "genre" ("genre_name")
VALUES ('horror'),
('action'),
('comedy');
