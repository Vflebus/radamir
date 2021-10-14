-- Revert radamir:functions from pg

BEGIN;

-- Wiki
DROP FUNCTION IF EXISTS new_wiki;
DROP FUNCTION IF EXISTS update_wiki;

-- Blocks
DROP FUNCTION IF EXISTS new_block;
DROP FUNCTION IF EXISTS update_block;

-- Note
DROP FUNCTION IF EXISTS new_note;
DROP FUNCTION IF EXISTS update_note;

-- Campaign
DROP FUNCTION IF EXISTS new_campaign;
DROP FUNCTION IF EXISTS update_campaign;


-- User

DROP FUNCTION IF EXISTS new_user;
DROP FUNCTION IF EXISTS update_user;

COMMIT;
