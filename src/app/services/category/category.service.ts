import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../models/category.model';
import { MeetUpConfiguration } from '../../models/rest/meetup-configuration';
import { MeetUpCategoryResponse } from '../../models/rest/meetup-responses.model';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends RestService {

    constructor(http: HttpClient, private cacheService: CacheService) {
        super(http);
        this.setConfiguration(MeetUpConfiguration);
    }

    getCategories(): Observable<Array<Category>> {
        return this.get('2/categories').pipe(map((response: MeetUpCategoryResponse) => <Array<Category>>response.results));
    }

    selectPreference(category: Category) {
        this.cacheService.setCategory('category', category);
    }

}
