/* eslint-disable no-unused-expressions */

import './styles.css'

import section_droknor from './images/Section_droknor.png';
import section_feidlimid from './images/Section_feidlimid.png';
import section_karnaclok from './images/Section_karnaclok.png';
import section_kervollen from './images/Section_kervollen.png';
import section_vanna from './images/Section_vanna.png';
import carteRadamir from './images/CarteRadamir.png'
import navArrow from './images/flecheNavRouge.png'
import logo from './images/logo-decoupe.png'

import Menu from '../Menu';

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import imageMapResize from './imageMapResizer.js';
import data from './data'

const CarteWiki = () => {
    const mapRef = useRef();
    const logoRef = useRef();
    const indexLinkRef = useRef();
    const mapContainerRef = useRef();
    const infoRef = useRef();

    const darkenMap = (region) => {
        mapContainerRef.current.classList.toggle('darkened');

        const targetRegion = document.getElementById(`mouseOver${region}`);
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);

        infoRef.current.textContent = data[region.toLowerCase()];
        infoRef.current.classList.toggle(`noDisplay`);
        infoRef.current.classList.toggle(`zindex`);

        indexLinkRef.current.classList.add(`noDisplay`);
    }; 

    const fullView = (region) => {
        mapContainerRef.current.classList.toggle('darkened');

        const targetRegion = document.getElementById(`mouseOver${region}`);
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);

        infoRef.current.classList.toggle(`noDisplay`);
        infoRef.current.classList.toggle(`zindex`);

        indexLinkRef.current.classList.remove(`noDisplay`);
    };

    const fadeMapIn = () => {
        setTimeout(() => {mapRef.current.classList.remove('appearance')}, 300);
        setTimeout(() => {logoRef.current.classList.remove('logoAppearance')}, 300);
        setTimeout(() => {indexLinkRef.current.classList.remove('indexLinkAppearance')}, 300);
        // setTimeout(() => {document.querySelectorAll('.menu').forEach(element => {
        //     element.classList.remove('menuAppearance');
        // })}, 600);
    };

    // const fadeMapOut = () => {
    //     let targets = [document.getElementById('allMaps'), document.getElementById('infoBulleContainer')]
    //     targets.forEach(target => {
    //         if (!target.style.opacity) {
    //             target.style.opacity = 1;
    //         }
    //         console.log(`fade start...`);
    //         let fadeOutEffect = setInterval(function () {
    //             if (target.style.opacity < 0) {
    //                 clearInterval(fadeOutEffect);
    //                 target.remove();
    //             }
    //             else {
    //                 target.style.opacity -= 0.01;
    //             }
    //         }, 20)
    //     })
    // };

    useEffect(
        () => {
            fadeMapIn();
            imageMapResize();
            window.addEventListener('resize', () => {
                setTimeout(() => {imageMapResize()}, 2000);
            });
        },
    )

    return (
            <div>
                <div className="landscapeBG"></div>
                <h1 className="landscapeWarning">Veuillez passer votre téléphone en mode paysage.</h1>
                <main id="mainContainer">
                    <div className="indexLink indexLinkAppearance" ref={indexLinkRef}>
                        <Link to="/wiki/" className="indexLink">
                            <img src={navArrow} alt="flèche de navigation" className="navArrow"></img>
                            <p id="navText">Index</p>
                        </Link>
                    </div>
                    <aside id="infoBulleContainer">
                        <div className="infoBulle noDisplay" id="info" ref={infoRef}>
                            {/* Historique région */}
                        </div>
                    </aside>
                    
                    {/* FRAGMENTS DE CARTE */}
                    <div id="allMaps">
                            <img src={section_karnaclok} alt="Empire de Karnaclok" id="mouseOverKarnaclok" className="clickThrough region" />
                            <img src={section_droknor} alt="Île de Droknor" id="mouseOverDroknor" className="clickThrough region" />
                            <img src={section_feidlimid} alt="Bois de Feidlimid" id="mouseOverFeidlimid" className="clickThrough region" />
                            <img src={section_vanna} alt="Domaine de Vanna" id="mouseOverVanna" className="clickThrough region" />
                            <img src={section_kervollen} alt="Empire de Kervollen" id="mouseOverKervollen" className="clickThrough region" />
                    {/* FRAGMENTS DE CARTE */}

                        <div id="map-container" ref={mapContainerRef}>
                            <Menu classes="menuAppearance" />

                            <img src={carteRadamir} useMap="#image-map" ref={mapRef} id="carte-radamir" className="appearance carte-radamir" alt="Carte de Radamir" />

                            <map name="image-map">
                                <Link to="/wiki/karnaclok">
                                    <area 
                                        id="region-karnaclok" 
                                        target="" 
                                        alt="Wiki Karnaclok" 
                                        title="" 
                                        coords="1276,1057,1287,1031,1296,986,1315,964,1332,930,1344,899,1366,879,1383,859,1403,839,1423,825,1445,808,1468,794,1496,780,1513,760,1536,752,1564,749,1525,732,1491,721,1448,704,1412,695,1383,692,1332,687,1284,687,1248,681,1211,653,1180,624,1168,588,1143,557,1129,523,1098,492,1061,495,1030,495,979,478,948,503,951,526,948,554,931,565,891,551,869,537,838,520,807,543,798,582,790,619,784,661,787,698,798,746,809,774,824,811,846,836,869,862,874,901,874,941,860,978,821,1012,801,1034,790,1088,812,1122,835,1167,855,1201,891,1229,934,1235,996,1243,1027,1243,1069,1243,1118,1232,1140,1224,1160,1195,1168,1150,1185,1116,1202,1082,1231,1048" 
                                        shape="poly"
                                        onMouseEnter={() => darkenMap('Karnaclok')}
                                        onMouseLeave={() => fullView('Karnaclok')} 
                                    />
                                </Link>
                                <Link to="/wiki/kervollen">
                                    <area 
                                        id="region-kervollen" 
                                        target="" 
                                        alt="Wiki Kervollen" 
                                        title=""
                                        coords="1273,1060,1290,1017,1298,981,1312,949,1335,916,1358,884,1389,853,1417,822,1448,805,1482,788,1513,794,1510,771,1533,757,1544,763,1578,749,1609,743,1646,738,1677,740,1705,749,1728,752,1742,766,1765,754,1770,769,1801,788,1824,803,1850,834,1872,848,1906,868,1940,890,1965,913,1997,930,2022,947,2053,969,2073,986,2090,1003,2064,1031,2064,1077,2056,1119,2030,1142,1997,1173,1971,1207,1951,1229,1954,1266,1934,1297,1889,1305,1866,1322,1841,1345,1804,1348,1756,1348,1736,1334,1714,1314,1714,1294,1691,1244,1652,1212,1638,1181,1643,1159,1654,1125,1609,1108,1561,1108,1522,1108,1471,1119,1445,1122,1397,1128,1352,1128,1315,1128,1284,1114,1270,1082"
                                        shape="poly"
                                        onMouseEnter={() => darkenMap('Kervollen')}
                                        onMouseLeave={() => fullView('Kervollen')}  
                                    />
                                </Link>
                                <Link to="/wiki/vanna">
                                    <area 
                                        id="region-vanna" 
                                        target="" 
                                        alt="Wiki Vanna" 
                                        title=""
                                        coords="2104,1003,2147,986,2183,981,2220,961,2271,972,2347,972,2356,950,2350,921,2378,904,2401,902,2412,876,2435,848,2441,820,2418,780,2398,726,2367,704,2378,670,2378,636,2381,605,2350,562,2333,540,2316,560,2294,585,2271,599,2248,605,2214,613,2180,608,2141,611,2107,625,2090,661,2084,690,2053,707,2048,735,2019,743,1980,774,1983,806,1966,828,1943,865,1935,885,1977,910,2002,927,2022,944,2073,969,2082,992"
                                        shape="poly"
                                        onMouseEnter={() => darkenMap('Vanna')}
                                        onMouseLeave={() => fullView('Vanna')}   
                                    />
                                </Link>   
                                <Link to="/wiki/feidlimid">
                                    <area 
                                        id="region-feidlimid" 
                                        target="" 
                                        alt="Wiki Feidlimid" 
                                        title=""
                                        coords="2322,549,2322,521,2302,480,2260,455,2220,444,2198,425,2186,386,2167,369,2124,346,2088,318,2079,280,2019,257,1932,250,1892,239,1856,233,1813,227,1774,216,1737,222,1706,227,1689,239,1661,258,1649,270,1647,295,1672,312,1678,340,1669,363,1644,374,1621,380,1579,386,1548,386,1531,363,1497,357,1463,346,1440,329,1406,298,1353,289,1324,289,1288,287,1242,261,1180,250,1107,247,1101,264,1047,261,1033,278,999,304,996,340,988,360,985,391,971,425,999,439,982,465,968,493,1036,499,1084,501,1126,516,1143,555,1163,589,1180,631,1231,668,1271,685,1319,694,1367,696,1423,713,1466,719,1497,730,1536,736,1570,759,1624,759,1678,753,1734,764,1751,775,1779,775,1796,790,1833,807,1864,838,1898,860,1924,877,1943,883,1955,843,1972,826,1977,792,1997,767,2025,756,2045,742,2062,710,2096,682,2096,645,2138,612,2161,612,2206,614,2232,617,2266,617,2297,606,2314,580,2322,568"
                                        shape="poly"
                                        onMouseEnter={() => darkenMap('Feidlimid')}
                                        onMouseLeave={() => fullView('Feidlimid')}  
                                    />
                                </Link>
                                <Link to="/wiki/droknor">
                                    <area 
                                        id="region-droknor" 
                                        target="" 
                                        alt="Wiki Droknor" 
                                        title=""
                                        coords="2070,1611,2093,1582,2116,1560,2147,1560,2172,1551,2172,1532,2183,1515,2200,1500,2223,1500,2234,1517,2248,1529,2274,1529,2291,1540,2313,1546,2333,1560,2336,1582,2364,1580,2384,1568,2398,1537,2415,1529,2418,1503,2415,1481,2429,1484,2452,1481,2466,1472,2466,1452,2458,1421,2438,1419,2415,1419,2415,1402,2438,1393,2452,1379,2472,1351,2492,1337,2523,1317,2551,1291,2571,1252,2559,1207,2548,1184,2525,1167,2489,1147,2466,1136,2438,1122,2424,1133,2384,1139,2342,1156,2308,1167,2288,1176,2274,1187,2246,1204,2223,1218,2198,1218,2152,1246,2110,1280,2076,1300,2056,1314,2019,1331,2014,1356,2008,1382,1988,1410,1977,1433,1966,1472,1957,1498,1983,1529,2011,1546,2031,1563,2031,1585"
                                        shape="poly"
                                        onMouseEnter={() => darkenMap('Droknor')}
                                        onMouseLeave={() => fullView('Droknor')}   
                                    />
                                </Link>
                            </map>
                            <img src={logo} alt="logo Radamir" className="logo logoAppearance" id="logo" ref={logoRef} />
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default CarteWiki;