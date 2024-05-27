
import { Produit, Alimentaire, Chimique, Fragile, Incassable } from './Model/Produit';
import { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere } from './Model/Cargaison';

let cargaisons: Cargaison[] = [];

function showDetails(type: string, distance: number) {
    const cargaison = cargaisons.find(c => c.type === type && c.distance === distance);
    if (cargaison) {
        const details = `
        <div style="margin-left:20px">

            <h2>Détails de la Cargaison</h2>
            <p>Type: ${cargaison.type}</p>
            <p>Distance: ${cargaison.distance} km</p>
            <p>Nombre de produits: ${cargaison.nbProduits()}</p>
            <p>Montant total: ${cargaison.sommeTotaleC()} F</p>
            <ul>
                ${cargaison.produits.map(produit => `<li>${produit.info()}</li>`).join('')}
            </ul>
            </div>
        `;
        document.getElementById('details-container')!.innerHTML = details;
        const modal = document.getElementById('details-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'block';
            modal.style.marginLeft ="400px"
            modal.style.zIndex ="30"
            modal.style.backgroundColor ="gray"
            modal.style.width ="30%";
            modal.style.color ="white"
        }
    } else {
        console.log("Cargaison non trouvée.");
    }
}

(window as any).showDetails = showDetails;

document.getElementById('submit-cargaison')?.addEventListener('click', (e) => {
    e.preventDefault();
    const distanceInput = <HTMLInputElement>document.getElementById('distance');
    const typeInput = <HTMLSelectElement>document.getElementById('type-cargaison');

    const distance = parseInt(distanceInput.value);
    const type = typeInput.value;

    let cargaison: Cargaison | null = null;
    switch (type) {
        case 'aerienne':
            cargaison = new CargaisonAerienne(distance);
            break;
        case 'maritime':
            cargaison = new CargaisonMaritime(distance);
            break;
        case 'routiere':
            cargaison = new CargaisonRoutiere(distance);
            break;
    }

    if (cargaison) {
        // Récupération des valeurs du produit à partir du formulaire
        const libelleProduitInput = <HTMLInputElement>document.getElementById('libelle-produit');
        const poidsProduitInput = <HTMLInputElement>document.getElementById('poids-produit');
        const typeProduitInput = <HTMLSelectElement>document.getElementById('type-produit');

        const libelleProduit = libelleProduitInput.value;
        const poidsProduit = parseInt(poidsProduitInput.value);
        const typeProduit = typeProduitInput.value;

        // Création de l'instance de Produit
        let produit: Produit;
        switch (typeProduit) {
            case 'alimentaire':
                produit = new Alimentaire(libelleProduit, poidsProduit);
                break;
            case 'chimique':
                produit = new Chimique(libelleProduit, poidsProduit);
                break;
            case 'fragile':
                produit = new Fragile(libelleProduit, poidsProduit);
                break;
            case 'incassable':
                produit = new Incassable(libelleProduit, poidsProduit);
                break;
            default:
                produit = new Produit(libelleProduit, poidsProduit);
        }

        // Ajout du produit à la cargaison
        cargaison.ajouterProduit(produit);

        cargaisons.push(cargaison);
        console.log(`Cargaison ajoutée: ${cargaison.info()}`);
        addCargaisonToTable(cargaison);
    } else {
        console.log("Type de cargaison invalide.");
    }
});

function addCargaisonToTable(cargaison: Cargaison) {
    const typeCargaison = document.getElementById('type-cargaison').value;

    const tbody = document.querySelector('#results tbody');
    if (tbody) {
        const tr = document.createElement('tr');
        tr.classList.add('border-b');

        // Récupération du produit ajouté à la cargaison
        const dernierProduit = cargaison.produits[cargaison.produits.length - 1];

        tr.innerHTML = `
            <td>${typeCargaison === 'aerienne' ? CargaisonAerienne.codeUnique :
                typeCargaison === 'maritime' ? CargaisonMaritime.codeUnique :
                typeCargaison === 'routiere' ? CargaisonRoutiere.codeUnique : 'Code non défini'}</td>
                <td class="py-1 px-1">${cargaison.type}</td>
                <td class="py-1 px-1 pl-10">${cargaison.distance}km</td>
                <td class="py-1 px-1 nb-cell">${cargaison.nbProduits()}</td>
                <td class="py-1 px-1 pd-cell">${dernierProduit.poids}kg</td>
                <td class="py-1 px-1">${cargaison.sommeTotaleC()}</td>
                <td class="py-1 px-1">En cours</td>
                <td class="py-1 px-1 flex flex-column">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white text-xl pr-3 font-bold rounded" onclick="showDetails('${cargaison.type}', ${cargaison.distance})">Détails</button>
                    <button class="bg-green-500 hover:bg-green-700 text-white text-xl font-bold ml-5 pr-3 rounded" onclick="ajouterProduit('${cargaison.type}', ${cargaison.distance})">Ajouter Produit</button>
                    <button class="bg-yellow-500 hover:bg-yellow-700 text-white text-xl font-bold ml-5 pr-3 rounded">Éditer</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold ml-5 text-xl pr-3 rounded">Supprimer</button>
                </td>
        `;

        tbody.appendChild(tr);

        // Call toggleTableColumns to ensure the correct columns are displayed after adding a new row
        const cargopleinSelect = document.getElementById('cargoplein') as HTMLSelectElement;
        toggleTableColumns(cargopleinSelect.value);
    }
}
//option d"affichage poids ou nb de proquit dans le tableau
const nbrproduct=document.getElementById('nb');
const poid=document.getElementById('pd');

document.getElementById('form-produit')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const libelleInput = <HTMLInputElement>document.getElementById('libelle-produit');
    const poidsInput = <HTMLInputElement>document.getElementById('poids-produit');
    const typeInput = <HTMLSelectElement>document.getElementById('type-produit');
    const toxiciteInput = <HTMLInputElement>document.getElementById('toxicite-produit');

    const libelle = libelleInput.value;
    const poids = parseFloat(poidsInput.value);
    const type = typeInput.value;

    let produit: Produit | null = null;
    switch (type) {
        case 'alimentaire':
            produit = new Alimentaire(libelle, poids);
            break;
        case 'chimique':
            const toxicite = parseInt(toxiciteInput.value);
            produit = new Chimique(libelle, poids, toxicite);
            break;
        case 'fragile':
            produit = new Fragile(libelle, poids);
            break;
            case 'incassable':
                produit = new Incassable(libelle, poids);
                break;
        }
    
        if (produit) {
            console.log(`Produit ajouté: ${produit.info()}`);
        } else {
            console.log("Type de produit invalide.");
        }
    });
    
    document.addEventListener('DOMContentLoaded', (event) => {
        const modal = document.getElementById('details-modal');
        const closeButton = document.querySelector('.close-button');
    
        if (modal && closeButton) {
            closeButton.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            });
    
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.classList.add('hidden');
                    modal.style.display = 'none';
                }
            });
        }

        const cargopleinSelect = document.getElementById('cargoplein') as HTMLSelectElement;

        if (cargopleinSelect) {
            cargopleinSelect.addEventListener('change', (e) => {
                const selectedValue = (e.target as HTMLSelectElement).value;
                toggleTableColumns(selectedValue);
            });
    
            // Initial toggle based on the default value
            toggleTableColumns(cargopleinSelect.value);
        }
    });



    function toggleTableColumns(value: string) {
        const nbColumn = document.getElementById('nb') as HTMLTableHeaderCellElement;
        const pdColumn = document.getElementById('pd') as HTMLTableHeaderCellElement;
    
        const nbCells = document.querySelectorAll('.nb-cell') as NodeListOf<HTMLTableCellElement>;
        const pdCells = document.querySelectorAll('.pd-cell') as NodeListOf<HTMLTableCellElement>;
    
        if (value === 'poids') {
            nbColumn.style.display = 'none';
            pdColumn.style.display = '';
            nbCells.forEach(cell => cell.style.display = 'none');
            pdCells.forEach(cell => cell.style.display = '');
        } else {
            nbColumn.style.display = '';
            pdColumn.style.display = 'none';
            nbCells.forEach(cell => cell.style.display = '');
            pdCells.forEach(cell => cell.style.display = 'none');
        }
    }

    
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const millieu = document.getElementById("main");
    const accueil = document.getElementById("accueil");
    const accecargaison = document.getElementById("btncargaison");
    const footer = document.getElementById("main1");
    
    burger.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
    
    burger.style.marginLeft = "-250px";
    burger.style.zIndex = "1";
    burger.style.transform = "translateX(100%)";
    burger.style.transition = "transform 0.3s ase-in-out";
    
    const cont = document.getElementById("container");
    cont.style.marginLeft = "330px";
    
    const container = document.getElementById("section");
    const Cargaisons = document.getElementById("cargaison");
    const produit = document.getElementById("produit");
    const section1 = document.getElementById("section1");
    section1.style.display = "none";
    container.style.display = "none";
    
    Cargaisons.addEventListener("click", () => {
        container.style.display = "block";
        section1.style.display = "none";
        millieu.style.display = "none";
        footer.style.marginTop = "550px";
    });
    
    produit.addEventListener("click", () => {
        section1.style.display = "block";
        container.style.display = "none";
        millieu.style.display = "none";
        footer.style.marginTop = "43%";
    });
    
    footer.style.marginTop = "-8px";
    
    accueil.addEventListener("click", () => {
        millieu.style.display = "block";
        section1.style.display = "none";
        container.style.display = "none";
        footer.style.marginTop = "1%";
    });
    
    accecargaison.addEventListener("click", () => {
        container.style.display = "block";
        millieu.style.display = "none";
        section1.style.display = "none";
        footer.style.marginTop = "350px";
    });
    
    const images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/auto.webp'];
    let currentIndex = 0;
    
    function changeBackgroundImage() {
        document.getElementById('main').style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }
    
    setInterval(changeBackgroundImage, 2000);
    
    const modal = document.getElementById("modale");
    modal.style.display = "none";
    
    const modals = document.getElementById("modals");
    modals.addEventListener("click", () => {
        modal.style.display = "block";
    });
    
    const fermer = document.getElementById("annuler");
    fermer.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    document.getElementById('cargoplein').addEventListener('change', function () {
        const nbproduits = document.getElementById('nbproduits');
        nbproduits.style.display = this.value === 'nbproduit' ? 'block' : 'none';
    });

    // map


    let map = L.map('map').setView([48.8566, 2.3522], 13); // Centre sur Paris par défaut

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let startMarker, endMarker;
    let startPoint, endPoint;

    let geocoder = L.Control.Geocoder.nominatim();

    document.getElementById('lieu_depart').addEventListener('focus', () => {
        map.once('click', function(e) {
            if (startMarker) {
                map.removeLayer(startMarker);
            }
            startMarker = L.marker(e.latlng).addTo(map);
            startPoint = e.latlng;
            geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
                let result = results[0];
                document.getElementById('lieu_depart').value = result.name;
            });
            calculateDistance();
        });
    });

    document.getElementById('lieu_arrive').addEventListener('focus', () => {
        map.once('click', function(e) {
            if (endMarker) {
                map.removeLayer(endMarker);
            }
            endMarker = L.marker(e.latlng).addTo(map);
            endPoint = e.latlng;
            geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function(results) {
                let result = results[0];
                document.getElementById('lieu_arrive').value = result.name;
            });
            calculateDistance();
        });
    });

    function calculateDistance() {
        if (startPoint && endPoint) {
            let start = [startPoint.lat, startPoint.lng];
            let end = [endPoint.lat, endPoint.lng];

            let router = L.Routing.control({
                waypoints: [
                    L.latLng(start[0], start[1]),
                    L.latLng(end[0], end[1])
                ],
                createMarker: function() { return null; },
                routeWhileDragging: false,
                addWaypoints: false
            }).addTo(map);

            router.on('routesfound', function(e) {
                let routes = e.routes;
                let summary = routes[0].summary;
                document.getElementById('distance').value = (summary.totalDistance / 1000).toFixed(2); // distance en km
                router.remove();
            });
        }
    }

   
