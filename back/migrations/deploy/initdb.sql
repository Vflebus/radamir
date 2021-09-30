-- Deploy radamir:initdb to pg

BEGIN;

CREATE TABLE "user" (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	username VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	is_admin BOOLEAN NOT NULL
);

CREATE TABLE campaign (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	campaign_name VARCHAR(255) NOT NULL UNIQUE,
	"description" TEXT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW(),
	"user_id" INT NOT NULL REFERENCES "user"(id)
);

CREATE TABLE campaign_has_players (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	campaign_id INT NOT NULL REFERENCES campaign(id),
	"user_id" INT NOT NULL REFERENCES "user"(id)
);

CREATE TABLE note (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	content TEXT NOT NULL,
	is_private BOOLEAN NOT NULL,
	campaign_id INT NOT NULL REFERENCES campaign(id),
	"user_id" INT NOT NULL REFERENCES "user"(id)
);

CREATE TABLE wiki (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	slug TEXT NOT NULL UNIQUE,
	title VARCHAR(255) NOT NULL UNIQUE,
	full_title TEXT,
	"type" VARCHAR(255)  NOT NULL
);

CREATE TABLE "block" (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR(255),
	content TEXT NOT NULL,
	wiki_id INT NOT NULL REFERENCES wiki(id)
);

COMMIT;