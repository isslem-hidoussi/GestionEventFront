import { EventType } from "@angular/router";
import { Organisateur } from "./organisateur";
import { Participant } from "./participant";

export interface EventInterface{
id : number;
libelle:string;
date:Date;
lieux:String;
nbMaxParticipants:number;
description:string;
type:EventType;
organisateurs:Organisateur[];
participants:Participant[];



}