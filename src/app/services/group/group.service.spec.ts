import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Category } from '../../models/category.model';
import { RestService } from '../rest.service';
import { GroupService } from './group.service';

describe('GroupService', () => {
    let restServiceSpy: jasmine.SpyObj<RestService>,
        categoryFiltersFake: Array<Category>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('RestService', ['get']);
        categoryFiltersFake = [{
            'id': 1,
            'name': 'Arts & Culture',
            'shortname': 'Arts'
        }];
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                GroupService,
                {
                    provide: RestService,
                    useValue: spy
                }
            ]
        });
        restServiceSpy = TestBed.get(RestService);
    });

    it('should be created', inject([GroupService], (service: GroupService) => {
        expect(service).toBeTruthy();
    }));

    it('findGroupsFn should call rest.getFn once', async(
        inject([RestService, GroupService],
            (rest: RestService, service: GroupService) => {
                const testResponse = [];
                restServiceSpy.get.and.returnValue(of(testResponse));
                service.findGroups(categoryFiltersFake).subscribe();
                expect(restServiceSpy.get.calls.count()).toEqual(1);
            }
        )
    ));
});
