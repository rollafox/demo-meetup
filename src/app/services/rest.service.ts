import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) { }

    getCategories() { // Just Assessing the API.
        const httpOptions = {
          headers: new HttpHeaders({
              'Accept': 'application/json'
          })
        };
        return this.http.get(
            'https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/categories?key=626f673d31706171155922224b3767',
            httpOptions
        );
    }

}
