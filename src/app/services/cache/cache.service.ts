import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { Observable, Subject } from 'rxjs';

interface CategoryCache {
    value: string;
    key: string;
}

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    $cached: Subject<CategoryCache> = new Subject();

    // TODO: this service could use some work.
    constructor() {
    }

    setCategory(key, value) {
        this.$cached.next({
            'key': key,
            'value': value
        });
    }

    getCategory() {
        return this.$cached.asObservable();
    }

}
