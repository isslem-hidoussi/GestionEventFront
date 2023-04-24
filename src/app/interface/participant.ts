import { Niveau } from "../enum/niveau.enum";
import { Section } from "../enum/section.enum";

export interface Participant{

    id: number;
    nom:String;
    prenom:String;
    mail:String;
    phoneNumber:number;
    niveau:Niveau;
    section:Section;

}