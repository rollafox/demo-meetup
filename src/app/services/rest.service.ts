import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestConfigurationInterface, Configuration } from '../models/rest/configuration';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Accept': 'application/json'
        })
    };
    private configuration;

    constructor(private http: HttpClient) {
    }

    setConfiguration(config: RestConfigurationInterface) {
        this.configuration = new Configuration(config);
    }

    get(dir: string, params = {}): any {
        return this.http.get(this.configuration.getUrl(dir), Object.assign(this.httpOptions, params));
    }

    post() {

    }

}
