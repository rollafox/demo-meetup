import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeetUpConfiguration } from '../../models/rest/meetup-configuration';
import { MeetUpGroupResponse } from '../../models/rest/meetup-responses.model';
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
        return this.cacheService.getCategory();
    }

    // TODO: param builder i.e. category=3,5,7

    findGroups(): Observable<any> {
        return this.get('find/groups').pipe(map((response: MeetUpGroupResponse) => response));
    }

}
