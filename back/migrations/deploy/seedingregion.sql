-- Deploy radamir:seedingregion to pg

BEGIN;

INSERT INTO region ("region", "history", "geography", "architecture", "language", "currency", "leader", "religion", "caste", "name", "justice", "mage", "outfit", "lifestyle", "treatment", "movement", "nutrition", "art", "entertainment")
VALUES (
'
Vanna
', 
'
À l''origine, les Elfes Noirs n''étaient qu''une seule tribu, Vanna, chassée du Domaine de Feidlimid lorsqu''elle a essayé de prendre le pouvoir sur toutes les autres. Repoussée à l''Est, elle s''est développée en cinq villages répartis sur l''entièreté de leur nouveau territoire, chaque village étant dirigé par un membre de la Famille Vanna, qui transmet le flambeau à sa descendance.
Moins proche d''une monarchie que d''un régime totalitaire, la population est surtout divisée entre ceux qui sont en haut et ont le pouvoir, et ceux qui sont en bas, et en subissent les conséquences.
Réputé aussi bien pour sa ville-casino offrant à tout le continent les plaisirs les plus divers et variés, que pour ses assassins envoyés en mission sur contrat, le Domaine de Vanna est une région où il fait bon vivre sous quelques conditions : si on a de l''or, si on a du pouvoir, ou si l''on est un membre de la Famille, et donc détenteur des deux.
',
'
À l''Est des Bois de Feidlimid et du Royaume de Kervollen s''étendent du Nord au Sud les plateaux rocheux du Domaine de Vanna. Entre les hautes falaises, de vertes forêts de bambou dissimulent les habitations et le peuple des Elfes Noirs, tandis que les rivières et cascades les approvisionnent en eau et en poissons.
Chacune des Grandes Maisons dispose de son propre village. On trouve ainsi, du Nord au Sud, le port de Phirun, le Monastère de Soth (pure), le Temple de Chan (Lune), l''Exploitation agricole de Botum (lotus), et enfin la Ville-casino de Vibol (large).
À l''Est, le continent s''ouvre sur la mer, mais les falaises à pics rendent difficile l''accès au Domaine.
',
'
Les habitations sont en bois, recouvertes de toits de tuiles ou de chaume. La plupart des constructions sont modestes, mais s''élèvent et s''élargissent au fur et à mesure que la richesse de la demeure s''accroît. De fait, les demeures des Seigneurs, mais également les Temples, sont les plus imposantes constructions au sein d''un village.
',
'
Les Elfes noirs parlent l''elfique de Feidlimid, mais ont également développé leur propre langue, l''Ayane. Très peu répandues car surtout utilisées par les militaires et les assassins, il s''agit d''une langue visant à une économie de mots, afin de se faire comprendre rapidement. Elle s''écrit en symboles simples, mais peut également être exprimée par des signes des mains.
',
'
On utilise la monnaie de Kervollen, étant donné que les échanges commerciaux avec le Royaume sont courants. Les pièces de cuivre, d''argent et d''or ont su trouver leur place dans la vie courante des Elfes Noirs.
',
'
Issues d''une seule famille à l''origine, cinq Maisons, qui dirigent chacune leur propre village, sont à la tête du Domaine de Vanna. Chaque Maison a son Patriarche ou sa Matriarche, qui veille à la prospérité de ses terres.
Kaito Vanna dirige le Port de Phirun. Repère de canailles de toutes races, Kaito vit surtout des taxes marchandes que lui versent les navires qui souhaitent accoster pour commercer avec les Elfes Noirs. L''exportation d''une drogue, appelée Rêvargent, en est la principale raison.
Jun''ichi Vanna dirige le Monastère de Soth. Marquée par de nombreux combats, elle tient d''une main de fer ceux qu''elle nomme ses "enfants", et n''aspire qu''à la perfection de leur formation martiale. Ceux qui deviendront des guerriers seront affectés à la protection des villages, tandis que les plus prometteurs deviendront des assassins sur contrats, envoyés à travers le continent.
Hikari Vanna dirige le Temple de Chan. Marqué imposant, doté d''une peau écailleuse, de griffes et d''un faciès de reptile, il a la charge de tous ceux dotés du don de l''Étincelle, qui lui sont envoyés à travers le pays. Formés pour maîtriser les mots de pouvoirs et les arts du combat au corps à corps, ils sont également les prêtres de Tiamat, le Dragon aux cinq couleurs.
Aina Vanna dirige l''Exploitation agricole de Botum. Véritable grenier à grains de tout le Domaine, son village à la charge de nourrir les autres, mais également de développer les champs de Rêvargent, qui sera acheminée au Nord pour être exportée, et au Sud pour approvisionner la Ville-casino de Vibol.
Enfin, Daichi Vanna dirige la Ville-casino de Vibol. Proche du Royaume de Kervollen, elle attire aussi bien les humains que les nains et les orcs, dans ses quartiers des plaisirs, ses fumeries de Rêvargent, ses tables de jeux ou ses auberges où l''on sert mets raffinés et alcools rares.
',
'
Les Elfes Noirs prient Tiamat, le Dragon aux Cinq couleurs. Selon leur croyance, c''est lui qui a donné au monde le don de l''Étincelle, et tous ceux qui le possèdent lui sont liés. Chaque nouvel arrivant au Temple de Chan se voit imposer une cérémonie, où lui apparaîtra en songe Tiamat, parée de l''une de ses couleurs. Selon la couleur vue en rêve, on attribuera une tâche différente à l''aspirant, puis on le formera à l''art de la magie et du combat au corps à corps.
',
'
Au sommet se trouvent les Elfes Noirs de la famille Vanna, qui dirige l''intégralité du Domaine. Les cinq Patriarches et Matriarches ont chacun la charge de leur village, qui sera transmis à leur descendant.
Les soldats et assassins sont à part. Directement issus du Monastère de Soth, ils répondent à la Matriarche Jun''ichi Vanna, et servent aussi bien de gardes que de police.
Les moines du Temple de Chan sont voués à leur Dieu, et représentent eux aussi une classe à part. Ils sont notamment exonérés d''impôts, et le Temple pourvoit à leurs besoins.
Les Elfes Noirs qui ne sont ni de la famille Vanna, ni combattants, sont principalement marchands, fermiers ou artisans, et vivent sous le joug des autres, étant taxés pour être protégés et nourris.
',
'
Les noms des villages sont inspirés du khmer IRL, et les noms des Elfes noirs sont inspirés du japonais IRL. Lorsqu''on se présente, on donne son nom, ainsi que son village. ""Je suis Nori, du Temple de Chan"".
',
'
Les soldats dispersés dans les villages ont toute latitude pour régler les conflits entre les habitants ou avec des races extérieures. Ayant horreur du désordre, ils peuvent se montrer assez expéditifs dans leur façon de résoudre les crimes, et plus d''un voleur à la tire s''est vu délesté de sa tête.
De manière assez générale, la population reste tranquille, évitant d''avoir recours à cette police par trop zélée, et a appris à taire son ressentiment comme ses pulsions.
Pour les cas les plus graves - entendre par là quelque chose d''assez gros pour ne pas être résolu par un coup de sabre - c''est directement le Patriarche ou la Matriarche qui décidera du sort de l''incriminer.
',
'
Tous ceux qui disposent du don de l''Étincelle sont envoyés au Temple de Chan, sous la tutelle d''Hikari Vanna, le marqué. Ils y apprennent à la fois les mots de pouvoir, l''art du combat au corps à corps, mais également la façon de servir Tiamat, le Dragon aux cinq couleurs.
Les mots de pouvoirs des Elfes Noirs renforcent leurs corps, enflammant leurs poings, les parcourant d''un courant électrique...ce qui est dévastateur une fois couplé à l''art du combat.
Mais surtout, ils maîtrisent l''art de l''enchantement : des mots de pouvoirs qui transfèrent la magie à une arme ou un objet, afin de le renforcer. Ce savoir très prisé est ce qui rend les gardes et assassins Elfes noirs si redoutables.
',
'
Les armures des gardes dépendent de leur rang : plus il est élevé et plus elle est somptueuse, le commerce avec les humains et les nains permettant de faire appel aux meilleurs artisans. Les tenues des assassins suivent cette même logique, et de manière générale, l''habillement traduit la richesse et donc le rang social.
Les oreilles sont souvent percées et ornées de boucles ou de tiges, de même que les nez, les arcades ou les lèvres. On maîtrise l''art du tatouage, qui est surtout décoratif.
Les maisons sont décorées avec soin : les elfes noirs apprécient les richesses, et aiment à parer leurs demeures d''éléments indiquant qu''ils sont fortunés. Plus un bâtiment à d''étages et plus son propriétaire est riche.
',
'
Les Elfes noirs font grand cas de l''hygiène. Les savons à base de graisse animale ou d''huile végétale peuvent être trouvés dans toutes les demeures et auberges, et les bains sont quotidiens. Le parfum est aussi très apprécié, de même que plusieurs produits de beauté et de maquillage.
',
'
Le savoir de guérison des Elfes Sylvains est légendaire, mais les Elfes Noirs, bien qu''issus du même peuple à l''origine, ont perdu ce savoir avec le temps. Les moines du Monastère de Soth connaissent bien quelques sorts de soins mineurs, mais n''ont pas vocation à être des soigneurs à temps plein. Ce rôle est dévolu aux médecins, qui ont leurs cabinets dans chaque ville, et de nombreux apprentis. Les cadavres ne manquant pas sur le Domaine de Vanna, les médecins ont pu développer leur art en pratiquant autopsies et expériences.
Des apothicaires ont également des boutiques permettant à ceux aux bourses plus modestes d''obtenir quelques remèdes en échanges de pièces d''or.
',
'
Des gondoles permettent de parcourir tout le domaine en suivant les cours d''eau qui le parcourent, et un système de caravanes escortées par des gardes parcourt les routes entre les villages. Les cerfs sont également élevés comme montures, scellés et dressés pour le combat.
',
'
La proximité des fleuves et rivières ainsi que de la mer permettent de consommer du poisson à presque tous les repas. Les nombreuses rizières de l''exploitation agricole de Botum fournissent en riz l''ensemble de la population du Domaine, et le riz se décline sous toutes ses formes, que ce soit en plats ou en alcool fort.
',
'
On maîtrise l''art de la presse, et si les romans et nouvelles peuvent être produits en masse, c''est surtout le journal qui a la faveur populaire, encouragé par le régime du Domaine qui y voit un excellent moyen de propagande.
La peinture est appréciée dans les milieux aisés, et certaines toiles peuvent se vendre une petite fortune pour peu que l''artiste soit réputé. Dans des milieux plus modestes, des petites toiles assez sommaires sont achetées pour décorer les demeures.
La musique est appréciée pour le calme qu''elle peut apporter. On n''apprécie guère les rythmes endiablés, préférant la sérénité d''une mélodie harmonieuse, jouée sur des instruments traditionnels.
Il existe enfin une forme de théâtre, où les Elfes Noirs sont masqués, et interprètent d''autres races, souvent dans le but de s''en moquer.
',
'
Les cartes à collectionner des humains ont fait leur bout de chemin jusqu''au Domaine de Vanna, de même que nombre de jeux de société en bois. Les cerfs-volants sont très appréciés, de même que les jeux d''adresse, et des compétitions sont parfois organisées lors de festivals d''été.
',
),
-- elfes noirs end
(),
-- elfes sylvains end
(),
-- humains end
(),
-- nains end
();
-- orcs end

COMMIT;
