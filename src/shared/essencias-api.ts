import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable() 
export class EssenciasApi {
    private baseUrl = 'https://essencias-narguile.firebaseio.com/';

    constructor (private http: Http) {
        
    }
    // private baseUrl = 'https://elite-schedule-app-5f195.firebaseio.com/' 
    // constructor(private http: Http) {

    // }
    

    getMarcas() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(data => resolve(data.json()))
        });
    }

    getSabor(saborid) {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments-data/${saborid}/sabor.json`).subscribe(data => resolve(data.json()))
        });
    }

    // getNomes(nome) {
    //     return new Promise(resolve => {
    //         this.http.get(`${this.baseUrl}/Marcas/${nome}.json`).subscribe(data => { 
    //             resolve(data.json());
    //         });
    //     });
    // }
}