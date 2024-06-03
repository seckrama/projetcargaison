abstract class Produit {
    public libelle: string;
    public poids: number;

    constructor(libelle: string, poids: number) {
        this.libelle = libelle;
        this.poids = poids;
    }

    public getLibelle(): string {
        return this.libelle;
    }

    public setLibelle(libelle: string): void {
        this.libelle = libelle;
    }

    public getPoids(): number {
        return this.poids;
    }

    public setPoids(poids: number): void {
        this.poids = poids;
    }

    public abstract info(): string;
}

class Alimentaire extends Produit {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }

    public info(): string {
        return `Alimentaire - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}



class Chimique extends Produit {
    public toxicite: number;

    constructor(libelle: string, poids: number, toxicite: number) {
        super(libelle, poids);
        this.toxicite = toxicite;
    }

    public getToxicite(): number {
        return this.toxicite;
    }

    public setToxicite(toxicite: number): void {
        this.toxicite = toxicite;
    }

    public info(): string {
        return `Chimique - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg, Toxicité: ${this.toxicite}`;
    }
}

abstract class Materiel extends Produit {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }

    public abstract info(): string;
}

class Fragile extends Materiel {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }

    public info(): string {
        return `Fragile - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}

class Incassable extends Materiel {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }

    public info(): string {
        return `Incassable - Libellé: ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}

export { Produit, Alimentaire, Chimique, Fragile, Incassable };
