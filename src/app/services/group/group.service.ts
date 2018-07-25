import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { Utils } from '../../utils/url-parameter.helper';
import { ApiEndPoint, MeetUpConfiguration } from '../_configuration/meetup-configuration';
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

    findGroups(categoryFilters: Array<Category>): Observable<any> {
        return this.get(
            ApiEndPoint.GET.GROUPS, Utils.buildParamsFromArray<Category>('category', categoryFilters)
        );
    }

}
