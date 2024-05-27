import { Produit } from './Produit';
declare abstract class Cargaison {
    static poidsMaximal: number;
    produits: Produit[];
    distance: number;
    type: string;
    constructor(distance: number, type: string);
    ajouterProduit(produit: Produit): void;
    nbProduits(): number;
    calculerFrais(produit: Produit): number;
    sommeTotaleC(): number;
    abstract info(): string;
    static generateUniqueCode(): string;
}
declare class CargaisonAerienne extends Cargaison {
    static codeUnique: string;
    constructor(distance: number);
    info(): string;
}
declare class CargaisonMaritime extends Cargaison {
    static codeUnique: string;
    constructor(distance: number);
    info(): string;
}
declare class CargaisonRoutiere extends Cargaison {
    static codeUnique: string;
    constructor(distance: number);
    info(): string;
}
export { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere };
