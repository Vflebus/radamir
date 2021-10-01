-- Revert radamir:functions from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS new_wiki;

DROP FUNCTION IF EXISTS update_wiki;

-- Blocks
DROP FUNCTION IF EXISTS new_block;

DROP FUNCTION IF EXISTS update_block;

-- Notes
DROP FUNCTION IF EXISTS new_note;

DROP FUNCTION IF EXISTS update_note;

DROP FUNCTION IF EXISTS new_campaign;

DROP FUNCTION IF EXISTS update_campaign;

COMMIT;
