import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Category } from '../../models/category.model';
import { Group, GroupConf } from '../../models/group.model';
import { Utils } from '../../utils/url-parameter.helper';
import { ApiEndPoint } from '../_configuration/meetup-configuration';
import { CacheService } from '../cache/cache.service';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private rest: RestService, private cacheService: CacheService) {
    }

    findGroups(categoryFilters: Array<Category>): Observable<Array<Group>> {
        return this.rest.get(
            ApiEndPoint.GET.GROUPS, Utils.buildParamsFromArray<Category>('category', categoryFilters)
        ).pipe(
            map((response: Array<GroupConf>) => {
                return response.map(group => new Group(group));
            })
        );
    }

}
