import { Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor() { }
    homepageNumber: number[] = [];
    nouser = false;

    validateUser(val: number) {
        console.log('from Service:' + val);
        this.homepageNumber.push(val);
        this.existingUser(this.homepageNumber);
    }
    existingUser(num: any) {
        for (let i = 0; i < this.homepageNumber.length; i++) {
            if (this.homepageNumber[i] === num) {
                console.log('user available');
            }
            else {
                console.log('User Not Available');
                this.nouser = true;
            }
        }
    }
   
}