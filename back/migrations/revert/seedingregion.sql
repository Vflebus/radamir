-- Revert radamir:seedingregion from pg

BEGIN;

TRUNCATE TABLE region;

COMMIT;
