import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { of, BehaviorSubject } from 'rxjs';
import { RestService } from '../rest.service';
import { CategoryService } from './category.service';
import { Category } from '../../models/category.model';

describe('CategoryService', () => {
    let restServiceSpy: jasmine.SpyObj<RestService>,
    testCategory: Array<Category>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('RestService', ['get']);
        testCategory = [
            new Category({
                'id': 1,
                'name': 'Arts & Culture',
                'shortname': 'Arts'
            })
        ];
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

    it('fetchCategoriesFn should call rest.getFn once', async(
        inject([RestService, CategoryService],
            (rest: RestService, service: CategoryService) => {
                const testResponse = {
                    results: [],
                    meta: {}
                };
                restServiceSpy.get.and.returnValue(of(testResponse));
                service.fetchCategories();
                expect(restServiceSpy.get.calls.count()).toEqual(1);
            }
        )
    ));

    it('getCategoriesFn should call rest.getFn once and return Subject<Array<Category>>', async(
        inject([RestService, CategoryService],
            (rest: RestService, service: CategoryService) => {
                const testResponse = {
                    results: [
                        {
                            'id': 1,
                            'name': 'Arts & Culture',
                            'shortname': 'Arts'
                        }
                    ],
                    meta: {}
                };
                restServiceSpy.get.and.returnValue(of(testResponse));
                service.getCategories();
                expect(restServiceSpy.get.calls.count()).toEqual(1);
                expect(service.categories.value).toEqual(testCategory);
            }
        )
    ));

    it('getCategoriesFn should not Call getFn if Categories available', async(
        inject([RestService, CategoryService],
            (rest: RestService, service: CategoryService) => {
                service.categories.next(testCategory);
                restServiceSpy.get.and.returnValue(of([]));
                service.getCategories();
                expect(restServiceSpy.get.calls.count()).toEqual(0);
            }
        )
    ));

});
