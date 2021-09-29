-- Revert radamir:seeding_region_blocks from pg

BEGIN;

TRUNCATE TABLE "block", wiki;

COMMIT;
