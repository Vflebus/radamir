-- Revert radamir:initdb from pg

BEGIN;

DROP TABLE region, "block", wiki, note , campaign_has_players, campaign, "user";

COMMIT;
