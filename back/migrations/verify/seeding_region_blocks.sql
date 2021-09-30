-- Verify radamir:seeding_region_blocks on pg

BEGIN;

SELECT * FROM "block", wiki WHERE false;

ROLLBACK;
