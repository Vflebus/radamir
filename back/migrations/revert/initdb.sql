-- Revert radamir:initdb from pg

BEGIN;

DROP TABLE region, wiki_has_blocks, "block", wiki, note , campaign_has_players, campaign, "user";

COMMIT;
