import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../models/category.model';
import { MeetUpCategoryResponse } from '../../models/rest/meetup-responses.model';
import { ApiEndPoint } from '../_configuration/meetup-configuration';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    category = []; // TODO: store all categories here... no need to do this call every time.

    constructor(private rest: RestService, private cacheService: CacheService) {
    }

    getCategories(): Observable<Array<Category>> {
        return this.rest.get(
            ApiEndPoint.GET.CATEGORIES
        ).pipe(
            map((response: MeetUpCategoryResponse) => {
                return <Array<Category>>response.results.map(
                    (resultCategory) => {
                        return new Category(resultCategory);
                    }
                );
            })
        );
    }

}
