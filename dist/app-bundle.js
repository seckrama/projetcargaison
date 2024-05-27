/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Model/Cargaison.ts":
/*!********************************!*\
  !*** ./src/Model/Cargaison.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CargaisonRoutiere = exports.CargaisonMaritime = exports.CargaisonAerienne = exports.Cargaison = void 0;
var Cargaison = /** @class */ (function () {
    function Cargaison(distance, type) {
        this.produits = [];
        this.distance = distance;
        this.type = type;
    }
    Cargaison.prototype.ajouterProduit = function (produit) {
        if (this.produits.length >= 10) {
            console.log("Cargaison pleine, impossible d'ajouter plus de produits.");
            return;
        }
        this.produits.push(produit);
        console.log("Produit ajout\u00E9. Montant total: ".concat(this.sommeTotaleC(), "F"));
    };
    Cargaison.prototype.nbProduits = function () {
        return this.produits.length;
    };
    Cargaison.prototype.calculerFrais = function (produit) {
        var frais = 0;
        switch (this.type) {
            case "maritime":
                frais = 100 * produit.getPoids() * this.distance;
                break;
            case "aerienne":
                frais = 300 * produit.getPoids() * this.distance;
                break;
            case "routiere":
                frais = 90 * produit.getPoids() * this.distance;
                break;
        }
        return frais;
    };
    Cargaison.prototype.sommeTotaleC = function () {
        var _this = this;
        return this.produits.reduce(function (acc, produit) { return acc + _this.calculerFrais(produit); }, 0);
    };
    Cargaison.generateUniqueCode = function () {
        // Générer un code unique (par exemple, un identifiant aléatoire)
        return Math.random().toString(36).substr(2, 9); // Exemple de génération d'identifiant aléatoire
    };
    Cargaison.poidsMaximal = 10000; // Poids maximal autorisé pour toutes les cargaisons
    return Cargaison;
}());
exports.Cargaison = Cargaison;
var CargaisonAerienne = /** @class */ (function (_super) {
    __extends(CargaisonAerienne, _super);
    function CargaisonAerienne(distance) {
        return _super.call(this, distance, "aerienne") || this;
    }
    CargaisonAerienne.prototype.info = function () {
        return "Cargaison A\u00E9rienne - Distance: ".concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits());
    };
    CargaisonAerienne.codeUnique = "AIR123"; // Code unique pour les cargaisons aériennes
    return CargaisonAerienne;
}(Cargaison));
exports.CargaisonAerienne = CargaisonAerienne;
var CargaisonMaritime = /** @class */ (function (_super) {
    __extends(CargaisonMaritime, _super);
    function CargaisonMaritime(distance) {
        return _super.call(this, distance, "maritime") || this;
    }
    CargaisonMaritime.prototype.info = function () {
        return "Cargaison Maritime - Distance: ".concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits());
    };
    CargaisonMaritime.codeUnique = "SEA456"; // Code unique pour les cargaisons maritimes
    return CargaisonMaritime;
}(Cargaison));
exports.CargaisonMaritime = CargaisonMaritime;
var CargaisonRoutiere = /** @class */ (function (_super) {
    __extends(CargaisonRoutiere, _super);
    function CargaisonRoutiere(distance) {
        return _super.call(this, distance, "routiere") || this;
    }
    CargaisonRoutiere.prototype.info = function () {
        return "Cargaison Routi\u00E8re - Distance: ".concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits());
    };
    CargaisonRoutiere.codeUnique = "ROAD789"; // Code unique pour les cargaisons routières
    return CargaisonRoutiere;
}(Cargaison));
exports.CargaisonRoutiere = CargaisonRoutiere;


/***/ }),

/***/ "./src/Model/Produit.ts":
/*!******************************!*\
  !*** ./src/Model/Produit.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Incassable = exports.Fragile = exports.Chimique = exports.Alimentaire = exports.Produit = void 0;
var Produit = /** @class */ (function () {
    function Produit(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    Produit.prototype.getLibelle = function () {
        return this.libelle;
    };
    Produit.prototype.setLibelle = function (libelle) {
        this.libelle = libelle;
    };
    Produit.prototype.getPoids = function () {
        return this.poids;
    };
    Produit.prototype.setPoids = function (poids) {
        this.poids = poids;
    };
    return Produit;
}());
exports.Produit = Produit;
var Alimentaire = /** @class */ (function (_super) {
    __extends(Alimentaire, _super);
    function Alimentaire(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    Alimentaire.prototype.info = function () {
        return "Alimentaire - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Alimentaire;
}(Produit));
exports.Alimentaire = Alimentaire;
var Chimique = /** @class */ (function (_super) {
    __extends(Chimique, _super);
    function Chimique(libelle, poids, toxicite) {
        var _this = _super.call(this, libelle, poids) || this;
        _this.toxicite = toxicite;
        return _this;
    }
    Chimique.prototype.getToxicite = function () {
        return this.toxicite;
    };
    Chimique.prototype.setToxicite = function (toxicite) {
        this.toxicite = toxicite;
    };
    Chimique.prototype.info = function () {
        return "Chimique - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg, Toxicit\u00E9: ").concat(this.toxicite);
    };
    return Chimique;
}(Produit));
exports.Chimique = Chimique;
var Materiel = /** @class */ (function (_super) {
    __extends(Materiel, _super);
    function Materiel(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    return Materiel;
}(Produit));
var Fragile = /** @class */ (function (_super) {
    __extends(Fragile, _super);
    function Fragile(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    Fragile.prototype.info = function () {
        return "Fragile - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Fragile;
}(Materiel));
exports.Fragile = Fragile;
var Incassable = /** @class */ (function (_super) {
    __extends(Incassable, _super);
    function Incassable(libelle, poids) {
        return _super.call(this, libelle, poids) || this;
    }
    Incassable.prototype.info = function () {
        return "Incassable - Libell\u00E9: ".concat(this.getLibelle(), ", Poids: ").concat(this.getPoids(), "kg");
    };
    return Incassable;
}(Materiel));
exports.Incassable = Incassable;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Produit_1 = __webpack_require__(/*! ./Model/Produit */ "./src/Model/Produit.ts");
var Cargaison_1 = __webpack_require__(/*! ./Model/Cargaison */ "./src/Model/Cargaison.ts");
var cargaisons = [];
function showDetails(type, distance) {
    var cargaison = cargaisons.find(function (c) { return c.type === type && c.distance === distance; });
    if (cargaison) {
        var details = "\n        <div style=\"margin-left:20px\">\n\n            <h2>D\u00E9tails de la Cargaison</h2>\n            <p>Type: ".concat(cargaison.type, "</p>\n            <p>Distance: ").concat(cargaison.distance, " km</p>\n            <p>Nombre de produits: ").concat(cargaison.nbProduits(), "</p>\n            <p>Montant total: ").concat(cargaison.sommeTotaleC(), " F</p>\n            <ul>\n                ").concat(cargaison.produits.map(function (produit) { return "<li>".concat(produit.info(), "</li>"); }).join(''), "\n            </ul>\n            </div>\n        ");
        document.getElementById('details-container').innerHTML = details;
        var modal_1 = document.getElementById('details-modal');
        if (modal_1) {
            modal_1.classList.remove('hidden');
            modal_1.style.display = 'block';
            modal_1.style.marginLeft = "400px";
            modal_1.style.zIndex = "30";
            modal_1.style.backgroundColor = "gray";
            modal_1.style.width = "30%";
            modal_1.style.color = "white";
        }
    }
    else {
        console.log("Cargaison non trouvée.");
    }
}
window.showDetails = showDetails;
(_a = document.getElementById('submit-cargaison')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.preventDefault();
    var distanceInput = document.getElementById('distance');
    var typeInput = document.getElementById('type-cargaison');
    var distance = parseInt(distanceInput.value);
    var type = typeInput.value;
    var cargaison = null;
    switch (type) {
        case 'aerienne':
            cargaison = new Cargaison_1.CargaisonAerienne(distance);
            break;
        case 'maritime':
            cargaison = new Cargaison_1.CargaisonMaritime(distance);
            break;
        case 'routiere':
            cargaison = new Cargaison_1.CargaisonRoutiere(distance);
            break;
    }
    if (cargaison) {
        // Récupération des valeurs du produit à partir du formulaire
        var libelleProduitInput = document.getElementById('libelle-produit');
        var poidsProduitInput = document.getElementById('poids-produit');
        var typeProduitInput = document.getElementById('type-produit');
        var libelleProduit = libelleProduitInput.value;
        var poidsProduit = parseInt(poidsProduitInput.value);
        var typeProduit = typeProduitInput.value;
        // Création de l'instance de Produit
        var produit_1;
        switch (typeProduit) {
            case 'alimentaire':
                produit_1 = new Produit_1.Alimentaire(libelleProduit, poidsProduit);
                break;
            case 'chimique':
                produit_1 = new Produit_1.Chimique(libelleProduit, poidsProduit);
                break;
            case 'fragile':
                produit_1 = new Produit_1.Fragile(libelleProduit, poidsProduit);
                break;
            case 'incassable':
                produit_1 = new Produit_1.Incassable(libelleProduit, poidsProduit);
                break;
            default:
                produit_1 = new Produit_1.Produit(libelleProduit, poidsProduit);
        }
        // Ajout du produit à la cargaison
        cargaison.ajouterProduit(produit_1);
        cargaisons.push(cargaison);
        console.log("Cargaison ajout\u00E9e: ".concat(cargaison.info()));
        addCargaisonToTable(cargaison);
    }
    else {
        console.log("Type de cargaison invalide.");
    }
});
function addCargaisonToTable(cargaison) {
    var typeCargaison = document.getElementById('type-cargaison').value;
    var tbody = document.querySelector('#results tbody');
    if (tbody) {
        var tr = document.createElement('tr');
        tr.classList.add('border-b');
        // Récupération du produit ajouté à la cargaison
        var dernierProduit = cargaison.produits[cargaison.produits.length - 1];
        tr.innerHTML = "\n            <td>".concat(typeCargaison === 'aerienne' ? Cargaison_1.CargaisonAerienne.codeUnique :
            typeCargaison === 'maritime' ? Cargaison_1.CargaisonMaritime.codeUnique :
                typeCargaison === 'routiere' ? Cargaison_1.CargaisonRoutiere.codeUnique : 'Code non défini', "</td>\n                <td class=\"py-1 px-1\">").concat(cargaison.type, "</td>\n                <td class=\"py-1 px-1 pl-10\">").concat(cargaison.distance, "km</td>\n                <td class=\"py-1 px-1 nb-cell\">").concat(cargaison.nbProduits(), "</td>\n                <td class=\"py-1 px-1 pd-cell\">").concat(dernierProduit.poids, "kg</td>\n                <td class=\"py-1 px-1\">").concat(cargaison.sommeTotaleC(), "</td>\n                <td class=\"py-1 px-1\">En cours</td>\n                <td class=\"py-1 px-1 flex flex-column\">\n                    <button class=\"bg-blue-500 hover:bg-blue-700 text-white text-xl pr-3 font-bold rounded\" onclick=\"showDetails('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">D\u00E9tails</button>\n                    <button class=\"bg-green-500 hover:bg-green-700 text-white text-xl font-bold ml-5 pr-3 rounded\" onclick=\"ajouterProduit('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">Ajouter Produit</button>\n                    <button class=\"bg-yellow-500 hover:bg-yellow-700 text-white text-xl font-bold ml-5 pr-3 rounded\">\u00C9diter</button>\n                    <button class=\"bg-red-500 hover:bg-red-700 text-white font-bold ml-5 text-xl pr-3 rounded\">Supprimer</button>\n                </td>\n        ");
        tbody.appendChild(tr);
        // Call toggleTableColumns to ensure the correct columns are displayed after adding a new row
        var cargopleinSelect = document.getElementById('cargoplein');
        toggleTableColumns(cargopleinSelect.value);
    }
}
//option d"affichage poids ou nb de proquit dans le tableau
var nbrproduct = document.getElementById('nb');
var poid = document.getElementById('pd');
(_b = document.getElementById('form-produit')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', function (e) {
    e.preventDefault();
    var libelleInput = document.getElementById('libelle-produit');
    var poidsInput = document.getElementById('poids-produit');
    var typeInput = document.getElementById('type-produit');
    var toxiciteInput = document.getElementById('toxicite-produit');
    var libelle = libelleInput.value;
    var poids = parseFloat(poidsInput.value);
    var type = typeInput.value;
    var produit = null;
    switch (type) {
        case 'alimentaire':
            produit = new Produit_1.Alimentaire(libelle, poids);
            break;
        case 'chimique':
            var toxicite = parseInt(toxiciteInput.value);
            produit = new Produit_1.Chimique(libelle, poids, toxicite);
            break;
        case 'fragile':
            produit = new Produit_1.Fragile(libelle, poids);
            break;
        case 'incassable':
            produit = new Produit_1.Incassable(libelle, poids);
            break;
    }
    if (produit) {
        console.log("Produit ajout\u00E9: ".concat(produit.info()));
    }
    else {
        console.log("Type de produit invalide.");
    }
});
document.addEventListener('DOMContentLoaded', function (event) {
    var modal = document.getElementById('details-modal');
    var closeButton = document.querySelector('.close-button');
    if (modal && closeButton) {
        closeButton.addEventListener('click', function () {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            }
        });
    }
    var cargopleinSelect = document.getElementById('cargoplein');
    if (cargopleinSelect) {
        cargopleinSelect.addEventListener('change', function (e) {
            var selectedValue = e.target.value;
            toggleTableColumns(selectedValue);
        });
        // Initial toggle based on the default value
        toggleTableColumns(cargopleinSelect.value);
    }
});
function toggleTableColumns(value) {
    var nbColumn = document.getElementById('nb');
    var pdColumn = document.getElementById('pd');
    var nbCells = document.querySelectorAll('.nb-cell');
    var pdCells = document.querySelectorAll('.pd-cell');
    if (value === 'poids') {
        nbColumn.style.display = 'none';
        pdColumn.style.display = '';
        nbCells.forEach(function (cell) { return cell.style.display = 'none'; });
        pdCells.forEach(function (cell) { return cell.style.display = ''; });
    }
    else {
        nbColumn.style.display = '';
        pdColumn.style.display = 'none';
        nbCells.forEach(function (cell) { return cell.style.display = ''; });
        pdCells.forEach(function (cell) { return cell.style.display = 'none'; });
    }
}
var burger = document.getElementById('burger');
var sidebar = document.getElementById('sidebar');
var millieu = document.getElementById("main");
var accueil = document.getElementById("accueil");
var accecargaison = document.getElementById("btncargaison");
var footer = document.getElementById("main1");
burger.addEventListener('click', function () {
    sidebar.classList.toggle('show');
});
burger.style.marginLeft = "-250px";
burger.style.zIndex = "1";
burger.style.transform = "translateX(100%)";
burger.style.transition = "transform 0.3s ase-in-out";
var cont = document.getElementById("container");
cont.style.marginLeft = "330px";
var container = document.getElementById("section");
var Cargaisons = document.getElementById("cargaison");
var produit = document.getElementById("produit");
var section1 = document.getElementById("section1");
section1.style.display = "none";
container.style.display = "none";
Cargaisons.addEventListener("click", function () {
    container.style.display = "block";
    section1.style.display = "none";
    millieu.style.display = "none";
    footer.style.marginTop = "550px";
});
produit.addEventListener("click", function () {
    section1.style.display = "block";
    container.style.display = "none";
    millieu.style.display = "none";
    footer.style.marginTop = "43%";
});
footer.style.marginTop = "-8px";
accueil.addEventListener("click", function () {
    millieu.style.display = "block";
    section1.style.display = "none";
    container.style.display = "none";
    footer.style.marginTop = "1%";
});
accecargaison.addEventListener("click", function () {
    container.style.display = "block";
    millieu.style.display = "none";
    section1.style.display = "none";
    footer.style.marginTop = "350px";
});
var images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/avionss.jpg'];
var currentIndex = 0;
function changeBackgroundImage() {
    document.getElementById('main').style.backgroundImage = "url('".concat(images[currentIndex], "')");
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 2000);
var modal = document.getElementById("modale");
modal.style.display = "none";
var modals = document.getElementById("modals");
modals.addEventListener("click", function () {
    modal.style.display = "block";
});
var fermer = document.getElementById("annuler");
fermer.addEventListener("click", function () {
    modal.style.display = "none";
});
document.getElementById('cargoplein').addEventListener('change', function () {
    var nbproduits = document.getElementById('nbproduits');
    nbproduits.style.display = this.value === 'nbproduit' ? 'block' : 'none';
});
// map
var map = L.map('map').setView([48.8566, 2.3522], 13); // Centre sur Paris par défaut
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var startMarker, endMarker;
var startPoint, endPoint;
var geocoder = L.Control.Geocoder.nominatim();
document.getElementById('lieu_depart').addEventListener('focus', function () {
    map.once('click', function (e) {
        if (startMarker) {
            map.removeLayer(startMarker);
        }
        startMarker = L.marker(e.latlng).addTo(map);
        startPoint = e.latlng;
        geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function (results) {
            var result = results[0];
            document.getElementById('lieu_depart').value = result.name;
        });
        calculateDistance();
    });
});
document.getElementById('lieu_arrive').addEventListener('focus', function () {
    map.once('click', function (e) {
        if (endMarker) {
            map.removeLayer(endMarker);
        }
        endMarker = L.marker(e.latlng).addTo(map);
        endPoint = e.latlng;
        geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), function (results) {
            var result = results[0];
            document.getElementById('lieu_arrive').value = result.name;
        });
        calculateDistance();
    });
});
function calculateDistance() {
    if (startPoint && endPoint) {
        var start = [startPoint.lat, startPoint.lng];
        var end = [endPoint.lat, endPoint.lng];
        var router_1 = L.Routing.control({
            waypoints: [
                L.latLng(start[0], start[1]),
                L.latLng(end[0], end[1])
            ],
            createMarker: function () { return null; },
            routeWhileDragging: false,
            addWaypoints: false
        }).addTo(map);
        router_1.on('routesfound', function (e) {
            var routes = e.routes;
            var summary = routes[0].summary;
            document.getElementById('distance').value = (summary.totalDistance / 1000).toFixed(2); // distance en km
            router_1.remove();
        });
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBRWQsUUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBUyxDQUFDO1lBQy9CLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNoQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1lBQ3hHLFFBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvLi9zcmMvTW9kZWwvQ2FyZ2Fpc29uLnRzIiwid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL01vZGVsL1Byb2R1aXQudHMiLCJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamV0dHNwaHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gJy4vUHJvZHVpdCc7XG5cbmFic3RyYWN0IGNsYXNzIENhcmdhaXNvbiB7XG4gICAgc3RhdGljIHBvaWRzTWF4aW1hbDogbnVtYmVyID0gMTAwMDA7IC8vIFBvaWRzIG1heGltYWwgYXV0b3Jpc8OpIHBvdXIgdG91dGVzIGxlcyBjYXJnYWlzb25zXG5cblxuICAgIHB1YmxpYyBwcm9kdWl0czogUHJvZHVpdFtdID0gW107XG4gICAgcHVibGljIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgcHVibGljIGFqb3V0ZXJQcm9kdWl0KHByb2R1aXQ6IFByb2R1aXQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVpdHMubGVuZ3RoID49IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhcmdhaXNvbiBwbGVpbmUsIGltcG9zc2libGUgZCdham91dGVyIHBsdXMgZGUgcHJvZHVpdHMuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZHVpdHMucHVzaChwcm9kdWl0KTtcbiAgICAgICAgY29uc29sZS5sb2coYFByb2R1aXQgYWpvdXTDqS4gTW9udGFudCB0b3RhbDogJHt0aGlzLnNvbW1lVG90YWxlQygpfUZgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmJQcm9kdWl0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWl0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGN1bGVyRnJhaXMocHJvZHVpdDogUHJvZHVpdCk6IG51bWJlciB7XG4gICAgICAgIGxldCBmcmFpczogbnVtYmVyID0gMDtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtYXJpdGltZVwiOlxuICAgICAgICAgICAgICAgIGZyYWlzID0gMTAwICogcHJvZHVpdC5nZXRQb2lkcygpICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZXJpZW5uZVwiOlxuICAgICAgICAgICAgICAgIGZyYWlzID0gMzAwICogcHJvZHVpdC5nZXRQb2lkcygpICogdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyb3V0aWVyZVwiOlxuICAgICAgICAgICAgICAgIGZyYWlzID0gOTAgKiBwcm9kdWl0LmdldFBvaWRzKCkgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc29tbWVUb3RhbGVDKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1aXRzLnJlZHVjZSgoYWNjLCBwcm9kdWl0KSA9PiBhY2MgKyB0aGlzLmNhbGN1bGVyRnJhaXMocHJvZHVpdCksIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbmZvKCk6IHN0cmluZztcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIC8vIEfDqW7DqXJlciB1biBjb2RlIHVuaXF1ZSAocGFyIGV4ZW1wbGUsIHVuIGlkZW50aWZpYW50IGFsw6lhdG9pcmUpXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7IC8vIEV4ZW1wbGUgZGUgZ8OpbsOpcmF0aW9uIGQnaWRlbnRpZmlhbnQgYWzDqWF0b2lyZVxuICAgIH1cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uQWVyaWVubmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIHN0YXRpYyBjb2RlVW5pcXVlOiBzdHJpbmcgPSBcIkFJUjEyM1wiOyAvLyBDb2RlIHVuaXF1ZSBwb3VyIGxlcyBjYXJnYWlzb25zIGHDqXJpZW5uZXNcbiAgICBjb25zdHJ1Y3RvcihkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKGRpc3RhbmNlLCBcImFlcmllbm5lXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIEHDqXJpZW5uZSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9YDtcbiAgICB9XG59XG5cbmNsYXNzIENhcmdhaXNvbk1hcml0aW1lIGV4dGVuZHMgQ2FyZ2Fpc29uIHtcbiAgICBzdGF0aWMgY29kZVVuaXF1ZTogc3RyaW5nID0gXCJTRUE0NTZcIjsgLy8gQ29kZSB1bmlxdWUgcG91ciBsZXMgY2FyZ2Fpc29ucyBtYXJpdGltZXNcblxuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwibWFyaXRpbWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBDYXJnYWlzb24gTWFyaXRpbWUgLSBEaXN0YW5jZTogJHt0aGlzLmRpc3RhbmNlfSBrbSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubmJQcm9kdWl0cygpfWA7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgQ2FyZ2Fpc29uUm91dGllcmUgZXh0ZW5kcyBDYXJnYWlzb24ge1xuICAgIHN0YXRpYyBjb2RlVW5pcXVlOiBzdHJpbmcgPSBcIlJPQUQ3ODlcIjsgLy8gQ29kZSB1bmlxdWUgcG91ciBsZXMgY2FyZ2Fpc29ucyByb3V0acOocmVzXG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBzdXBlcihkaXN0YW5jZSwgXCJyb3V0aWVyZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYENhcmdhaXNvbiBSb3V0acOocmUgLSBEaXN0YW5jZTogJHt0aGlzLmRpc3RhbmNlfSBrbSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubmJQcm9kdWl0cygpfWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBDYXJnYWlzb24sIENhcmdhaXNvbkFlcmllbm5lLCBDYXJnYWlzb25NYXJpdGltZSwgQ2FyZ2Fpc29uUm91dGllcmUgfTtcbiAgICAiLCJhYnN0cmFjdCBjbGFzcyBQcm9kdWl0IHtcbiAgICBwdWJsaWMgbGliZWxsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwb2lkczogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobGliZWxsZTogc3RyaW5nLCBwb2lkczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGliZWxsZSA9IGxpYmVsbGU7XG4gICAgICAgIHRoaXMucG9pZHMgPSBwb2lkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGliZWxsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5saWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMaWJlbGxlKGxpYmVsbGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpYmVsbGUgPSBsaWJlbGxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb2lkcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb2lkcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9pZHMocG9pZHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnBvaWRzID0gcG9pZHM7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluZm8oKTogc3RyaW5nO1xufVxuXG5jbGFzcyBBbGltZW50YWlyZSBleHRlbmRzIFByb2R1aXQge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihsaWJlbGxlLCBwb2lkcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBBbGltZW50YWlyZSAtIExpYmVsbMOpOiAke3RoaXMuZ2V0TGliZWxsZSgpfSwgUG9pZHM6ICR7dGhpcy5nZXRQb2lkcygpfWtnYDtcbiAgICB9XG59XG5cbmNsYXNzIENoaW1pcXVlIGV4dGVuZHMgUHJvZHVpdCB7XG4gICAgcHVibGljIHRveGljaXRlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIsIHRveGljaXRlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMpO1xuICAgICAgICB0aGlzLnRveGljaXRlID0gdG94aWNpdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRveGljaXRlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRveGljaXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUb3hpY2l0ZSh0b3hpY2l0ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG94aWNpdGUgPSB0b3hpY2l0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYENoaW1pcXVlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2csIFRveGljaXTDqTogJHt0aGlzLnRveGljaXRlfWA7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBNYXRlcmllbCBleHRlbmRzIFByb2R1aXQge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihsaWJlbGxlLCBwb2lkcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluZm8oKTogc3RyaW5nO1xufVxuXG5jbGFzcyBGcmFnaWxlIGV4dGVuZHMgTWF0ZXJpZWwge1xuICAgIGNvbnN0cnVjdG9yKGxpYmVsbGU6IHN0cmluZywgcG9pZHM6IG51bWJlcikge1xuICAgICAgICBzdXBlcihsaWJlbGxlLCBwb2lkcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBGcmFnaWxlIC0gTGliZWxsw6k6ICR7dGhpcy5nZXRMaWJlbGxlKCl9LCBQb2lkczogJHt0aGlzLmdldFBvaWRzKCl9a2dgO1xuICAgIH1cbn1cblxuY2xhc3MgSW5jYXNzYWJsZSBleHRlbmRzIE1hdGVyaWVsIHtcbiAgICBjb25zdHJ1Y3RvcihsaWJlbGxlOiBzdHJpbmcsIHBvaWRzOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIobGliZWxsZSwgcG9pZHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgSW5jYXNzYWJsZSAtIExpYmVsbMOpOiAke3RoaXMuZ2V0TGliZWxsZSgpfSwgUG9pZHM6ICR7dGhpcy5nZXRQb2lkcygpfWtnYDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2R1aXQsIEFsaW1lbnRhaXJlLCBDaGltaXF1ZSwgRnJhZ2lsZSwgSW5jYXNzYWJsZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFByb2R1aXQsIEFsaW1lbnRhaXJlLCBDaGltaXF1ZSwgRnJhZ2lsZSwgSW5jYXNzYWJsZSB9IGZyb20gJy4vTW9kZWwvUHJvZHVpdCc7XG5pbXBvcnQgeyBDYXJnYWlzb24sIENhcmdhaXNvbkFlcmllbm5lLCBDYXJnYWlzb25NYXJpdGltZSwgQ2FyZ2Fpc29uUm91dGllcmUgfSBmcm9tICcuL01vZGVsL0NhcmdhaXNvbic7XG5cbmxldCBjYXJnYWlzb25zOiBDYXJnYWlzb25bXSA9IFtdO1xuXG5mdW5jdGlvbiBzaG93RGV0YWlscyh0eXBlOiBzdHJpbmcsIGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICBjb25zdCBjYXJnYWlzb24gPSBjYXJnYWlzb25zLmZpbmQoYyA9PiBjLnR5cGUgPT09IHR5cGUgJiYgYy5kaXN0YW5jZSA9PT0gZGlzdGFuY2UpO1xuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjIwcHhcIj5cblxuICAgICAgICAgICAgPGgyPkTDqXRhaWxzIGRlIGxhIENhcmdhaXNvbjwvaDI+XG4gICAgICAgICAgICA8cD5UeXBlOiAke2NhcmdhaXNvbi50eXBlfTwvcD5cbiAgICAgICAgICAgIDxwPkRpc3RhbmNlOiAke2NhcmdhaXNvbi5kaXN0YW5jZX0ga208L3A+XG4gICAgICAgICAgICA8cD5Ob21icmUgZGUgcHJvZHVpdHM6ICR7Y2FyZ2Fpc29uLm5iUHJvZHVpdHMoKX08L3A+XG4gICAgICAgICAgICA8cD5Nb250YW50IHRvdGFsOiAke2NhcmdhaXNvbi5zb21tZVRvdGFsZUMoKX0gRjwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAke2NhcmdhaXNvbi5wcm9kdWl0cy5tYXAocHJvZHVpdCA9PiBgPGxpPiR7cHJvZHVpdC5pbmZvKCl9PC9saT5gKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtY29udGFpbmVyJykhLmlubmVySFRNTCA9IGRldGFpbHM7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUubWFyZ2luTGVmdCA9XCI0MDBweFwiXG4gICAgICAgICAgICBtb2RhbC5zdHlsZS56SW5kZXggPVwiMzBcIlxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cImdyYXlcIlxuICAgICAgICAgICAgbW9kYWwuc3R5bGUud2lkdGggPVwiMzAlXCI7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5jb2xvciA9XCJ3aGl0ZVwiXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcmdhaXNvbiBub24gdHJvdXbDqWUuXCIpO1xuICAgIH1cbn1cblxuKHdpbmRvdyBhcyBhbnkpLnNob3dEZXRhaWxzID0gc2hvd0RldGFpbHM7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtY2FyZ2Fpc29uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGlzdGFuY2VJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXN0YW5jZScpO1xuICAgIGNvbnN0IHR5cGVJbnB1dCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1jYXJnYWlzb24nKTtcblxuICAgIGNvbnN0IGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVJbnB1dC52YWx1ZTtcblxuICAgIGxldCBjYXJnYWlzb246IENhcmdhaXNvbiB8IG51bGwgPSBudWxsO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhZXJpZW5uZSc6XG4gICAgICAgICAgICBjYXJnYWlzb24gPSBuZXcgQ2FyZ2Fpc29uQWVyaWVubmUoZGlzdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21hcml0aW1lJzpcbiAgICAgICAgICAgIGNhcmdhaXNvbiA9IG5ldyBDYXJnYWlzb25NYXJpdGltZShkaXN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncm91dGllcmUnOlxuICAgICAgICAgICAgY2FyZ2Fpc29uID0gbmV3IENhcmdhaXNvblJvdXRpZXJlKGRpc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgLy8gUsOpY3Vww6lyYXRpb24gZGVzIHZhbGV1cnMgZHUgcHJvZHVpdCDDoCBwYXJ0aXIgZHUgZm9ybXVsYWlyZVxuICAgICAgICBjb25zdCBsaWJlbGxlUHJvZHVpdElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpYmVsbGUtcHJvZHVpdCcpO1xuICAgICAgICBjb25zdCBwb2lkc1Byb2R1aXRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcy1wcm9kdWl0Jyk7XG4gICAgICAgIGNvbnN0IHR5cGVQcm9kdWl0SW5wdXQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtcHJvZHVpdCcpO1xuXG4gICAgICAgIGNvbnN0IGxpYmVsbGVQcm9kdWl0ID0gbGliZWxsZVByb2R1aXRJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcG9pZHNQcm9kdWl0ID0gcGFyc2VJbnQocG9pZHNQcm9kdWl0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCB0eXBlUHJvZHVpdCA9IHR5cGVQcm9kdWl0SW5wdXQudmFsdWU7XG5cbiAgICAgICAgLy8gQ3LDqWF0aW9uIGRlIGwnaW5zdGFuY2UgZGUgUHJvZHVpdFxuICAgICAgICBsZXQgcHJvZHVpdDogUHJvZHVpdDtcbiAgICAgICAgc3dpdGNoICh0eXBlUHJvZHVpdCkge1xuICAgICAgICAgICAgY2FzZSAnYWxpbWVudGFpcmUnOlxuICAgICAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgQWxpbWVudGFpcmUobGliZWxsZVByb2R1aXQsIHBvaWRzUHJvZHVpdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGltaXF1ZSc6XG4gICAgICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBDaGltaXF1ZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZyYWdpbGUnOlxuICAgICAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgRnJhZ2lsZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luY2Fzc2FibGUnOlxuICAgICAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgSW5jYXNzYWJsZShsaWJlbGxlUHJvZHVpdCwgcG9pZHNQcm9kdWl0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBQcm9kdWl0KGxpYmVsbGVQcm9kdWl0LCBwb2lkc1Byb2R1aXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWpvdXQgZHUgcHJvZHVpdCDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgY2FyZ2Fpc29uLmFqb3V0ZXJQcm9kdWl0KHByb2R1aXQpO1xuXG4gICAgICAgIGNhcmdhaXNvbnMucHVzaChjYXJnYWlzb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2FyZ2Fpc29uIGFqb3V0w6llOiAke2NhcmdhaXNvbi5pbmZvKCl9YCk7XG4gICAgICAgIGFkZENhcmdhaXNvblRvVGFibGUoY2FyZ2Fpc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGUgZGUgY2FyZ2Fpc29uIGludmFsaWRlLlwiKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gYWRkQ2FyZ2Fpc29uVG9UYWJsZShjYXJnYWlzb246IENhcmdhaXNvbikge1xuICAgIGNvbnN0IHR5cGVDYXJnYWlzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1jYXJnYWlzb24nKS52YWx1ZTtcblxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMgdGJvZHknKTtcbiAgICBpZiAodGJvZHkpIHtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0ci5jbGFzc0xpc3QuYWRkKCdib3JkZXItYicpO1xuXG4gICAgICAgIC8vIFLDqWN1cMOpcmF0aW9uIGR1IHByb2R1aXQgYWpvdXTDqSDDoCBsYSBjYXJnYWlzb25cbiAgICAgICAgY29uc3QgZGVybmllclByb2R1aXQgPSBjYXJnYWlzb24ucHJvZHVpdHNbY2FyZ2Fpc29uLnByb2R1aXRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIHRyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDx0ZD4ke3R5cGVDYXJnYWlzb24gPT09ICdhZXJpZW5uZScgPyBDYXJnYWlzb25BZXJpZW5uZS5jb2RlVW5pcXVlIDpcbiAgICAgICAgICAgICAgICB0eXBlQ2FyZ2Fpc29uID09PSAnbWFyaXRpbWUnID8gQ2FyZ2Fpc29uTWFyaXRpbWUuY29kZVVuaXF1ZSA6XG4gICAgICAgICAgICAgICAgdHlwZUNhcmdhaXNvbiA9PT0gJ3JvdXRpZXJlJyA/IENhcmdhaXNvblJvdXRpZXJlLmNvZGVVbmlxdWUgOiAnQ29kZSBub24gZMOpZmluaSd9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0xIHB4LTFcIj4ke2NhcmdhaXNvbi50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktMSBweC0xIHBsLTEwXCI+JHtjYXJnYWlzb24uZGlzdGFuY2V9a208L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTEgcHgtMSBuYi1jZWxsXCI+JHtjYXJnYWlzb24ubmJQcm9kdWl0cygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktMSBweC0xIHBkLWNlbGxcIj4ke2Rlcm5pZXJQcm9kdWl0LnBvaWRzfWtnPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0xIHB4LTFcIj4ke2NhcmdhaXNvbi5zb21tZVRvdGFsZUMoKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTEgcHgtMVwiPkVuIGNvdXJzPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS0xIHB4LTEgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSB0ZXh0LXhsIHByLTMgZm9udC1ib2xkIHJvdW5kZWRcIiBvbmNsaWNrPVwic2hvd0RldGFpbHMoJyR7Y2FyZ2Fpc29uLnR5cGV9JywgJHtjYXJnYWlzb24uZGlzdGFuY2V9KVwiPkTDqXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgbWwtNSBwci0zIHJvdW5kZWRcIiBvbmNsaWNrPVwiYWpvdXRlclByb2R1aXQoJyR7Y2FyZ2Fpc29uLnR5cGV9JywgJHtjYXJnYWlzb24uZGlzdGFuY2V9KVwiPkFqb3V0ZXIgUHJvZHVpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmcteWVsbG93LTUwMCBob3ZlcjpiZy15ZWxsb3ctNzAwIHRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGQgbWwtNSBwci0zIHJvdW5kZWRcIj7DiWRpdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgbWwtNSB0ZXh0LXhsIHByLTMgcm91bmRlZFwiPlN1cHByaW1lcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIGA7XG5cbiAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xuXG4gICAgICAgIC8vIENhbGwgdG9nZ2xlVGFibGVDb2x1bW5zIHRvIGVuc3VyZSB0aGUgY29ycmVjdCBjb2x1bW5zIGFyZSBkaXNwbGF5ZWQgYWZ0ZXIgYWRkaW5nIGEgbmV3IHJvd1xuICAgICAgICBjb25zdCBjYXJnb3BsZWluU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgdG9nZ2xlVGFibGVDb2x1bW5zKGNhcmdvcGxlaW5TZWxlY3QudmFsdWUpO1xuICAgIH1cbn1cbi8vb3B0aW9uIGRcImFmZmljaGFnZSBwb2lkcyBvdSBuYiBkZSBwcm9xdWl0IGRhbnMgbGUgdGFibGVhdVxuY29uc3QgbmJycHJvZHVjdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmInKTtcbmNvbnN0IHBvaWQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkJyk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByb2R1aXQnKT8uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGliZWxsZUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpYmVsbGUtcHJvZHVpdCcpO1xuICAgIGNvbnN0IHBvaWRzSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMtcHJvZHVpdCcpO1xuICAgIGNvbnN0IHR5cGVJbnB1dCA9IDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1wcm9kdWl0Jyk7XG4gICAgY29uc3QgdG94aWNpdGVJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3hpY2l0ZS1wcm9kdWl0Jyk7XG5cbiAgICBjb25zdCBsaWJlbGxlID0gbGliZWxsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHBvaWRzID0gcGFyc2VGbG9hdChwb2lkc0lucHV0LnZhbHVlKTtcbiAgICBjb25zdCB0eXBlID0gdHlwZUlucHV0LnZhbHVlO1xuXG4gICAgbGV0IHByb2R1aXQ6IFByb2R1aXQgfCBudWxsID0gbnVsbDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYWxpbWVudGFpcmUnOlxuICAgICAgICAgICAgcHJvZHVpdCA9IG5ldyBBbGltZW50YWlyZShsaWJlbGxlLCBwb2lkcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hpbWlxdWUnOlxuICAgICAgICAgICAgY29uc3QgdG94aWNpdGUgPSBwYXJzZUludCh0b3hpY2l0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgQ2hpbWlxdWUobGliZWxsZSwgcG9pZHMsIHRveGljaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmcmFnaWxlJzpcbiAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgRnJhZ2lsZShsaWJlbGxlLCBwb2lkcyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luY2Fzc2FibGUnOlxuICAgICAgICAgICAgICAgIHByb2R1aXQgPSBuZXcgSW5jYXNzYWJsZShsaWJlbGxlLCBwb2lkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKHByb2R1aXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9kdWl0IGFqb3V0w6k6ICR7cHJvZHVpdC5pbmZvKCl9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlR5cGUgZGUgcHJvZHVpdCBpbnZhbGlkZS5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgXG4gICAgICAgIGlmIChtb2RhbCAmJiBjbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXJnb3BsZWluU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgICAgICBpZiAoY2FyZ29wbGVpblNlbGVjdCkge1xuICAgICAgICAgICAgY2FyZ29wbGVpblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbCB0b2dnbGUgYmFzZWQgb24gdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhjYXJnb3BsZWluU2VsZWN0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRhYmxlQ29sdW1ucyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5iQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iJykgYXMgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBkQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkJykgYXMgSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ7XG4gICAgXG4gICAgICAgIGNvbnN0IG5iQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmItY2VsbCcpIGFzIE5vZGVMaXN0T2Y8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+O1xuICAgICAgICBjb25zdCBwZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBkLWNlbGwnKSBhcyBOb2RlTGlzdE9mPEhUTUxUYWJsZUNlbGxFbGVtZW50PjtcbiAgICBcbiAgICAgICAgaWYgKHZhbHVlID09PSAncG9pZHMnKSB7XG4gICAgICAgICAgICBuYkNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcGRDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgbmJDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgICAgIHBkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5iQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIHBkQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBuYkNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XG4gICAgICAgICAgICBwZENlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xuICAgIGNvbnN0IG1pbGxpZXUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgYWNjdWVpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjdWVpbFwiKTtcbiAgICBjb25zdCBhY2NlY2FyZ2Fpc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5jYXJnYWlzb25cIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluMVwiKTtcbiAgICBcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0pO1xuICAgIFxuICAgIGJ1cmdlci5zdHlsZS5tYXJnaW5MZWZ0ID0gXCItMjUwcHhcIjtcbiAgICBidXJnZXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XG4gICAgYnVyZ2VyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiO1xuICAgIGJ1cmdlci5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC4zcyBhc2UtaW4tb3V0XCI7XG4gICAgXG4gICAgY29uc3QgY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICAgIGNvbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMzMwcHhcIjtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgQ2FyZ2Fpc29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZ2Fpc29uXCIpO1xuICAgIGNvbnN0IHByb2R1aXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1aXRcIik7XG4gICAgY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3Rpb24xXCIpO1xuICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxuICAgIENhcmdhaXNvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjU1MHB4XCI7XG4gICAgfSk7XG4gICAgXG4gICAgcHJvZHVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtaWxsaWV1LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNDMlXCI7XG4gICAgfSk7XG4gICAgXG4gICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiLThweFwiO1xuICAgIFxuICAgIGFjY3VlaWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjElXCI7XG4gICAgfSk7XG4gICAgXG4gICAgYWNjZWNhcmdhaXNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWlsbGlldS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiMzUwcHhcIjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBpbWFnZXMgPSBbJy4uL3B1YmxpYy9pbWcvYXZpb25zLmpwZycsICcuLi9wdWJsaWMvaW1nL2JhdGVhdS5qcGcnLCAnLi4vcHVibGljL2ltZy9hdmlvbnNzLmpwZyddO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhY2tncm91bmRJbWFnZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlc1tjdXJyZW50SW5kZXhdfScpYDtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAgc2V0SW50ZXJ2YWwoY2hhbmdlQmFja2dyb3VuZEltYWdlLCAyMDAwKTtcbiAgICBcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxlXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsc1wiKTtcbiAgICBtb2RhbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBmZXJtZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFubnVsZXJcIik7XG4gICAgZmVybWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbmJwcm9kdWl0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnByb2R1aXRzJyk7XG4gICAgICAgIG5icHJvZHVpdHMuc3R5bGUuZGlzcGxheSA9IHRoaXMudmFsdWUgPT09ICduYnByb2R1aXQnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcblxuICAgIC8vIG1hcFxuXG5cbiAgICBsZXQgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzQ4Ljg1NjYsIDIuMzUyMl0sIDEzKTsgLy8gQ2VudHJlIHN1ciBQYXJpcyBwYXIgZMOpZmF1dFxuXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICBsZXQgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcjtcbiAgICBsZXQgc3RhcnRQb2ludCwgZW5kUG9pbnQ7XG5cbiAgICBsZXQgZ2VvY29kZXIgPSBMLkNvbnRyb2wuR2VvY29kZXIubm9taW5hdGltKCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9kZXBhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgbWFwLm9uY2UoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0TWFya2VyKSB7XG4gICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHN0YXJ0TWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0TWFya2VyID0gTC5tYXJrZXIoZS5sYXRsbmcpLmFkZFRvKG1hcCk7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZS5sYXRsbmc7XG4gICAgICAgICAgICBnZW9jb2Rlci5yZXZlcnNlKGUubGF0bG5nLCBtYXAub3B0aW9ucy5jcnMuc2NhbGUobWFwLmdldFpvb20oKSksIGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9kZXBhcnQnKS52YWx1ZSA9IHJlc3VsdC5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxjdWxhdGVEaXN0YW5jZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1X2Fycml2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICBtYXAub25jZSgnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZW5kTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKGVuZE1hcmtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmRNYXJrZXIgPSBMLm1hcmtlcihlLmxhdGxuZykuYWRkVG8obWFwKTtcbiAgICAgICAgICAgIGVuZFBvaW50ID0gZS5sYXRsbmc7XG4gICAgICAgICAgICBnZW9jb2Rlci5yZXZlcnNlKGUubGF0bG5nLCBtYXAub3B0aW9ucy5jcnMuc2NhbGUobWFwLmdldFpvb20oKSksIGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9hcnJpdmUnKS52YWx1ZSA9IHJlc3VsdC5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxjdWxhdGVEaXN0YW5jZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZURpc3RhbmNlKCkge1xuICAgICAgICBpZiAoc3RhcnRQb2ludCAmJiBlbmRQb2ludCkge1xuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gW3N0YXJ0UG9pbnQubGF0LCBzdGFydFBvaW50LmxuZ107XG4gICAgICAgICAgICBsZXQgZW5kID0gW2VuZFBvaW50LmxhdCwgZW5kUG9pbnQubG5nXTtcblxuICAgICAgICAgICAgbGV0IHJvdXRlciA9IEwuUm91dGluZy5jb250cm9sKHtcbiAgICAgICAgICAgICAgICB3YXlwb2ludHM6IFtcbiAgICAgICAgICAgICAgICAgICAgTC5sYXRMbmcoc3RhcnRbMF0sIHN0YXJ0WzFdKSxcbiAgICAgICAgICAgICAgICAgICAgTC5sYXRMbmcoZW5kWzBdLCBlbmRbMV0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjcmVhdGVNYXJrZXI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICByb3V0ZVdoaWxlRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFkZFdheXBvaW50czogZmFsc2VcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICAgICAgICAgIHJvdXRlci5vbigncm91dGVzZm91bmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlcyA9IGUucm91dGVzO1xuICAgICAgICAgICAgICAgIGxldCBzdW1tYXJ5ID0gcm91dGVzWzBdLnN1bW1hcnk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3RhbmNlJykudmFsdWUgPSAoc3VtbWFyeS50b3RhbERpc3RhbmNlIC8gMTAwMCkudG9GaXhlZCgyKTsgLy8gZGlzdGFuY2UgZW4ga21cbiAgICAgICAgICAgICAgICByb3V0ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9