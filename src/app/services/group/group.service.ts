import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { Utils } from '../../utils/url-parameter.helper';
import { ApiEndPoint, MeetUpConfiguration } from '../_configuration/meetup-configuration';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';
import { map } from '../../../../node_modules/rxjs/operators';
import { MeetUpGroupResponse } from '../../models/rest/meetup-responses.model';
import { Group, GroupConf } from '../../models/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService extends RestService {

    constructor(http: HttpClient, private cacheService: CacheService) {
        super(http);
    }

    findGroups(categoryFilters: Array<Category>): Observable<Array<Group>> {
        return this.get(
            ApiEndPoint.GET.GROUPS, Utils.buildParamsFromArray<Category>('category', categoryFilters)
        ).pipe(
            map((response: Array<GroupConf>) => {
                return response.map(group => new Group(group));
            })
        );
    }

}
