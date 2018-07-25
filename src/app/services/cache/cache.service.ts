import { Injectable } from '@angular/core';

import { Category } from '../../models/category.model';

interface Cache<T> {
    [prefixedKey: string]: {[key: string]: T};
}

const DEFAULT_PREFIX = 'dvt-mu';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    cached: Cache<Category> = {[DEFAULT_PREFIX]: {}}; // TODO: use Generics to infer Type.

    constructor() {
        this.cached = this.getFromStorage();
    }

    setCache(key, value, prefix?: string) {
        if (this.cached[key] === value) {
            return;
        }
        this.cached[key] = value;
        this.saveToStorage(prefix);
    }

    getFromCache(key, prefix?: string) {
        if (!this.cached[key]) {
            // TODO: check/get in local storage
        }
        return this.cached[key] || null;
    }

    saveToStorage(prefix = DEFAULT_PREFIX) {
        localStorage.setItem(prefix, JSON.stringify(this.cached));
    }

    // TODO: improve error catching
    getFromStorage(prefix = DEFAULT_PREFIX) {
        let storedPackage;
        try {
            storedPackage = JSON.parse(localStorage.getItem(prefix));
        } catch (error) {
            // fails silently.
        }
        return storedPackage || {};
    }

}
