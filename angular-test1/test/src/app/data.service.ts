import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class DataService {
    constructor(){}

    existingUser(uid:string){
        return localStorage.getItem(uid) != null;
    }
}