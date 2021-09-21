var app = {
    scrollIndex: 0,
    init: function () {
        app.fadeMapIn();
        app.setListenners();
    },
    setListenners: function () {
        // Event listenner pour la séléction d'une région
        document.querySelectorAll('area').forEach(area => {
            area.addEventListener('click', app.fadeMapOut);
        })
        // Event listenner Karnaclok
        document.getElementById('region-karnaclok').addEventListener('mouseenter', function (event) {
            app.darkenMap('Karnaclok', event);
        });
        document.getElementById('region-karnaclok').addEventListener('mouseleave', function () {
            app.fullView('Karnaclok');
        });
        // Event listenner Kervollen
        document.getElementById('region-kervollen').addEventListener('mouseenter', function (event) {
            app.darkenMap('Kervollen', event);
        });
        document.getElementById('region-kervollen').addEventListener('mouseleave', function () {
            app.fullView('Kervollen');
        });
        // Event listenner Vanna
        document.getElementById('region-vanna').addEventListener('mouseenter', function (event) {
            app.darkenMap('Vanna', event);
        });
        document.getElementById('region-vanna').addEventListener('mouseleave', function () {
            app.fullView('Vanna');
        });
        // Event listenner Feidlimid
        document.getElementById('region-feidlimid').addEventListener('mouseenter', function (event) {
            app.darkenMap('Feidlimid', event);
        });
        document.getElementById('region-feidlimid').addEventListener('mouseleave', function () {
            app.fullView('Feidlimid');
        });
        // Event listenner Droknor
        document.getElementById('region-droknor').addEventListener('mouseenter', function (event) {
            app.darkenMap('Droknor', event);
        });
        document.getElementById('region-droknor').addEventListener('mouseleave', function () {
            app.fullView('Droknor');
        });
    },

    darkenMap: function (region, event) {
        let trigger = event.target;
        let targetRegion = document.getElementById(`mouseOver${region}`);
        console.log(targetRegion)
        document.getElementById('map-container').classList.toggle('darkened');
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);
        document.getElementById(`info${region}`).classList.toggle(`noDisplay`);
        // var test = function(event) {
        //     app.scrollToChangePage(event, targetRegion);
        // }
    },
    fullView: function (region) {
        let targetRegion = document.getElementById(`mouseOver${region}`);
        console.log(targetRegion)
        document.getElementById('map-container').classList.toggle('darkened');
        targetRegion.classList.toggle('zindex');
        targetRegion.classList.toggle(`scaled`);
        targetRegion.classList.toggle(`scaled${region}`);
        document.getElementById(`info${region}`).classList.toggle(`noDisplay`);
        // document.removeEventListener('wheel', test)

    },

    // scrollToChangePage: function (event, target) {
    //     console.log(`wheel at ${event.deltaY} on ${target}`);
    //     if (event.deltaY < 0) {
    //         app.scrollIndex += 1;
    //         console.log(app.scrollIndex);
    //     }
    //     else if (event.deltaY > 0) {
    //         app.scrollIndex -= 1;
    //         console.log(app.scrollIndex);
    //     };
    //     switch (app.scrollIndex) {
    //         case 0:
    //             target.classList.remove('scaled', 'scaled130', 'scaledFull', 'scaledFirst');
    //             target.classList.add('scaled', 'scaledFirst');
    //             console.log(`scaling ${target} back to normal`);
    //             break;
    //         case 1:
    //             // target.classList.remove('scaled', 'scaled130', 'scaledFull');
    //             target.classList.add('scaledFirst');
    //             console.log('scaling to 120');
    //             break;
    //         case 2:
    //             target.classList.remove('scaled', 'scaledFirst', 'scaledFull');
    //             target.classList.add('scaled130');
    //             console.log(`scaling to 130`);
    //             break;
    //         case 3:
    //             target.classList.remove('scaled', 'scaled130', 'scaledFirst');
    //             target.classList.add('scaledFull');
    //             console.log('scaling to full');
    //             break;
    //     }
    //     setTimeout(target.classList.remove('scaled130', 'scaledFull', 'scaledFirst'), 2000);
    // },

    

    fadeMapIn: function () {
        let map = document.getElementById('carte-radamir');
        map.classList.remove('appearance');
    },

    fadeMapOut: function () {
        let map = document.getElementById('allMaps');
        let infoBulle = document.getElementById('infoBulleContainer');
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

    },

    showRegionWiki: function () {
        let textWikia = document.createElement('div');
        textWikia.classList.add('text-wikia', 'appearance');
        textWikia.innerHTML = "<h1>Les Bois de Feidlimid</h1><h2>Historique</h2><p>À l'origine, plusieurs tribus d'elfes vivaient dans les Bois de Feidlimid, se partageant le vaste territoire. Des conflits territoriaux existaient, mais une tribu en particulier, très  ggressive, voulait imposer sa loi à toutes les autres et les dominer. Les tribus se sont unies pour l'affronter, et la maîtrise de l'enchantement d'armes et d'armures pour la guerre a été la cause de beaucoup de sang versé, mais également de nombreux arbres abattus et de nombreuses créatures tuées. Les aggresseurs chassés des bois, les tribus restantes se sont unies et ont renoncé à l'enchantement, se concentrant sur la guérison de la forêt et l'harmonie entre ses habitants. Aujourd'hui, les elfes sylvains sont un peuple prospère et mystérieux, qui tire son épanouissement dans le contact avec la nature et la protection de son environnement.</p> <h2>Géographie</h2> <p> Au Nord du Royaume de Kervollen s'étendent les majestueuses forêts du Bois de Feidlimid, terres ancestrales des elfes sylvains. Le climat est doux et clément, et la végétation s'étend à perte de vue jusqu'aux confins du continent, entrecoupées seulement de quelques monts rocheux, de lacs et de rivières. Les bois sont épais, n'étant pas du tout entretenus, les Elfes vivant en harmonie avec la nature. À l'Ouest cependant, à la frontière avec l'Empire de Karnaclok, les terres ont été partiellement déboisées et la repousse des arbres est devenue difficile. Ce problème est source de tensions croissantes avec les Nains. À l'Est, le Ravin de Drustan est une frontière physique avec les terres des Elfes Noirs. Profond d'une vingtaine de mètres, il marque clairement la limite des Bois de Feidlimid. Au Nord, les forêts donnent sur des plages de sable fin, où aucun peuple n'a jugé bon de tenter d'installer un port... </p> <h2>Architecture</h2> <p> Les rares voyageurs qui ont eu la chance de pénétrer dans les forêts elfiques et de rencontrer ce peuple si mystérieux parlent d'un arbre gigantesque, dominant toute la canopée, sur lequel les elfes se sont installés au fur et à mesure des âges. Les habitations construites en bois sont réparties tout autour de l'écorce, et reliées entre elles par de grands escaliers et ponts suspendus. Des cavités ont été aménagées afin de permettre aux lucioles de s'y installer, et d'éclairer la nuit. Dans les plus hautes cimes, on trouve de nombreux nids d'hippogriffes, qui s'y sont installés et peuvent accepter de servir de montures volantes. Quelques postes d'observations ou de chasse sont aménagés dans les plus grands arbres, leurs larges cimes permettant de s'y installer confortablement, et il s'agit principalement d'aménager un peu de confort, avec de quoi s'asseoir, dormir, se protéger de la pluie et cuisiner. </p> <h2>Langue</h2> <p>Les elfes sylvains parlent  apprendre. À l'écrit, les nombreux caractères nécessitent une grande précision, car deux mots peuvent paraître similaires, mais la nuance est importante.</p>"

        document.getElementById('mainContainer').appendChild(textWikia);
        textWikia.classList.remove('appearance');

    }
};

export default app;

