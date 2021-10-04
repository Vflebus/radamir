INSERT INTO "user"("username", "email", "password", "is_admin")
VALUES
('NonoLeBoss', 'nono@leboss.pro', 'encrypted', true),
('Boris_le_peon', 'boris@borisplanet.com', '12345', false);

INSERT INTO "campaign"("campaign_name", "description", "created_at", "user_id")
VALUES('La quête de Nono', 'Nono le Boss va se lancer dans un périple semé d''embûches afin de trouver comment sortir de VIM', NULL, 1);

INSERT INTO "campaign_has_players" ("campaign_id", "user_id")
VALUES (1, 1);

INSERT INTO "note" ("content", "is_private", "campaign_id", "user_id")
VALUES
('On a croisé aleks', false, 1, 1),
('On a croisé Guillaume Pet Hache de Paix', false, 1, 2);