-- Deploy radamir:functions to pg

BEGIN;

-- campaign new & update

CREATE FUNCTION new_campaign(VARCHAR(255), TEXT, INT) RETURNS INT AS $$
	INSERT INTO "campaign"("campaign_name", "description", "user_id") 
VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_campaign(TEXT, INT) RETURNS void AS $$
    UPDATE "campaign" SET "description" = $1 WHERE id = $2;
$$ LANGUAGE SQL STRICT;

-- user new & update

CREATE FUNCTION new_user(TEXT, TEXT, TEXT) RETURNS INT AS $$
    INSERT INTO "user"("username", "email", "password")
VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_user(TEXT, TEXT, TEXT, INT) RETURNS void AS $$
    UPDATE "user" SET "username" = COALESCE($1, "username"), "email" = COALESCE($2, "email"), "password" = COALESCE($3, "password") WHERE id = $4;
$$ LANGUAGE SQL STRICT;

-- notes new & update
CREATE FUNCTION new_note(TEXT, BOOLEAN, INT, INT) RETURNS INT AS $$
	INSERT INTO "note"("content", "is_private", "campaign_id", "user_id") 
    VALUES($1, $2, $3, $4) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_note(TEXT, INT) RETURNS void AS $$
    UPDATE "note" SET "content" = $1 WHERE id = $2;
$$ LANGUAGE SQL STRICT;


-- wiki new & update

CREATE FUNCTION new_wiki(TEXT, VARCHAR(255), TEXT, VARCHAR(255)) RETURNS INT AS $$
	INSERT INTO "wiki"("slug", "title", "type", "full_title")
	VALUES($1, $2, $3, $4) 
	RETURNING id;
$$ LANGUAGE SQL;

CREATE FUNCTION update_wiki(TEXT, VARCHAR(255), TEXT, INT, VARCHAR(255) ) RETURNS void AS $$
	UPDATE "wiki" SET "slug"=$1, "title"=$2, "type"=$3, "full_title"=$5 WHERE id = $4
$$ LANGUAGE SQL;

-- block

CREATE  FUNCTION new_block(VARCHAR(16), TEXT, INT) RETURNS INT AS $$
    INSERT INTO "block"("title", "content", "wiki_id")
    VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_block(VARCHAR(16), TEXT, INT) RETURNS void AS $$
    UPDATE "block" SET "title" = COALESCE($1, "title"), "content" = COALESCE($2, "content") WHERE id = $3;
$$ LANGUAGE SQL;

COMMIT;
