import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, async } from '@angular/core/testing';

import { RestConfigurationInterface, Configuration } from './_configuration/configuration';
import { RestService } from './rest.service';
import { MeetUpConfiguration } from './_configuration/meetup-configuration';


describe('RestService', () => {
    let httpClient: HttpClient,
        httpTestingController: HttpTestingController,
        restConfigurationFake: RestConfigurationInterface,
        meetUpEndPoints: RestConfigurationInterface;

    beforeEach(() => {
        restConfigurationFake = {
            REST_BASE: '/api',
            BASE: 'https://example.com',
            API_KEY: '?1234'
        };
        meetUpEndPoints = MeetUpConfiguration;
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RestService]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', inject([RestService], (service: RestService) => {
        expect(service).toBeTruthy();
    }));

    it('configuration should default to meet-up end points', inject([RestService],
        (service: RestService) => {
            const config = new Configuration(meetUpEndPoints);
            expect(service['configuration']).toEqual(config);
        })
    );

    it('setConfigurationFn should update configuration', inject([RestService],
        (service: RestService) => {
            const config = new Configuration(restConfigurationFake);
            service.setConfiguration(restConfigurationFake);
            expect(service['configuration']).toEqual(config);
        })
    );

    it('configuration getUrlFn should return `{BASE}{REST_BASE}{param end point}{API_KEY}`', inject([RestService],
        (service: RestService) => {
            service.setConfiguration(restConfigurationFake);
            const testUrl = service['configuration'].getUrl('/test/end');
            expect(testUrl).toEqual('https://example.com/api/test/end?1234');
        })
    );

    it('should expect getFn to do one GET to `/test/end`', async(
        inject([HttpClient, HttpTestingController, RestService],
            (http: HttpClient, backend: HttpTestingController, service: RestService) => {
                service.setConfiguration(restConfigurationFake);
                service.get('/test/end').subscribe();
                backend.expectOne({
                    url: 'https://example.com/api/test/end?1234',
                    method: 'GET'
                });
            })
        )
    );

});
