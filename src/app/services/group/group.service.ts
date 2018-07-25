import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../models/category.model';
import { MeetUpConfiguration } from '../../models/rest/meetup-configuration';
import { MeetUpGroupResponse } from '../../models/rest/meetup-responses.model';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService extends RestService {

    constructor(http: HttpClient, private cacheService: CacheService) {
        super(http);
        this.setConfiguration(MeetUpConfiguration);
    }

    getPreference() {
        return this.cacheService.getFromCache('category');
    }

    buildParams(arr: Array<Category>) {
        const commaSeparated = arr.reduce((acc, category) => {
            return `${acc},${category.id}`;
        }, ''),
            params = new HttpParams({
                fromObject: {
                    category: commaSeparated
                }
            });
        return params;
    }

    findGroups(categoryFilters): Observable<any> {
        return this.get('find/groups', {params: this.buildParams(categoryFilters)}).pipe(map((response: MeetUpGroupResponse) => response));
    }

}
