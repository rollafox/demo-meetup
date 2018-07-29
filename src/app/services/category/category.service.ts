import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    categories: BehaviorSubject<Array<Category>> = new BehaviorSubject([]);

    constructor(private rest: RestService, private cacheService: CacheService) {
    }

    getCategories(): Observable<Array<Category>> {
        if (!this.categories.value.length) {
            this.fetchCategories();
        }
        return this.categories.asObservable();
    }

    fetchCategories() {
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
        ).subscribe(
            (results) => {
                this.categories.next(results);
            }
        );
    }

}
