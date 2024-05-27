import { Produit } from './Produit';

abstract class Cargaison {
    static poidsMaximal: number = 10000; // Poids maximal autorisé pour toutes les cargaisons


    public produits: Produit[] = [];
    public distance: number;
    public type: string;

    constructor(distance: number, type: string) {
        this.distance = distance;
        this.type = type;
    }

    public ajouterProduit(produit: Produit): void {
        if (this.produits.length >= 10) {
            console.log("Cargaison pleine, impossible d'ajouter plus de produits.");
            return;
        }
        this.produits.push(produit);
        console.log(`Produit ajouté. Montant total: ${this.sommeTotaleC()}F`);
    }

    public nbProduits(): number {
        return this.produits.length;
    }

    public calculerFrais(produit: Produit): number {
        let frais: number = 0;
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
    }

    public sommeTotaleC(): number {
        return this.produits.reduce((acc, produit) => acc + this.calculerFrais(produit), 0);
    }

    public abstract info(): string;

    public static generateUniqueCode(): string {
        // Générer un code unique (par exemple, un identifiant aléatoire)
        return Math.random().toString(36).substr(2, 9); // Exemple de génération d'identifiant aléatoire
    }
}

class CargaisonAerienne extends Cargaison {
    static codeUnique: string = "AIR123"; // Code unique pour les cargaisons aériennes
    constructor(distance: number) {
        super(distance, "aerienne");
    }

    public info(): string {
        return `Cargaison Aérienne - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}`;
    }
}

class CargaisonMaritime extends Cargaison {
    static codeUnique: string = "SEA456"; // Code unique pour les cargaisons maritimes

    constructor(distance: number) {
        super(distance, "maritime");
    }

    public info(): string {
        return `Cargaison Maritime - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}`;
    }


}

class CargaisonRoutiere extends Cargaison {
    static codeUnique: string = "ROAD789"; // Code unique pour les cargaisons routières
    constructor(distance: number) {
        super(distance, "routiere");
    }

    public info(): string {
        return `Cargaison Routière - Distance: ${this.distance} km, Nombre de produits: ${this.nbProduits()}`;
    }
}

export { Cargaison, CargaisonAerienne, CargaisonMaritime, CargaisonRoutiere };
    