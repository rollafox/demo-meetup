import { TestBed, inject } from '@angular/core/testing';

import { CacheService } from './cache.service';

describe('CacheService', () => {
    let testCacheValue;
    let saveToStorageSpy: { saveToStorage: jasmine.Spy };
    beforeEach(() => {
        testCacheValue = {
            'test': 'value'
        };
        saveToStorageSpy = jasmine.createSpyObj('CacheService', ['saveToStorage']);
        // clear any storage
        localStorage.clear();
        TestBed.configureTestingModule({
            providers: [CacheService]
        });
    });

    it('should be created', inject([CacheService], (service: CacheService) => {
        expect(service).toBeTruthy();
    }));

    it('setCacheFn should cache value with key', inject([CacheService], (service: CacheService) => {
        service.setCache('test', testCacheValue);
        expect(service.cached['test']).toEqual(testCacheValue);
    }));

    it('getFromCacheFn should return cache value from key', inject([CacheService], (service: CacheService) => {
        service.setCache('test', testCacheValue);
        expect(service.getFromCache('test')).toEqual(testCacheValue);
    }));

    it('getFromCacheFn should return null if key not found', inject([CacheService], (service: CacheService) => {
        expect(service.getFromCache('randomKey')).toBe(null);
    }));

    it('getFromStorageFn should return cached values with prefix', inject([CacheService], (service: CacheService) => {
        service.setCache('test', testCacheValue, 'prefix');
        expect(service['getFromStorage']('prefix')).toEqual({ 'test': testCacheValue });
    }));

    it('getFromStorageFn should return {} if nothing is set', inject([CacheService], (service: CacheService) => {
        expect(service['getFromStorage']('prefix')).toEqual({});
    }));

});
