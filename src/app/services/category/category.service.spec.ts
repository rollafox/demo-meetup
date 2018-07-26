import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, async } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { ApiEndPoint } from '../_configuration/meetup-configuration';
import { RestService } from '../rest.service';
import { of } from '../../../../node_modules/rxjs';

describe('CategoryService', () => {
    let restServiceSpy: jasmine.SpyObj<RestService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('RestService', ['get']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CategoryService,
                {
                    provide: RestService,
                    useValue: spy
                }
            ]
        });
        restServiceSpy = TestBed.get(RestService);
    });

    it('should be created', inject([CategoryService], (service: CategoryService) => {
        expect(service).toBeTruthy();
    }));

    it('should return categories', async(
        inject([RestService, CategoryService],
            (rest: RestService, service: CategoryService) => {
                const testResponse = {
                    results: [],
                    meta: {}
                };
                restServiceSpy.get.and.returnValue(of(testResponse));
                service.getCategories().subscribe();
                expect(restServiceSpy.get.calls.count()).toEqual(1);
            }
        )
    ));
});
