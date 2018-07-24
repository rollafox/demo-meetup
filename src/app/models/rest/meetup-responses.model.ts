import { Category } from '../category.model';
import { Group } from '../group.model';

export interface MeetUpCategoryResponse {
    results: Array<Category>;
    meta: Object;
}

export interface MeetUpGroupResponse {
    [key: string]: Group;
}
