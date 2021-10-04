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

CREATE FUNCTION new_user(VARCHAR(255), VARCHAR(255), VARCHAR(255)) RETURNS INT AS $$
    INSERT INTO "user"("username", "email", "password")
VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_user(VARCHAR(255), VARCHAR(255), VARCHAR(255)) RETURNS void AS $$
    UPDATE "user" SET "username" = $1, "email" = $2, "password" = $3 WHERE id = $4;
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
	INSERT INTO "wiki"("slug", "title", "full_title", "type")
	VALUES($1, $2, $3, $4) 
	RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_wiki(TEXT, VARCHAR(255), TEXT, VARCHAR(255), INT) RETURNS void AS $$
	UPDATE "wiki" SET "slug"=$1, "title"=$2, "full_title"=$3, "type"=$4 WHERE id = $5
$$ LANGUAGE SQL STRICT;

-- block

CREATE  FUNCTION new_block(VARCHAR(255), TEXT, INT) RETURNS INT AS $$
    INSERT INTO "block"("title", "content", "wiki_id")
    VALUES($1, $2, $3) RETURNING id;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_block(TEXT, INT) RETURNS void AS $$
    UPDATE "block" SET "content" = $1 WHERE id = $2;
$$ LANGUAGE SQL STRICT;

COMMIT;
