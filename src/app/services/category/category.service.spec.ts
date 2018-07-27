import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { RestService } from '../rest.service';
import { CategoryService } from './category.service';

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

    it('getCategoriesFn should call rest.getFn once', async(
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
