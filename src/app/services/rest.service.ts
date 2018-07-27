import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration, DEFAULT_CONFIGURATION, RestConfigurationInterface } from './_configuration/configuration';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    protected configuration: Configuration = new Configuration(DEFAULT_CONFIGURATION);

    private httpHeaders: HttpHeaders = new HttpHeaders({
        'Accept': 'application/json'
    });

    constructor(private http: HttpClient) {
    }

    setConfiguration(config: RestConfigurationInterface) {
        this.configuration = new Configuration(config);
    }

    get(dir: string, params?: HttpParams): Observable<Object> {
        const headers = this.httpHeaders;
        return this.http.get(
            this.configuration.getUrl(dir),
            { headers, params }
        );
    }

    post() {
        // Note: this is not required for the scope of the app at this time
    }

}
