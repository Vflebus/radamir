-- Deploy radamir:functions to pg

BEGIN;

-- campaign new & update

CREATE OR REPLACE FUNCTION new_campaign(VARCHAR(255), TEXT, INT) RETURNS INT AS $$
	INSERT INTO "campaign"("campaign_name", "description", "user_id") 
VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE OR REPLACE FUNCTION update_campaign(VARCHAR(255), TEXT, INT) RETURNS void AS $$
    UPDATE "campaign" SET "campaign_name" = $1, "description" = $2 WHERE id = $3;
$$ LANGUAGE SQL STRICT;

-- user new & update

CREATE OR REPLACE FUNCTION new_user(TEXT, TEXT, TEXT) RETURNS INT AS $$
    INSERT INTO "user"("username", "email", "password")
VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE OR REPLACE FUNCTION update_user(TEXT, TEXT, TEXT, INT) RETURNS void AS $$
    UPDATE "user" SET "username" = COALESCE($1, "username"), "email" = COALESCE($2, "email"), "password" = COALESCE($3, "password") WHERE id = $4;
$$ LANGUAGE SQL;

-- notes new & update
CREATE OR REPLACE FUNCTION new_note(VARCHAR(45), TEXT, BOOLEAN, INT, INT, VARCHAR(255)) RETURNS INT AS $$
	INSERT INTO "note"("title", "content", "is_private", "campaign_id", "user_id", "image_url") 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE OR REPLACE FUNCTION update_note(VARCHAR(45), TEXT, BOOLEAN, INT, VARCHAR(255)) RETURNS void AS $$
    UPDATE "note" SET "title" = COALESCE($1, "title"), "content" = COALESCE($2, "content"), "is_private" = COALESCE($3, "is_private"), "image_url" = COALESCE($5, "image_url") WHERE id = $4;
$$ LANGUAGE SQL;


-- wiki new & update

CREATE OR REPLACE FUNCTION new_wiki(TEXT, VARCHAR(255), TEXT, VARCHAR(255)) RETURNS INT AS $$
	INSERT INTO "wiki"("slug", "title", "type", "full_title")
	VALUES($1, $2, $3, $4) 
	RETURNING id;
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION update_wiki(TEXT, VARCHAR(255), TEXT, INT, VARCHAR(255) ) RETURNS void AS $$
	UPDATE "wiki" SET "slug"=$1, "title"=$2, "type" = COALESCE($3, "type"), "full_title"=$5 WHERE id = $4
$$ LANGUAGE SQL;

-- block

CREATE OR REPLACE FUNCTION new_block(VARCHAR(16), TEXT, INT) RETURNS INT AS $$
    INSERT INTO "block"("title", "content", "wiki_id")
    VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE OR REPLACE FUNCTION update_block(VARCHAR(16), TEXT, INT) RETURNS void AS $$
    UPDATE "block" SET "title" = COALESCE($1, "title"), "content" = COALESCE($2, "content") WHERE id = $3;
$$ LANGUAGE SQL;

COMMIT;
