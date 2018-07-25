import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../../models/category.model';
import { MeetUpConfiguration, ApiEndPoint } from '../_configuration/meetup-configuration';
import { MeetUpGroupResponse } from '../../models/rest/meetup-responses.model';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';
import { Utils } from '../../utils/url-parameter.helper';

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
