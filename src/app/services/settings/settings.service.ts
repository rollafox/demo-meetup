import { Injectable } from '@angular/core';

import { Category } from '../../models/category.model';
import { CacheService } from '../cache/cache.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor(private cacheService: CacheService) { }

    setPreference(category: Category): void {
        this.cacheService.setCache('category', category, 'dvt-mu-category-pref');
    }

    getPreference(): Category {
        return this.cacheService.getFromCache('category', 'dvt-mu-category-pref')['category'];
    }

    clearAllPreference() {

    }

}
