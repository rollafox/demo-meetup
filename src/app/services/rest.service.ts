import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestConfigurationInterface, Configuration } from './_configuration/configuration';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    private httpHeaders: HttpHeaders = new HttpHeaders({
            'Accept': 'application/json'
        });
    private configuration;

    constructor(private http: HttpClient) {
    }

    setConfiguration(config: RestConfigurationInterface) {
        // TODO: check the setting-up of this config like this is a good idea.
        this.configuration = new Configuration(config);
    }

    get(dir: string, params?: HttpParams): any {
        const headers = this.httpHeaders;
        return this.http.get(this.configuration.getUrl(dir), {headers, params});
    }

    post() {
        // Note: this is not required for the scope of the app at this time
    }

}
