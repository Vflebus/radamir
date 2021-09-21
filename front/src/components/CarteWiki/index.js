/* eslint-disable no-unused-expressions */

import './styles.css'

import section_droknor from './images/Section_droknor.png';
import section_feidlimid from './images/Section_feidlimid.png';
import section_karnaclok from './images/Section_karnaclok.png';
import section_kervollen from './images/Section_kervollen.png';
import section_vanna from './images/Section_vanna.png';
import carteRadamir from './images/CarteRadamir.png'

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import imageMapResize from './imageMapResizer.js';

const CarteWiki = () => {

    const fullView = (region) => {
        let targetRegion = document.getElementById(`mouseOver${region}`);
        document.getElementById('map-container').classList.toggle('darkened');
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);
        document.getElementById(`info${region}`).classList.toggle(`noDisplay`);
    };

    const darkenMap = (region, event) => {
        let targetRegion = document.getElementById(`mouseOver${region}`);
        document.getElementById('map-container').classList.toggle('darkened');
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);
        document.getElementById(`info${region}`).classList.toggle(`noDisplay`);
    };

    const fadeMapIn = () => {
        let map = document.getElementById('carte-radamir');
        map.classList.remove('appearance');
    };

    const fadeMapOut = (region) => {
        let targets = [document.getElementById('allMaps'), document.getElementById('infoBulleContainer')]
        targets.forEach(target => {
            if (!target.style.opacity) {
                target.style.opacity = 1;
            }
            console.log(`fade start...`);
            let fadeOutEffect = setInterval(function () {
                if (target.style.opacity < 0) {
                    clearInterval(fadeOutEffect);
                    target.remove();
                }
                else {
                    target.style.opacity -= 0.01;
                }
            }, 20)
        })
    };

    useEffect(
        () => {
            fadeMapIn();
            // Event listenner pour la séléction d'une région
            document.querySelectorAll('area').forEach(area => {
                area.addEventListener('click', fadeMapOut);
            })
            // Event listenner Karnaclok
            document.getElementById('region-karnaclok').addEventListener('mouseenter', function (event) {
                darkenMap('Karnaclok', event);
            });
            document.getElementById('region-karnaclok').addEventListener('mouseleave', function () {
                fullView('Karnaclok');
            });
            // Event listenner Kervollen
            document.getElementById('region-kervollen').addEventListener('mouseenter', function (event) {
                darkenMap('Kervollen', event);
            });
            document.getElementById('region-kervollen').addEventListener('mouseleave', function () {
                fullView('Kervollen');
            });
            // Event listenner Vanna
            document.getElementById('region-vanna').addEventListener('mouseenter', function (event) {
                darkenMap('Vanna', event);
            });
            document.getElementById('region-vanna').addEventListener('mouseleave', function () {
                fullView('Vanna');
            });
            // Event listenner Feidlimid
            document.getElementById('region-feidlimid').addEventListener('mouseenter', function (event) {
                darkenMap('Feidlimid', event);
            });
            document.getElementById('region-feidlimid').addEventListener('mouseleave', function () {
                fullView('Feidlimid');
            });
            // Event listenner Droknor
            document.getElementById('region-droknor').addEventListener('mouseenter', function (event) {
                darkenMap('Droknor', event);
            });
            document.getElementById('region-droknor').addEventListener('mouseleave', function () {
                fullView('Droknor');
            });
            imageMapResize();
            window.addEventListener('resize', () => {
                // let resize = imageMapResize();
                setTimeout(() => {imageMapResize()}, 2000);
            });
        },
        []
    )

    return (
            <div>
                <main id="mainContainer">
                    {/* INFOBULLES RÉGIONS */}
                    <aside id="infoBulleContainer">
                        <div className="infoBulle noDisplay" id="infoFeidlimid">
                            <p>
                                Au Nord du Royaume de Kervollen s'étendent les majestueuses forêts du Bois de Feidlimid, terres
                                ancestrales des elfes sylvains. Le climat est doux et clément, et la végétation s'étend à perte de
                                vue jusqu'aux confins du continent, entrecoupées seulement de quelques monts rocheux, de lacs et de
                                rivières. Les bois sont épais, n'étant pas du tout entretenus, les Elfes vivant en harmonie avec la
                                nature.
                            </p>
                            <p>À l'Ouest cependant, à la frontière avec l'Empire de Karnaclok, les terres ont été partiellement
                                déboisées et la repousse des arbres est devenue difficile. Ce problème est source de tensions
                                croissantes avec les Nains.
                                À l'Est, le Ravin de Drustan est une frontière physique avec les terres des Elfes Noirs. Profond
                                d'une vingtaine de mètres, il marque clairement la limite des Bois de Feidlimid.
                                Au Nord, les forêts donnent sur des plages de sable fin, où aucun peuple n'a jugé bon de tenter
                                d'installer un port...
                            </p>
                        </div>
                        <div className="infoBulle noDisplay" id="infoKarnaclok">
                            <p>
                                L'histoire de l'Empire Nain commence avec celle du Premier Forgeron : le premier nain qui forgea quelque
                                chose, et entama ainsi la marche de son peuple vers une recherche perpetuelle de progrès technologique.
                                Une grande partie de la culture naine est basée sur la curiosité scientifique et cette envie d'améliorer
                                son environnement. "Y'a moyen d'améliorer ça" est une phrase que tout nain a déjà prononcé au moins une
                                centaine de fois dans sa vie.
                                Leur vaste ville mécanique sous la montagne se développant, les Nains ont conquis le reste de leur
                                territoire grâce aux chemins de fer et alimenté leurs machines en déboisant les forêts alentours.
                            </p>
                            <p>Alliés aux humains de longue date, avec qui ils aiment à commercer, les Nains les ont rejoints lors de la
                                Grande Guerre opposant leur alliance aux peaux-vertes, et leur technologie militaire a fait des miracles
                                face aux envahisseurs.
                                Néanmoins, cette volonté d'amélioration à outrance n'est pas sans conséquences ni dangers, et les Nains
                                doivent faire face au dépérissement progressif de leur environnement écologique.
                            </p>
                        </div>
                        <div className="infoBulle noDisplay" id="infoVanna">
                            <p>
                                À l'origine, les Elfes Noirs n'étaient qu'une seule tribu, Vanna, chassée du Domaine de Feidlimid
                                lorsqu'elle a essayé de prendre le pouvoir sur toutes les autres. Repoussée à l'Est, elle s'est
                                développée en cinq villages répartis sur l'entiéreté de leur nouveau territoire, chaque village étant
                                dirigé par un membre de la Famille Vanna, qui transmet le flambeau à sa descendance.
                                Moins proche d'une monarchie que d'un régime totalitaire, la population est surtout divisée entre ceux
                                qui sont en haut et ont le pouvoir, et ceux qui sont en bas, et en subissent les conséquences.
                            </p>
                            <p>Réputé aussi bien pour sa ville-casino offrant à tout le continent les plaisirs les plus divers et
                                variés, que pour ses assassins envoyés en mission sur contrat, le Domaine de Vanna est une région où il
                                fait bon vivre sous quelques conditions : si on a de l'or, si on a du pouvoir, ou si l'on est un membre
                                de la Famille, et donc détenteur des deux.
                            </p>
                        </div>
                        <div className="infoBulle noDisplay" id="infoKervollen">
                            <p>
                                Le Royaume humain de Kervollen est peuplé principalement de fermiers et paysans, d'artisans et de
                                chasseurs, de chevaliers et de mages académiques, vivant dans des villages ou des cités fortifiées,
                                bordés de forêts où rôdent toutes sortes de créatures.
                                Le Royaume, en paix avec ses voisins notamment grâce à un commerce florissant, fut le premier touché par
                                l'invasion de peaux-vertes venues du Sud. Il fallut toute la diplomatie humaine pour que leur armée,
                                ralliant les Nains et les Elfes, parviennent à repousser l'envahisseur jusqu'à l'océan.
                            </p>
                            <p>Le Royaume fut durement touché par ce qu'on nomma "la Grande Guerre", et les conséquences se font encore
                                sentir aujourd'hui : les chevaliers, défenseurs de Kervollen, ne sont plus assez nombreux pour défendre
                                efficacement les terres, les gobelins infestent le Sud, et la corruption gagne peu à peu le siège du
                                pouvoir, entraînant son lot de banditisme et de pauvreté.
                            </p>
                        </div>
                        <div className="infoBulle noDisplay" id="infoDroknor">
                            <p>
                                L'Île de Drok'nor est la terre natale des Orcs, des créatures de plus de deux mètres et toutes en
                                muscles. À l'origine, les clans vivaient paisiblement et commerçaient même avec le Royaume de Kervollen
                                à l'occasion ; ce fut d'autant plus une surprise lorsqu'ils attaquèrent les humains par le Sud.
                            </p>
                            <p>
                                L'attaque fut dévastatrice, les orcs s'étant ralliés aux gobelins, de petites créatures se reproduisant
                                à une vitesse folle, et aux ogres, des géants de cinq à six mètres, capables de balayer tout sur leur
                                passage. Mais l'arme la plus terrible de ces "peaux-vertes", était les mots de pouvoirs permettant de
                                ramener les morts à la vie, et de commander à ces morts-vivants décérébrés. Ainsi, chaque adversaire qui
                                tombait se relevait pour grossir les rangs de l'armée qui toujours avançait, menée par un Marqué, Katon
                                le Vorace.
                            </p>
                            <p>Parvenu jusqu'aux portes de la capitale, Kaelic, il fallut l'Alliance des Humains, des Elfes et des
                                Nains, pour abattre Katon et repousser les envahisseurs jusqu'à leur île.
                                Désormais, les Orcs vivent en autarcie sur Drok'nor, et il est devenu rare d'en croiser sur le
                                continent, tant la haine de ce peuple est encore vivace chez les autres.
                            </p>
                        </div>
                    </aside>
                    {/* INFOBULLES RÉGIONS */}
                    {/* FRAGMENTS DE CARTE */}
                    <div id="allMaps">
                            <img src={section_karnaclok} alt="Empire de Karnaclok" id="mouseOverKarnaclok" className="clickThrough region" />
                            <img src={section_droknor} alt="Île de Droknor" id="mouseOverDroknor" className="clickThrough region" />
                            <img src={section_feidlimid} alt="Bois de Feidlimid" id="mouseOverFeidlimid" className="clickThrough region" />
                            <img src={section_vanna} alt="Domaine de Vanna" id="mouseOverVanna" className="clickThrough region" />
                            <img src={section_kervollen} alt="Empire de Kervollen" id="mouseOverKervollen" className="clickThrough region" />
                    {/* FRAGMENTS DE CARTE */}

                        <div id="map-container">

                            <img src={carteRadamir} useMap="#image-map" id="carte-radamir" className="appearance carte-radamir" alt="Carte de Radamir" />

                            <map name="image-map">
                                    <Link to="/wiki/karnaclok"><area 
                                        id="region-karnaclok" 
                                        target="" 
                                        alt="" 
                                        title="" 
                                        coords="1276,1057,1287,1031,1296,986,1315,964,1332,930,1344,899,1366,879,1383,859,1403,839,1423,825,1445,808,1468,794,1496,780,1513,760,1536,752,1564,749,1525,732,1491,721,1448,704,1412,695,1383,692,1332,687,1284,687,1248,681,1211,653,1180,624,1168,588,1143,557,1129,523,1098,492,1061,495,1030,495,979,478,948,503,951,526,948,554,931,565,891,551,869,537,838,520,807,543,798,582,790,619,784,661,787,698,798,746,809,774,824,811,846,836,869,862,874,901,874,941,860,978,821,1012,801,1034,790,1088,812,1122,835,1167,855,1201,891,1229,934,1235,996,1243,1027,1243,1069,1243,1118,1232,1140,1224,1160,1195,1168,1150,1185,1116,1202,1082,1231,1048" 
                                        shape="poly" 
                                    /></Link>
                                    <Link to="/wiki/kervollen"><area 
                                        id="region-kervollen" 
                                        target="" 
                                        alt="" 
                                        title=""
                                        coords="1273,1060,1290,1017,1298,981,1312,949,1335,916,1358,884,1389,853,1417,822,1448,805,1482,788,1513,794,1510,771,1533,757,1544,763,1578,749,1609,743,1646,738,1677,740,1705,749,1728,752,1742,766,1765,754,1770,769,1801,788,1824,803,1850,834,1872,848,1906,868,1940,890,1965,913,1997,930,2022,947,2053,969,2073,986,2090,1003,2064,1031,2064,1077,2056,1119,2030,1142,1997,1173,1971,1207,1951,1229,1954,1266,1934,1297,1889,1305,1866,1322,1841,1345,1804,1348,1756,1348,1736,1334,1714,1314,1714,1294,1691,1244,1652,1212,1638,1181,1643,1159,1654,1125,1609,1108,1561,1108,1522,1108,1471,1119,1445,1122,1397,1128,1352,1128,1315,1128,1284,1114,1270,1082"
                                        shape="poly" 
                                    /></Link>
                                    <Link to="/wiki/vanna"><area 
                                        id="region-vanna" 
                                        target="" 
                                        alt="" 
                                        title=""
                                        coords="2104,1003,2147,986,2183,981,2220,961,2271,972,2347,972,2356,950,2350,921,2378,904,2401,902,2412,876,2435,848,2441,820,2418,780,2398,726,2367,704,2378,670,2378,636,2381,605,2350,562,2333,540,2316,560,2294,585,2271,599,2248,605,2214,613,2180,608,2141,611,2107,625,2090,661,2084,690,2053,707,2048,735,2019,743,1980,774,1983,806,1966,828,1943,865,1935,885,1977,910,2002,927,2022,944,2073,969,2082,992"
                                        shape="poly" 
                                    /></Link>   
                                    <Link to="/wiki/feidlimid"><area 
                                        id="region-feidlimid" 
                                        target="" 
                                        alt="" 
                                        title=""
                                        coords="2322,549,2322,521,2302,480,2260,455,2220,444,2198,425,2186,386,2167,369,2124,346,2088,318,2079,280,2019,257,1932,250,1892,239,1856,233,1813,227,1774,216,1737,222,1706,227,1689,239,1661,258,1649,270,1647,295,1672,312,1678,340,1669,363,1644,374,1621,380,1579,386,1548,386,1531,363,1497,357,1463,346,1440,329,1406,298,1353,289,1324,289,1288,287,1242,261,1180,250,1107,247,1101,264,1047,261,1033,278,999,304,996,340,988,360,985,391,971,425,999,439,982,465,968,493,1036,499,1084,501,1126,516,1143,555,1163,589,1180,631,1231,668,1271,685,1319,694,1367,696,1423,713,1466,719,1497,730,1536,736,1570,759,1624,759,1678,753,1734,764,1751,775,1779,775,1796,790,1833,807,1864,838,1898,860,1924,877,1943,883,1955,843,1972,826,1977,792,1997,767,2025,756,2045,742,2062,710,2096,682,2096,645,2138,612,2161,612,2206,614,2232,617,2266,617,2297,606,2314,580,2322,568"
                                        shape="poly"
                                    /></Link>
                                    <Link to="/wiki/droknor"><area 
                                        id="region-droknor" 
                                        target="" 
                                        alt="" 
                                        title=""
                                        coords="2070,1611,2093,1582,2116,1560,2147,1560,2172,1551,2172,1532,2183,1515,2200,1500,2223,1500,2234,1517,2248,1529,2274,1529,2291,1540,2313,1546,2333,1560,2336,1582,2364,1580,2384,1568,2398,1537,2415,1529,2418,1503,2415,1481,2429,1484,2452,1481,2466,1472,2466,1452,2458,1421,2438,1419,2415,1419,2415,1402,2438,1393,2452,1379,2472,1351,2492,1337,2523,1317,2551,1291,2571,1252,2559,1207,2548,1184,2525,1167,2489,1147,2466,1136,2438,1122,2424,1133,2384,1139,2342,1156,2308,1167,2288,1176,2274,1187,2246,1204,2223,1218,2198,1218,2152,1246,2110,1280,2076,1300,2056,1314,2019,1331,2014,1356,2008,1382,1988,1410,1977,1433,1966,1472,1957,1498,1983,1529,2011,1546,2031,1563,2031,1585"
                                        shape="poly" 
                                    /></Link>
                            </map>
                        </div>
        
                    </div>
                </main>
            </div>
    )
}

export default CarteWiki;