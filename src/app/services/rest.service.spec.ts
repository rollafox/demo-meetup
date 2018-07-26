import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { RestConfigurationInterface } from './_configuration/configuration';
import { RestService } from './rest.service';


describe('RestService', () => {
    let httpClient: HttpClient,
        httpTestingController: HttpTestingController,
        restConfigurationFake: RestConfigurationInterface;

    beforeEach(() => {
        restConfigurationFake = {
            REST_BASE: '/api',
            BASE: 'https://example.com',
            API_KEY: ''
        };
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RestService]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([RestService], (service: RestService) => {
        expect(service).toBeTruthy();
    }));
});
