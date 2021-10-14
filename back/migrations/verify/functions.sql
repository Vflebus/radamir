-- Verify radamir:functions on pg

BEGIN;

SELECT new_campaign('truc', 'machin', '', 1);
SELECT new_campaign('truc', 'machin', '', 1);

ROLLBACK;
