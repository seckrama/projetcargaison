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
    function Cargaison(distance, type, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        this.produits = [];
        this.distance = distance;
        this.type = type;
        this.datedebut = datedebut;
        this.datefin = datefin;
        this.poidscargo = poidscargo;
        this.nomreproduit = nomreproduit;
        this.codeUnique = Cargaison.generateUniqueCode(); // Générer un code unique lors de la création
        this.lieu_depart = lieu_depart;
        this.lieu_arrive = lieu_arrive;
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
        var randomCode = Math.random().toString(36).substr(2, 4); // Générer une chaîne aléatoire de longueur 7
        return "CO" + randomCode;
    };
    return Cargaison;
}());
exports.Cargaison = Cargaison;
var CargaisonAerienne = /** @class */ (function (_super) {
    __extends(CargaisonAerienne, _super);
    function CargaisonAerienne(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "aerienne", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonAerienne.prototype.info = function () {
        return "Cargaison A\u00E9rienne (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
    };
    return CargaisonAerienne;
}(Cargaison));
exports.CargaisonAerienne = CargaisonAerienne;
var CargaisonMaritime = /** @class */ (function (_super) {
    __extends(CargaisonMaritime, _super);
    function CargaisonMaritime(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "maritime", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonMaritime.prototype.info = function () {
        return "Cargaison Maritime (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
    };
    return CargaisonMaritime;
}(Cargaison));
exports.CargaisonMaritime = CargaisonMaritime;
var CargaisonRoutiere = /** @class */ (function (_super) {
    __extends(CargaisonRoutiere, _super);
    function CargaisonRoutiere(distance, datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) {
        return _super.call(this, distance, "routiere", datedebut, datefin, poidscargo, nomreproduit, lieu_depart, lieu_arrive) || this;
    }
    CargaisonRoutiere.prototype.info = function () {
        return "Cargaison Routi\u00E8re (Code: ".concat(this.codeUnique, ") - Distance: ").concat(this.distance, " km, Nombre de produits: ").concat(this.nbProduits(), ", Poids de la cargaison: ").concat(this.poidscargo, ", Nombre de produits: ").concat(this.nomreproduit, ", Date de d\u00E9but: ").concat(this.datedebut, ", Date de fin: ").concat(this.datefin);
    };
    return CargaisonRoutiere;
}(Cargaison));
exports.CargaisonRoutiere = CargaisonRoutiere;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Cargaison_1 = __webpack_require__(/*! ./Model/Cargaison */ "./src/Model/Cargaison.ts");
var cargaisons = [];
var filteredCargaisons = [];
function showDetails(type, distance) {
    var cargaison = cargaisons.find(function (c) { return c.type === type && c.distance === distance; });
    if (cargaison) {
        var details = "\n        \n        <p>Type: ".concat(cargaison.type, "</p>\n        <p>Distance: ").concat(cargaison.distance, " km</p>\n        <p>Lieu de d\u00E9part: ").concat(cargaison.lieu_depart, "</p>\n        <p>Lieu d'arriv\u00E9e: ").concat(cargaison.lieu_arrive, "</p>\n        <p>date de debut: ").concat(cargaison.datedebut, "</p>\n        <p>date de fin: ").concat(cargaison.datefin, "</p>\n        ");
        var detailsContainer = document.getElementById('details-container');
        if (detailsContainer) {
            detailsContainer.innerHTML = details;
            var modal = document.getElementById('details-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.showModal(); // Afficher le modal
            }
        }
    }
    else {
        console.log("Cargaison non trouvée.");
    }
}
function closeModal() {
    var modal = document.getElementById('details-modal');
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
window.showDetails = showDetails;
function addProduct() {
    var detailsContainer = document.getElementById('ajouter-container');
    if (detailsContainer) {
        var modal = document.getElementById('ajouter-product');
        if (modal) {
            modal.classList.remove('hidden');
            modal.showModal(); // Afficher le modal
        }
    }
}
function closeModals() {
    var modal = document.getElementById('details-modal');
    if (modal) {
        modal.close(); // Fermer le modal
    }
}
window.addProduct = addProduct;
function validateForm() {
    var typeInput = document.getElementById('type-cargaison');
    var nbrproduit = document.getElementById('Nproduit');
    var nbrproduitError = document.getElementById('Nproduit-error');
    var datedebutInput = document.getElementById('date-debut');
    var datefinInput = document.getElementById('date-fin');
    var datedebutError = document.getElementById('datedebut-error');
    var datefinError = document.getElementById('datefin-error');
    var isValid = true;
    if (typeInput.value === "") {
        isValid = false;
    }
    datedebutError.textContent = '';
    datefinError.textContent = '';
    if (datedebutInput.value === "") {
        datedebutError.textContent = "Veuillez remplir ce champ.";
        datedebutError.style.color = "red";
        isValid = false;
    }
    if (datefinInput.value === "") {
        datefinError.textContent = "Veuillez remplir ce champ.";
        datefinError.style.color = "red";
        isValid = false;
    }
    var dateDebut = new Date(datedebutInput.value);
    var today = new Date();
    if (dateDebut <= today) {
        datedebutError.textContent = "La date de début doit être supérieure à la date d'aujourd'hui.";
        datedebutError.style.color = "red";
        isValid = false;
    }
    var dateFin = new Date(datefinInput.value);
    if (dateFin <= dateDebut) {
        datefinError.textContent = "La date de fin doit être supérieure à la date de début.";
        datefinError.style.color = "red";
        isValid = false;
    }
    return isValid;
}
var prevPageButton = document.getElementById('prevPage');
var nextPageButton = document.getElementById('nextPage');
var currentPageSpan = document.getElementById('currentPage');
var currentPage = 1;
var itemsPerPage = 4;
prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});
nextPageButton.addEventListener('click', function () {
    var totalItems = cargaisons.length;
    var lastPage = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < lastPage) {
        currentPage++;
        afficherCargaisons(filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons);
    }
});
function afficherCargaisons(data) {
    fetch('http://www.rama.seck:9000/projetTSPHP/save.php')
        .then(function (response) {
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        return response.text();
    })
        .then(function (responseText) {
        try {
            var data_1 = JSON.parse(responseText);
            if (!data_1.cargaisons) {
                throw new Error('Données mal structurées');
            }
            cargaisons = data_1.cargaisons;
            var cargaisonList_1 = document.getElementById('tbodycargaison');
            if (!cargaisonList_1) {
                console.error('Element avec ID "tbodycargaison" non trouvé');
                return;
            }
            cargaisonList_1.innerHTML = '';
            if (cargaisons.length === 0) {
                var message = document.createElement('p');
                message.textContent = 'Aucune cargaison ne correspond aux critères de filtrage.';
                cargaisonList_1.appendChild(message);
                return;
            }
            var startIndex = (currentPage - 1) * itemsPerPage;
            var endIndex = startIndex + itemsPerPage;
            var paginatedCargaisons = (filteredCargaisons.length > 0 ? filteredCargaisons : cargaisons).slice(startIndex, endIndex);
            paginatedCargaisons.forEach(function (cargaison) {
                var row = document.createElement('tr');
                row.innerHTML = "\n                        <td>".concat(cargaison.codeUnique, "</td>\n                        <td>").concat(cargaison.type, "</td>\n                        <td>").concat(cargaison.distance, "</td>\n                        <td>").concat(cargaison.datedebut, "</td>\n                        <td>").concat(cargaison.datefin, "</td>\n                        <td>").concat(cargaison.lieu_depart, "</td>\n                        <td>").concat(cargaison.lieu_arrive, "</td>\n                      \n\n                        <td>en cour</td>\n                        <td>fermer</td>\n                        <td style=\"display:flex !important\">\n                        <button class=\"text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"showDetails('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">D\u00E9tails</button>\n                            <button class=\"text-blue-400 text-xl pr-3 font-bold rounded\" onclick=\"addProduct('").concat(cargaison.type, "', ").concat(cargaison.distance, ")\">Ajouter</button>\n\n                        </td>\n\n                       \n\n                       \n\n                    ");
                cargaisonList_1.appendChild(row);
            });
            var totalItems = cargaisons.length;
            var lastPage = Math.ceil(totalItems / itemsPerPage);
            currentPageSpan.textContent = currentPage.toString();
            prevPageButton.disabled = currentPage === 1;
            nextPageButton.disabled = currentPage === lastPage;
        }
        catch (error) {
            console.error('Erreur lors du parsing JSON:', error);
            console.log('Raw response text:', responseText);
        }
    })
        .catch(function (error) {
        console.error('Erreur lors du fetch:', error);
    });
}
function filterCargaisons() {
    var codeInputElement = document.getElementById('code');
    var datedebutInputElement = document.getElementById('date-debut');
    var datefinInputElement = document.getElementById('date-fin');
    var lieuDepartInputElement = document.getElementById('lieu-depart');
    var lieuArriveInputElement = document.getElementById('lieu-arrive');
    var codeInput = (codeInputElement === null || codeInputElement === void 0 ? void 0 : codeInputElement.value.trim().toLowerCase()) || '';
    var datedebutInput = (datedebutInputElement === null || datedebutInputElement === void 0 ? void 0 : datedebutInputElement.value.trim()) || '';
    var datefinInput = (datefinInputElement === null || datefinInputElement === void 0 ? void 0 : datefinInputElement.value.trim()) || '';
    var lieuDepartInput = (lieuDepartInputElement === null || lieuDepartInputElement === void 0 ? void 0 : lieuDepartInputElement.value.trim().toLowerCase()) || '';
    var lieuArriveInput = (lieuArriveInputElement === null || lieuArriveInputElement === void 0 ? void 0 : lieuArriveInputElement.value.trim().toLowerCase()) || '';
    filteredCargaisons = cargaisons.filter(function (cargaison) {
        var matchCode = codeInput ? cargaison.codeUnique.toLowerCase().includes(codeInput) : true;
        var matchDateDebut = datedebutInput ? cargaison.datedebut === datedebutInput : true;
        var matchDateFin = datefinInput ? cargaison.datefin === datefinInput : true;
        var matchLieuDepart = lieuDepartInput ? cargaison.lieu_depart.toLowerCase().includes(lieuDepartInput) : true;
        var matchLieuArrive = lieuArriveInput ? cargaison.lieu_arrive.toLowerCase().includes(lieuArriveInput) : true;
        return matchCode && matchDateDebut && matchDateFin && matchLieuDepart &&
            matchLieuArrive;
    });
    currentPage = 1;
    afficherCargaisons(filteredCargaisons);
}
var filterButton = document.getElementById('filter-button');
if (filterButton) {
    filterButton.addEventListener('click', function (event) {
        event.preventDefault();
        filterCargaisons();
    });
}
document.addEventListener('DOMContentLoaded', function () {
    afficherCargaisons(cargaisons);
});
afficherCargaisons(cargaisons);
var form = document.getElementById('cargaisonForm');
var envoie = document.getElementById('submit-cargaison');
envoie.addEventListener('click', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var distanceInput, typeInput, poidscargaison, nombreproduit, datedebutInput, datefinInput, lieudepartInput, lieuarriverInput, distance, type, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieuarrive, cargaison, cargaisonData, data, response, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                if (!validateForm()) return [3 /*break*/, 8];
                distanceInput = document.getElementById('distance');
                typeInput = document.getElementById('type-cargaison');
                poidscargaison = document.getElementById('poids');
                nombreproduit = document.getElementById('Nproduit');
                datedebutInput = document.getElementById('date-debut');
                datefinInput = document.getElementById('date-fin');
                lieudepartInput = document.getElementById('lieu_depart');
                lieuarriverInput = document.getElementById('lieu_arrive');
                distance = parseInt(distanceInput.value);
                type = typeInput.value;
                datedebut = datedebutInput.value;
                datefin = datefinInput.value;
                poidscargo = parseFloat(poidscargaison.value);
                nomreproduit = parseInt(nombreproduit.value);
                lieudepart = lieudepartInput.value;
                lieuarrive = lieuarriverInput.value;
                cargaison = null;
                switch (type) {
                    case 'aerienne':
                        cargaison = new Cargaison_1.CargaisonAerienne(distance, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieuarrive);
                        break;
                    case 'maritime':
                        cargaison = new Cargaison_1.CargaisonMaritime(distance, datedebut, datefin, poidscargo, nomreproduit, lieudepart, lieudepart);
                        break;
                    case 'routiere':
                        cargaison = new Cargaison_1.CargaisonRoutiere(distance, datedebut, datefin, poidscargo, nomreproduit, lieuarrive, lieudepart);
                        break;
                }
                if (!cargaison) return [3 /*break*/, 8];
                cargaisons.push(cargaison);
                cargaisonData = {
                    codeUnique: cargaison.codeUnique,
                    type: cargaison.type,
                    distance: cargaison.distance,
                    produits: cargaison.produits,
                    datedebut: cargaison.datedebut,
                    datefin: cargaison.datefin,
                    poidscargo: cargaison.poidscargo,
                    nomreproduit: cargaison.nomreproduit,
                    lieu_depart: cargaison.lieu_depart,
                    lieu_arrive: cargaison.lieu_arrive,
                };
                data = JSON.stringify(cargaisonData);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, fetch('http://www.rama.seck:9000/projetTSPHP/save.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: data
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) return [3 /*break*/, 4];
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                console.log('Succès:', result);
                afficherCargaisons(cargaisons);
                return [3 /*break*/, 5];
            case 4:
                console.error('Erreur lors de la requête:', response.statusText);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error('Erreur lors de l\'envoi:', error_1);
                return [3 /*break*/, 7];
            case 7:
                alert("cargaison ajouté");
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
//pagination
//option d"affichage poids ou nb de proquit dans le tableau
var nbrproduct = document.getElementById('nb');
var poid = document.getElementById('pd');
/*     document.addEventListener('DOMContentLoaded', (event) => {
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
        } */
//formulaire cargaison
var productform = document.getElementById('btn-envoyer');
productform.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("bonjour");
});
var cargopleinSelect = document.getElementById('cargoplein');
if (cargopleinSelect) {
    cargopleinSelect.addEventListener('change', function (e) {
        var selectedValue = e.target.value;
        toggleTableColumns(selectedValue);
    });
    // Initial toggle based on the default value
    toggleTableColumns(cargopleinSelect.value);
}
var poidsContainer = document.getElementById('poids-produit');
var nbProduitsContainer = document.getElementById('nbr_produit');
poidsContainer.style.display = "none";
nbProduitsContainer.style.display = "none";
//choix cargaison pleine
(_a = document.getElementById('cargoplein')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    var poidsContainer = document.getElementById('poids-produit');
    var nbProduitsContainer = document.getElementById('nbr_produit');
    if (this.value === 'poids') {
        if (poidsContainer)
            poidsContainer.style.display = 'block';
        if (nbProduitsContainer)
            nbProduitsContainer.style.display = 'none';
    }
    else if (this.value === 'nbproduit') {
        if (poidsContainer)
            poidsContainer.style.display = 'none';
        if (nbProduitsContainer)
            nbProduitsContainer.style.display = 'block';
    }
});
// affichage optioneele des valeurs pods et nbproduit
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
/*  Cargaisons.addEventListener("click", () => {
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
  */
/*  accueil.addEventListener("click", () => {
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
 }); */
var images = ['../public/img/avions.jpg', '../public/img/bateau.jpg', '../public/img/avionss.jpg'];
var currentIndex = 0;
function changeBackgroundImage() {
    document.getElementById('main').style.backgroundImage = "url('".concat(images[currentIndex], "')");
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackgroundImage, 2000);
var modalss = document.getElementById("my_modal_5");
var body = document.querySelector("body");
var modals = document.getElementById("modals");
modals.addEventListener("click", function () {
    modalss.style.display = "block";
});
var mod = document.getElementById('fermer');
mod.style.color = "red";
var fermer = document.getElementById("annuler");
fermer.style.color = "red";
fermer.addEventListener("click", function () {
    mod.style.display = "none";
    form.reset();
});
document.getElementById('cargoplein').addEventListener('change', function () {
    var nbproduits = document.getElementById('nbproduits');
    if (this.value === 'nbproduit') {
        if (nbproduits) {
            nbproduits.style.display = 'block';
        }
    }
    else {
        if (nbproduits) {
            nbproduits.style.display = 'none';
        }
    }
});
// map
// Récupération du formulaire
// Définition des classes de produits
// Ajoutez cet écouteur d'événements après que la page ait chargé


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBR0YsTUFBTTtBQUNOLDZCQUE2QjtBQUU3QixxQ0FBcUM7QUFHckMsaUVBQWlFOzs7Ozs7O1VDL3FCckU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldHRzcGhwLy4vc3JjL01vZGVsL0NhcmdhaXNvbi50cyIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2pldHRzcGhwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZXR0c3BocC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVpdCB9IGZyb20gJy4vUHJvZHVpdCc7XG5cbmFic3RyYWN0IGNsYXNzIENhcmdhaXNvbiB7XG4gICAgcHVibGljIHByb2R1aXRzOiBQcm9kdWl0W10gPSBbXTtcbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkYXRlZGVidXQ6IHN0cmluZztcbiAgICBwdWJsaWMgZGF0ZWZpbjogc3RyaW5nO1xuICAgIHB1YmxpYyBwb2lkc2NhcmdvOiBudW1iZXI7XG4gICAgcHVibGljIG5vbXJlcHJvZHVpdDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb2RlVW5pcXVlOiBzdHJpbmc7XG4gICAgcHVibGljIGxpZXVfZGVwYXJ0OiBzdHJpbmc7IC8vIEFqb3V0IGRlIGxhIHByb3ByacOpdMOpIGxpZXVfZGVwYXJ0XG4gICAgcHVibGljIGxpZXVfYXJyaXZlOiBzdHJpbmc7IC8vIEFqb3V0IGRlIGxhIHByb3ByacOpdMOpIGxpZXVfYXJyaXZlXG5cblxuICAgIGNvbnN0cnVjdG9yKGRpc3RhbmNlOiBudW1iZXIsIHR5cGU6IHN0cmluZywgZGF0ZWRlYnV0OiBzdHJpbmcsIGRhdGVmaW46IHN0cmluZywgcG9pZHNjYXJnbzogbnVtYmVyLCBub21yZXByb2R1aXQ6IG51bWJlcixsaWV1X2RlcGFydDogc3RyaW5nLCBsaWV1X2Fycml2ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5kYXRlZGVidXQgPSBkYXRlZGVidXQ7XG4gICAgICAgIHRoaXMuZGF0ZWZpbiA9IGRhdGVmaW47XG4gICAgICAgIHRoaXMucG9pZHNjYXJnbyA9IHBvaWRzY2FyZ287XG4gICAgICAgIHRoaXMubm9tcmVwcm9kdWl0ID0gbm9tcmVwcm9kdWl0O1xuICAgICAgICB0aGlzLmNvZGVVbmlxdWUgPSBDYXJnYWlzb24uZ2VuZXJhdGVVbmlxdWVDb2RlKCk7IC8vIEfDqW7DqXJlciB1biBjb2RlIHVuaXF1ZSBsb3JzIGRlIGxhIGNyw6lhdGlvblxuXG4gICAgICAgIHRoaXMubGlldV9kZXBhcnQgPSBsaWV1X2RlcGFydDtcbiAgICAgICAgdGhpcy5saWV1X2Fycml2ZSA9IGxpZXVfYXJyaXZlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgYWpvdXRlclByb2R1aXQocHJvZHVpdDogUHJvZHVpdCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWl0cy5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZ2Fpc29uIHBsZWluZSwgaW1wb3NzaWJsZSBkJ2Fqb3V0ZXIgcGx1cyBkZSBwcm9kdWl0cy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9kdWl0cy5wdXNoKHByb2R1aXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUHJvZHVpdCBham91dMOpLiBNb250YW50IHRvdGFsOiAke3RoaXMuc29tbWVUb3RhbGVDKCl9RmApO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYlByb2R1aXRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1aXRzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY3VsZXJGcmFpcyhwcm9kdWl0OiBQcm9kdWl0KTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGZyYWlzOiBudW1iZXIgPSAwO1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm1hcml0aW1lXCI6XG4gICAgICAgICAgICAgICAgZnJhaXMgPSAxMDAgKiBwcm9kdWl0LmdldFBvaWRzKCkgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFlcmllbm5lXCI6XG4gICAgICAgICAgICAgICAgZnJhaXMgPSAzMDAgKiBwcm9kdWl0LmdldFBvaWRzKCkgKiB0aGlzLmRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJvdXRpZXJlXCI6XG4gICAgICAgICAgICAgICAgZnJhaXMgPSA5MCAqIHByb2R1aXQuZ2V0UG9pZHMoKSAqIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzb21tZVRvdGFsZUMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVpdHMucmVkdWNlKChhY2MsIHByb2R1aXQpID0+IGFjYyArIHRoaXMuY2FsY3VsZXJGcmFpcyhwcm9kdWl0KSwgMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGluZm8oKTogc3RyaW5nO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZVVuaXF1ZUNvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29kZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA0KTsgLy8gR8OpbsOpcmVyIHVuZSBjaGHDrm5lIGFsw6lhdG9pcmUgZGUgbG9uZ3VldXIgN1xuICAgICAgICByZXR1cm4gXCJDT1wiICsgcmFuZG9tQ29kZTsgICAgfVxufVxuXG5jbGFzcyBDYXJnYWlzb25BZXJpZW5uZSBleHRlbmRzIENhcmdhaXNvbiB7XG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlciwgZGF0ZWRlYnV0OiBzdHJpbmcsIGRhdGVmaW46IHN0cmluZywgcG9pZHNjYXJnbzogbnVtYmVyLCBub21yZXByb2R1aXQ6IG51bWJlcixsaWV1X2RlcGFydDogc3RyaW5nLCBsaWV1X2Fycml2ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRpc3RhbmNlLCBcImFlcmllbm5lXCIsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVfZGVwYXJ0LGxpZXVfYXJyaXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYENhcmdhaXNvbiBBw6lyaWVubmUgKENvZGU6ICR7dGhpcy5jb2RlVW5pcXVlfSkgLSBEaXN0YW5jZTogJHt0aGlzLmRpc3RhbmNlfSBrbSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubmJQcm9kdWl0cygpfSwgUG9pZHMgZGUgbGEgY2FyZ2Fpc29uOiAke3RoaXMucG9pZHNjYXJnb30sIE5vbWJyZSBkZSBwcm9kdWl0czogJHt0aGlzLm5vbXJlcHJvZHVpdH0sIERhdGUgZGUgZMOpYnV0OiAke3RoaXMuZGF0ZWRlYnV0fSwgRGF0ZSBkZSBmaW46ICR7dGhpcy5kYXRlZmlufWA7XG4gICAgfVxufVxuXG5jbGFzcyBDYXJnYWlzb25NYXJpdGltZSBleHRlbmRzIENhcmdhaXNvbiB7XG4gICAgY29uc3RydWN0b3IoZGlzdGFuY2U6IG51bWJlciwgZGF0ZWRlYnV0OiBzdHJpbmcsIGRhdGVmaW46IHN0cmluZywgcG9pZHNjYXJnbzogbnVtYmVyLCBub21yZXByb2R1aXQ6IG51bWJlcixsaWV1X2RlcGFydDogc3RyaW5nLCBsaWV1X2Fycml2ZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRpc3RhbmNlLCBcIm1hcml0aW1lXCIsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVfZGVwYXJ0LGxpZXVfYXJyaXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYENhcmdhaXNvbiBNYXJpdGltZSAoQ29kZTogJHt0aGlzLmNvZGVVbmlxdWV9KSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9LCBQb2lkcyBkZSBsYSBjYXJnYWlzb246ICR7dGhpcy5wb2lkc2NhcmdvfSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubm9tcmVwcm9kdWl0fSwgRGF0ZSBkZSBkw6lidXQ6ICR7dGhpcy5kYXRlZGVidXR9LCBEYXRlIGRlIGZpbjogJHt0aGlzLmRhdGVmaW59YDtcbiAgICB9XG59XG5cbmNsYXNzIENhcmdhaXNvblJvdXRpZXJlIGV4dGVuZHMgQ2FyZ2Fpc29uIHtcbiAgICBjb25zdHJ1Y3RvcihkaXN0YW5jZTogbnVtYmVyLCBkYXRlZGVidXQ6IHN0cmluZywgZGF0ZWZpbjogc3RyaW5nLCBwb2lkc2NhcmdvOiBudW1iZXIsIG5vbXJlcHJvZHVpdDogbnVtYmVyLGxpZXVfZGVwYXJ0OiBzdHJpbmcsIGxpZXVfYXJyaXZlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZGlzdGFuY2UsIFwicm91dGllcmVcIiwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldV9kZXBhcnQsbGlldV9hcnJpdmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgQ2FyZ2Fpc29uIFJvdXRpw6hyZSAoQ29kZTogJHt0aGlzLmNvZGVVbmlxdWV9KSAtIERpc3RhbmNlOiAke3RoaXMuZGlzdGFuY2V9IGttLCBOb21icmUgZGUgcHJvZHVpdHM6ICR7dGhpcy5uYlByb2R1aXRzKCl9LCBQb2lkcyBkZSBsYSBjYXJnYWlzb246ICR7dGhpcy5wb2lkc2NhcmdvfSwgTm9tYnJlIGRlIHByb2R1aXRzOiAke3RoaXMubm9tcmVwcm9kdWl0fSwgRGF0ZSBkZSBkw6lidXQ6ICR7dGhpcy5kYXRlZGVidXR9LCBEYXRlIGRlIGZpbjogJHt0aGlzLmRhdGVmaW59YDtcbiAgICB9XG59XG5cblxuXG5leHBvcnQgeyBDYXJnYWlzb24sIENhcmdhaXNvbkFlcmllbm5lLCBDYXJnYWlzb25NYXJpdGltZSwgQ2FyZ2Fpc29uUm91dGllcmUgfTtcblxuXG5cbiIsImltcG9ydCB7IFByb2R1aXQsIEFsaW1lbnRhaXJlLCBDaGltaXF1ZSwgRnJhZ2lsZSwgSW5jYXNzYWJsZSB9IGZyb20gJy4vTW9kZWwvUHJvZHVpdCc7XG5pbXBvcnQgeyBDYXJnYWlzb24sIENhcmdhaXNvbkFlcmllbm5lLCBDYXJnYWlzb25NYXJpdGltZSwgQ2FyZ2Fpc29uUm91dGllcmUgfSBmcm9tICcuL01vZGVsL0NhcmdhaXNvbic7XG5cbmxldCBjYXJnYWlzb25zOiBDYXJnYWlzb25bXSA9IFtdO1xubGV0IGZpbHRlcmVkQ2FyZ2Fpc29uczogQ2FyZ2Fpc29uW10gPSBbXTtcblxuZnVuY3Rpb24gc2hvd0RldGFpbHModHlwZTogc3RyaW5nLCBkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgY29uc3QgY2FyZ2Fpc29uID0gY2FyZ2Fpc29ucy5maW5kKChjOiBhbnkpID0+IGMudHlwZSA9PT0gdHlwZSAmJiBjLmRpc3RhbmNlID09PSBkaXN0YW5jZSk7XG4gICAgaWYgKGNhcmdhaXNvbikge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gYFxuICAgICAgICBcbiAgICAgICAgPHA+VHlwZTogJHtjYXJnYWlzb24udHlwZX08L3A+XG4gICAgICAgIDxwPkRpc3RhbmNlOiAke2NhcmdhaXNvbi5kaXN0YW5jZX0ga208L3A+XG4gICAgICAgIDxwPkxpZXUgZGUgZMOpcGFydDogJHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC9wPlxuICAgICAgICA8cD5MaWV1IGQnYXJyaXbDqWU6ICR7Y2FyZ2Fpc29uLmxpZXVfYXJyaXZlfTwvcD5cbiAgICAgICAgPHA+ZGF0ZSBkZSBkZWJ1dDogJHtjYXJnYWlzb24uZGF0ZWRlYnV0fTwvcD5cbiAgICAgICAgPHA+ZGF0ZSBkZSBmaW46ICR7Y2FyZ2Fpc29uLmRhdGVmaW59PC9wPlxuICAgICAgICBgO1xuICAgICAgICBjb25zdCBkZXRhaWxzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChkZXRhaWxzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBkZXRhaWxzQ29udGFpbmVyLmlubmVySFRNTCA9IGRldGFpbHM7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTsgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZ2Fpc29uIG5vbiB0cm91dsOpZS5cIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTsgLy8gRmVybWVyIGxlIG1vZGFsXG4gICAgfVxufVxuXG5cblxuICAgIFxuXG4od2luZG93IGFzIGFueSkuc2hvd0RldGFpbHMgPSBzaG93RGV0YWlscztcblxuXG5mdW5jdGlvbiBhZGRQcm9kdWN0KCkge1xuICBcbiAgICAgICAgY29uc3QgZGV0YWlsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdham91dGVyLWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAoZGV0YWlsc0NvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWpvdXRlci1wcm9kdWN0JykgYXMgSFRNTERpYWxvZ0VsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTsgLy8gQWZmaWNoZXIgbGUgbW9kYWxcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWxzKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtbW9kYWwnKSBhcyBIVE1MRGlhbG9nRWxlbWVudDtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTsgLy8gRmVybWVyIGxlIG1vZGFsXG4gICAgfVxufVxuKHdpbmRvdyBhcyBhbnkpLmFkZFByb2R1Y3QgPSBhZGRQcm9kdWN0O1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB0eXBlSW5wdXQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtY2FyZ2Fpc29uJyk7XG4gICAgY29uc3QgbmJycHJvZHVpdCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOcHJvZHVpdCcpO1xuICAgIGNvbnN0IG5icnByb2R1aXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOcHJvZHVpdC1lcnJvcicpO1xuICAgIGNvbnN0IGRhdGVkZWJ1dElucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtZGVidXQnKTtcbiAgICBjb25zdCBkYXRlZmluSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1maW4nKTtcbiAgICBjb25zdCBkYXRlZGVidXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlZGVidXQtZXJyb3InKTtcbiAgICBjb25zdCBkYXRlZmluRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZWZpbi1lcnJvcicpO1xuXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGF0ZWRlYnV0RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICBkYXRlZmluRXJyb3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChkYXRlZGVidXRJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkYXRlZGVidXRFcnJvci50ZXh0Q29udGVudCA9IFwiVmV1aWxsZXogcmVtcGxpciBjZSBjaGFtcC5cIjtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVmaW5JbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkYXRlZmluRXJyb3IudGV4dENvbnRlbnQgPSBcIlZldWlsbGV6IHJlbXBsaXIgY2UgY2hhbXAuXCI7XG4gICAgICAgIGRhdGVmaW5FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRGVidXQgPSBuZXcgRGF0ZShkYXRlZGVidXRJbnB1dC52YWx1ZSk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChkYXRlRGVidXQgPD0gdG9kYXkpIHtcbiAgICAgICAgZGF0ZWRlYnV0RXJyb3IudGV4dENvbnRlbnQgPSBcIkxhIGRhdGUgZGUgZMOpYnV0IGRvaXQgw6p0cmUgc3Vww6lyaWV1cmUgw6AgbGEgZGF0ZSBkJ2F1am91cmQnaHVpLlwiO1xuICAgICAgICBkYXRlZGVidXRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlRmluID0gbmV3IERhdGUoZGF0ZWZpbklucHV0LnZhbHVlKTtcbiAgICBpZiAoZGF0ZUZpbiA8PSBkYXRlRGVidXQpIHtcbiAgICAgICAgZGF0ZWZpbkVycm9yLnRleHRDb250ZW50ID0gXCJMYSBkYXRlIGRlIGZpbiBkb2l0IMOqdHJlIHN1cMOpcmlldXJlIMOgIGxhIGRhdGUgZGUgZMOpYnV0LlwiO1xuICAgICAgICBkYXRlZmluRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG5cbmNvbnN0IHByZXZQYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBuZXh0UGFnZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0UGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgY3VycmVudFBhZ2VTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRQYWdlJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuXG5sZXQgY3VycmVudFBhZ2UgPSAxO1xuY29uc3QgaXRlbXNQZXJQYWdlID0gNDtcblxucHJldlBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgICAgICBjdXJyZW50UGFnZS0tO1xuICAgICAgICBhZmZpY2hlckNhcmdhaXNvbnMoZmlsdGVyZWRDYXJnYWlzb25zLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZENhcmdhaXNvbnMgOiBjYXJnYWlzb25zKTtcbiAgICB9XG59KTtcblxubmV4dFBhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IGNhcmdhaXNvbnMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3RQYWdlID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpO1xuICAgIGlmIChjdXJyZW50UGFnZSA8IGxhc3RQYWdlKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlKys7XG4gICAgICAgIGFmZmljaGVyQ2FyZ2Fpc29ucyhmaWx0ZXJlZENhcmdhaXNvbnMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQ2FyZ2Fpc29ucyA6IGNhcmdhaXNvbnMpO1xuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBhZmZpY2hlckNhcmdhaXNvbnMoZGF0YTogQ2FyZ2Fpc29uW10pOiB2b2lkIHtcbiAgICBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRUU1BIUC9zYXZlLnBocCcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciByw6lzZWF1Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmICghZGF0YS5jYXJnYWlzb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRG9ubsOpZXMgbWFsIHN0cnVjdHVyw6llcycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbnMgPSBkYXRhLmNhcmdhaXNvbnM7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXJnYWlzb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rib2R5Y2FyZ2Fpc29uJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYXJnYWlzb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgYXZlYyBJRCBcInRib2R5Y2FyZ2Fpc29uXCIgbm9uIHRyb3V2w6knKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXJnYWlzb25MaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhcmdhaXNvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQXVjdW5lIGNhcmdhaXNvbiBuZSBjb3JyZXNwb25kIGF1eCBjcml0w6hyZXMgZGUgZmlsdHJhZ2UuJztcbiAgICAgICAgICAgICAgICAgICAgY2FyZ2Fpc29uTGlzdC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBpdGVtc1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGVkQ2FyZ2Fpc29ucyA9IChmaWx0ZXJlZENhcmdhaXNvbnMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQ2FyZ2Fpc29ucyA6IGNhcmdhaXNvbnMpLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgICAgICAgICAgICAgIHBhZ2luYXRlZENhcmdhaXNvbnMuZm9yRWFjaChjYXJnYWlzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7Y2FyZ2Fpc29uLmNvZGVVbmlxdWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24uZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5kYXRlZGVidXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5kYXRlZmlufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtjYXJnYWlzb24ubGlldV9kZXBhcnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2NhcmdhaXNvbi5saWV1X2Fycml2ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZW4gY291cjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ZmVybWVyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImRpc3BsYXk6ZmxleCAhaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXhsIHByLTMgZm9udC1ib2xkIHJvdW5kZWRcIiBvbmNsaWNrPVwic2hvd0RldGFpbHMoJyR7Y2FyZ2Fpc29uLnR5cGV9JywgJHtjYXJnYWlzb24uZGlzdGFuY2V9KVwiPkTDqXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRleHQtYmx1ZS00MDAgdGV4dC14bCBwci0zIGZvbnQtYm9sZCByb3VuZGVkXCIgb25jbGljaz1cImFkZFByb2R1Y3QoJyR7Y2FyZ2Fpc29uLnR5cGV9JywgJHtjYXJnYWlzb24uZGlzdGFuY2V9KVwiPkFqb3V0ZXI8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBjYXJnYWlzb25MaXN0LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gY2FyZ2Fpc29ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIGl0ZW1zUGVyUGFnZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VTcGFuLnRleHRDb250ZW50ID0gY3VycmVudFBhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBwcmV2UGFnZUJ1dHRvbi5kaXNhYmxlZCA9IGN1cnJlbnRQYWdlID09PSAxO1xuICAgICAgICAgICAgICAgIG5leHRQYWdlQnV0dG9uLmRpc2FibGVkID0gY3VycmVudFBhZ2UgPT09IGxhc3RQYWdlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkdSBwYXJzaW5nIEpTT046JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSYXcgcmVzcG9uc2UgdGV4dDonLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgZmV0Y2g6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGZpbHRlckNhcmdhaXNvbnMoKSB7XG4gICAgY29uc3QgY29kZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkYXRlZGVidXRJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1kZWJ1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZGF0ZWZpbklucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGlldURlcGFydElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1LWRlcGFydCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgbGlldUFycml2ZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1LWFycml2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjb2RlSW5wdXQgPSBjb2RlSW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICBjb25zdCBkYXRlZGVidXRJbnB1dCA9IGRhdGVkZWJ1dElucHV0RWxlbWVudD8udmFsdWUudHJpbSgpIHx8ICcnO1xuICAgIGNvbnN0IGRhdGVmaW5JbnB1dCA9IGRhdGVmaW5JbnB1dEVsZW1lbnQ/LnZhbHVlLnRyaW0oKSB8fCAnJztcbiAgICBjb25zdCBsaWV1RGVwYXJ0SW5wdXQgPSBsaWV1RGVwYXJ0SW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcbiAgICBjb25zdCBsaWV1QXJyaXZlSW5wdXQgPSBsaWV1QXJyaXZlSW5wdXRFbGVtZW50Py52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSB8fCAnJztcblxuXG4gICAgZmlsdGVyZWRDYXJnYWlzb25zID0gY2FyZ2Fpc29ucy5maWx0ZXIoY2FyZ2Fpc29uID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hDb2RlID0gY29kZUlucHV0ID8gY2FyZ2Fpc29uLmNvZGVVbmlxdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb2RlSW5wdXQpIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hEYXRlRGVidXQgPSBkYXRlZGVidXRJbnB1dCA/IGNhcmdhaXNvbi5kYXRlZGVidXQgPT09IGRhdGVkZWJ1dElucHV0IDogdHJ1ZTtcbiAgICAgICAgY29uc3QgbWF0Y2hEYXRlRmluID0gZGF0ZWZpbklucHV0ID8gY2FyZ2Fpc29uLmRhdGVmaW4gPT09IGRhdGVmaW5JbnB1dCA6IHRydWU7XG4gICAgICAgIGNvbnN0IG1hdGNoTGlldURlcGFydCA9IGxpZXVEZXBhcnRJbnB1dCA/IGNhcmdhaXNvbi5saWV1X2RlcGFydC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxpZXVEZXBhcnRJbnB1dCkgOiB0cnVlO1xuICAgICAgICBjb25zdCBtYXRjaExpZXVBcnJpdmUgPSBsaWV1QXJyaXZlSW5wdXQgPyBjYXJnYWlzb24ubGlldV9hcnJpdmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsaWV1QXJyaXZlSW5wdXQpIDogdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG1hdGNoQ29kZSAmJiBtYXRjaERhdGVEZWJ1dCAmJiBtYXRjaERhdGVGaW4gJiYgbWF0Y2hMaWV1RGVwYXJ0ICYmXG4gICAgICAgIG1hdGNoTGlldUFycml2ZTtcbiAgICB9KTtcblxuICAgIGN1cnJlbnRQYWdlID0gMTtcbiAgICBhZmZpY2hlckNhcmdhaXNvbnMoZmlsdGVyZWRDYXJnYWlzb25zKTtcbn1cblxuY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1idXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmlmIChmaWx0ZXJCdXR0b24pIHtcbiAgICBmaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlsdGVyQ2FyZ2Fpc29ucygpO1xuICAgIH0pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xufSk7XG5cblxuXG5cblxuYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xuXG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnYWlzb25Gb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgZW52b2llID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1jYXJnYWlzb24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmVudm9pZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzdGFuY2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB0eXBlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHlwZS1jYXJnYWlzb24nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICAgICAgY29uc3QgcG9pZHNjYXJnYWlzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pZHMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBub21icmVwcm9kdWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05wcm9kdWl0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgZGF0ZWRlYnV0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1kZWJ1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGRhdGVmaW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLWZpbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpZXVkZXBhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWV1X2RlcGFydCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGxpZXVhcnJpdmVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlldV9hcnJpdmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHBhcnNlSW50KGRpc3RhbmNlSW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZUlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlZGVidXQgPSBkYXRlZGVidXRJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZWZpbiA9IGRhdGVmaW5JbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcG9pZHNjYXJnbyA9IHBhcnNlRmxvYXQocG9pZHNjYXJnYWlzb24udmFsdWUpO1xuICAgICAgICBjb25zdCBub21yZXByb2R1aXQgPSBwYXJzZUludChub21icmVwcm9kdWl0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgbGlldWRlcGFydD1saWV1ZGVwYXJ0SW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IGxpZXVhcnJpdmU9bGlldWFycml2ZXJJbnB1dC52YWx1ZVxuXG4gICAgICAgIGxldCBjYXJnYWlzb246IENhcmdhaXNvbiB8IG51bGwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Flcmllbm5lJzpcbiAgICAgICAgICAgICAgICBjYXJnYWlzb24gPSBuZXcgQ2FyZ2Fpc29uQWVyaWVubmUoZGlzdGFuY2UsIGRhdGVkZWJ1dCwgZGF0ZWZpbiwgcG9pZHNjYXJnbywgbm9tcmVwcm9kdWl0LGxpZXVkZXBhcnQsbGlldWFycml2ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtYXJpdGltZSc6XG4gICAgICAgICAgICAgICAgY2FyZ2Fpc29uID0gbmV3IENhcmdhaXNvbk1hcml0aW1lKGRpc3RhbmNlLCBkYXRlZGVidXQsIGRhdGVmaW4sIHBvaWRzY2FyZ28sIG5vbXJlcHJvZHVpdCxsaWV1ZGVwYXJ0LGxpZXVkZXBhcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncm91dGllcmUnOlxuICAgICAgICAgICAgICAgIGNhcmdhaXNvbiA9IG5ldyBDYXJnYWlzb25Sb3V0aWVyZShkaXN0YW5jZSwgZGF0ZWRlYnV0LCBkYXRlZmluLCBwb2lkc2NhcmdvLCBub21yZXByb2R1aXQsbGlldWFycml2ZSxsaWV1ZGVwYXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXJnYWlzb24pIHtcbiAgICAgICAgICAgIGNhcmdhaXNvbnMucHVzaChjYXJnYWlzb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJnYWlzb25EYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvZGVVbmlxdWU6Y2FyZ2Fpc29uLmNvZGVVbmlxdWUsXG4gICAgICAgICAgICAgICAgdHlwZTogY2FyZ2Fpc29uLnR5cGUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IGNhcmdhaXNvbi5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBwcm9kdWl0czogY2FyZ2Fpc29uLnByb2R1aXRzLFxuICAgICAgICAgICAgICAgIGRhdGVkZWJ1dDogY2FyZ2Fpc29uLmRhdGVkZWJ1dCxcbiAgICAgICAgICAgICAgICBkYXRlZmluOiBjYXJnYWlzb24uZGF0ZWZpbixcbiAgICAgICAgICAgICAgICBwb2lkc2NhcmdvOmNhcmdhaXNvbi5wb2lkc2NhcmdvLFxuICAgICAgICAgICAgICAgIG5vbXJlcHJvZHVpdDpjYXJnYWlzb24ubm9tcmVwcm9kdWl0LFxuICAgICAgICAgICAgICAgIGxpZXVfZGVwYXJ0OmNhcmdhaXNvbi5saWV1X2RlcGFydCxcbiAgICAgICAgICAgICAgICBsaWV1X2Fycml2ZTpjYXJnYWlzb24ubGlldV9hcnJpdmUsXG5cblxuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoY2FyZ2Fpc29uRGF0YSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3d3dy5yYW1hLnNlY2s6OTAwMC9wcm9qZXRUU1BIUC9zYXZlLnBocCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2PDqHM6JywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgYWZmaWNoZXJDYXJnYWlzb25zKGNhcmdhaXNvbnMpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcmVxdcOqdGU6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsXFwnZW52b2k6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoXCJjYXJnYWlzb24gYWpvdXTDqVwiKTtcblxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbi8vcGFnaW5hdGlvblxuXG5cblxuLy9vcHRpb24gZFwiYWZmaWNoYWdlIHBvaWRzIG91IG5iIGRlIHByb3F1aXQgZGFucyBsZSB0YWJsZWF1XG5jb25zdCBuYnJwcm9kdWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYicpO1xuY29uc3QgcG9pZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGQnKTsgXG4gICAgXG4vKiAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLW1vZGFsJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuICAgIFxuICAgICAgICBpZiAobW9kYWwgJiYgY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ICovXG5cblxuXG5cblxuXG5cblxuIC8vZm9ybXVsYWlyZSBjYXJnYWlzb25cbiBjb25zdCBwcm9kdWN0Zm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZW52b3llcicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gcHJvZHVjdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIGNvbnNvbGUubG9nKFwiYm9uam91clwiKVxuIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICBjb25zdCBjYXJnb3BsZWluU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgICAgICBpZiAoY2FyZ29wbGVpblNlbGVjdCkge1xuICAgICAgICAgICAgY2FyZ29wbGVpblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhzZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbCB0b2dnbGUgYmFzZWQgb24gdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRvZ2dsZVRhYmxlQ29sdW1ucyhjYXJnb3BsZWluU2VsZWN0LnZhbHVlKTtcbiAgICAgICAgfVxuXG5cbiAgICBjb25zdCBwb2lkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcy1wcm9kdWl0Jyk7XG4gICAgY29uc3QgbmJQcm9kdWl0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYnJfcHJvZHVpdCcpO1xuXG5cbnBvaWRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCJcbm5iUHJvZHVpdHNDb250YWluZXIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvL2Nob2l4IGNhcmdhaXNvbiBwbGVpbmVcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZ29wbGVpbicpPy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBwb2lkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2lkcy1wcm9kdWl0JykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICBjb25zdCBuYlByb2R1aXRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25icl9wcm9kdWl0JykgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIFxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ3BvaWRzJykge1xuICAgICAgICAgICAgaWYgKHBvaWRzQ29udGFpbmVyKSBwb2lkc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGlmIChuYlByb2R1aXRzQ29udGFpbmVyKSBuYlByb2R1aXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gJ25icHJvZHVpdCcpIHtcbiAgICAgICAgICAgIGlmIChwb2lkc0NvbnRhaW5lcikgcG9pZHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGlmIChuYlByb2R1aXRzQ29udGFpbmVyKSBuYlByb2R1aXRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG5cblxuICBcblxuIFxuXG4gICBcblxuXG4gICAgLy8gYWZmaWNoYWdlIG9wdGlvbmVlbGUgZGVzIHZhbGV1cnMgcG9kcyBldCBuYnByb2R1aXRcblxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUYWJsZUNvbHVtbnModmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBuYkNvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYicpIGFzIEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xuICAgICAgICBjb25zdCBwZENvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZCcpIGFzIEhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50O1xuICAgIFxuICAgICAgICBjb25zdCBuYkNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5iLWNlbGwnKSBhcyBOb2RlTGlzdE9mPEhUTUxUYWJsZUNlbGxFbGVtZW50PjtcbiAgICAgICAgY29uc3QgcGRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZC1jZWxsJykgYXMgTm9kZUxpc3RPZjxIVE1MVGFibGVDZWxsRWxlbWVudD47XG4gICAgXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ3BvaWRzJykge1xuICAgICAgICAgICAgbmJDb2x1bW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHBkQ29sdW1uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIG5iQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XG4gICAgICAgICAgICBwZENlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYkNvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBwZENvbHVtbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbmJDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xuICAgICAgICAgICAgcGRDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIFxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXJnZXInKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKTtcbiAgICBjb25zdCBtaWxsaWV1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IGFjY3VlaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY3VlaWxcIik7XG4gICAgY29uc3QgYWNjZWNhcmdhaXNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuY2FyZ2Fpc29uXCIpO1xuICAgIFxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSk7XG4gICAgXG4gICAgYnVyZ2VyLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi0yNTBweFwiO1xuICAgIGJ1cmdlci5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICBidXJnZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDEwMCUpXCI7XG4gICAgYnVyZ2VyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjNzIGFzZS1pbi1vdXRcIjtcbiAgICBcbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29udC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIzMzBweFwiO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBDYXJnYWlzb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJnYWlzb25cIik7XG4gICAgY29uc3QgcHJvZHVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVpdFwiKTtcbiAgICBjb25zdCBzZWN0aW9uMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VjdGlvbjFcIik7XG4gICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAvKiAgQ2FyZ2Fpc29ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBtaWxsaWV1LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IFwiNTUwcHhcIjtcbiAgICB9KTtcbiAgICBcbiAgICBwcm9kdWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCI0MyVcIjtcbiAgICB9KTtcbiAgICAgKi9cbiAgICBcbiAgIC8qICBhY2N1ZWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgc2VjdGlvbjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCIxJVwiO1xuICAgIH0pO1xuICAgIFxuICAgIGFjY2VjYXJnYWlzb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG1pbGxpZXUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcIjM1MHB4XCI7XG4gICAgfSk7ICovXG4gICAgXG4gICAgY29uc3QgaW1hZ2VzID0gWycuLi9wdWJsaWMvaW1nL2F2aW9ucy5qcGcnLCAnLi4vcHVibGljL2ltZy9iYXRlYXUuanBnJywgJy4uL3B1YmxpYy9pbWcvYXZpb25zcy5qcGcnXTtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBcbiAgICBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZXNbY3VycmVudEluZGV4XX0nKWA7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGNoYW5nZUJhY2tncm91bmRJbWFnZSwgMjAwMCk7XG4gICAgXG4gICAgY29uc3QgbW9kYWxzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfbW9kYWxfNVwiKTtcbiAgICBjb25zdCBib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgXG4gICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbHNcIik7XG4gICAgbW9kYWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsc3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIFxuICAgIH0pO1xuICAgIGNvbnN0IG1vZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVybWVyJylcbiAgICBtb2Quc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGNvbnN0IGZlcm1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5udWxlclwiKTtcbiAgICBmZXJtZXIuc3R5bGUuY29sb3I9XCJyZWRcIlxuICAgIGZlcm1lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvcGxlaW4nKSEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKHRoaXM6IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG5icHJvZHVpdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmJwcm9kdWl0cycpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ25icHJvZHVpdCcpIHtcbiAgICAgICAgICAgIGlmIChuYnByb2R1aXRzKSB7XG4gICAgICAgICAgICAgICAgbmJwcm9kdWl0cy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChuYnByb2R1aXRzKSB7XG4gICAgICAgICAgICAgICAgbmJwcm9kdWl0cy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgLy8gbWFwXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZHUgZm9ybXVsYWlyZVxuICAgICBcbiAgICAvLyBEw6lmaW5pdGlvbiBkZXMgY2xhc3NlcyBkZSBwcm9kdWl0c1xuICAgXG5cbiAgICAvLyBBam91dGV6IGNldCDDqWNvdXRldXIgZCfDqXbDqW5lbWVudHMgYXByw6hzIHF1ZSBsYSBwYWdlIGFpdCBjaGFyZ8OpXG4gIFxuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==