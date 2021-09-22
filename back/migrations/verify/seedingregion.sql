-- Verify radamir:seedingregion on pg

BEGIN;

SELECT * FROM region WHERE false;

ROLLBACK;
