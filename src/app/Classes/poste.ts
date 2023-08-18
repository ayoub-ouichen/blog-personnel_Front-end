export class Poste {

    p_id: Number;
    p_auteur: Number;
    p_titre: String;
    p_contenu: String;
    p_date_creation: Date;
    p_date_modification: Date;
    p_date_publication: Date;
    p_etat: String;
    p_lien: String;

    constructor() {
        this.p_id = 0;
        this.p_auteur = 0;
        this.p_titre = "";
        this.p_contenu = "";
        this.p_date_creation = new Date();
        this.p_date_modification = new Date();
        this.p_date_publication = new Date();
        this.p_etat = "";
        this.p_lien = "";
    }
}
