import { Injectable } from '@angular/core';

import { Category } from '../../models/category.model';

export interface Cache<T> {
    [prefixedKey: string]: { [key: string]: T };
}

const DEFAULT_PREFIX = 'dvt-mu';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    cached: Cache<Category> = {}; // TODO: use Generics to infer Type.

    constructor() {
    }

    setCache(key, value, prefix?: string): void {
        if (this.cached[key] === value) {
            return;
        }
        this.cached[key] = value;
        this.saveToStorage(prefix);
    }

    getFromCache(key, prefix?: string): { [key: string]: Category } | null {
        if (!this.cached[key]) {
            this.cached = this.getFromStorage(prefix);
        }
        return this.cached[key] || null;
    }

    private saveToStorage(prefix: string = DEFAULT_PREFIX): void {
        // TODO: disallow none-json stuff from entering.
        localStorage.setItem(prefix, JSON.stringify(this.cached));
    }

    // TODO: improve error catching
    private getFromStorage(prefix: string = DEFAULT_PREFIX): Cache<Category> {
        let storedPackage;
        try {
            storedPackage = JSON.parse(localStorage.getItem(prefix));
        } catch (error) {
            // fails silently.
        }
        return storedPackage || {};
    }

}
