import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class AboutUsService {
    constructor(private http:HttpClient){}

    getUseApi(){
        return this.http.get('https://api.github.com/users');
    }

}