-- Verify radamir:initdb on pg

BEGIN;

SELECT id FROM "user" WHERE false;
SELECT id FROM campaign WHERE false;
SELECT id FROM campaign_has_players WHERE false;
SELECT id FROM note WHERE false;
SELECT id FROM wiki WHERE false;
SELECT id FROM "block" WHERE false;
SELECT id FROM wiki_has_blocks WHERE false;
SELECT id FROM region WHERE false;

ROLLBACK;