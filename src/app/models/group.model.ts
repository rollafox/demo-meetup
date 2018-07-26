/*
TODO: improve this model... Will need to assess what will be required.
See: https://www.meetup.com/meetup_api/docs/find/groups/
*/
import { Category } from './category.model';

export interface GroupConf {
    approved?: string;
    category: Category;
    city: string;
    country: string;
    created: number;
    description: string;
    group_photo: Object;
    id: number;
    lat: number;
    link: string;
    localized_country_name: string;
    localized_location: string;
    lon: number;
    members: number;
    name: string;
    next_event: Object;
    visibility: string;
}

export class Group implements GroupConf {
    approved: string;
    category: Category;
    city: string;
    country: string;
    created: number;
    description: string;
    group_photo: Object;
    id: number;
    lat: number;
    link: string;
    localized_country_name: string;
    localized_location: string;
    lon: number;
    members: number;
    name: string;
    next_event: Object;
    visibility: string;

    constructor(conf: GroupConf) {
        this.approved = conf.approved;
        this.category = conf.category;
        this.city = conf.city;
        this.country = conf.country;
        this.created = conf.created;
        this.description = conf.description;
        this.group_photo = conf.group_photo;
        this.id = conf.id;
        this.lat = conf.lat;
        this.link = conf.link;
        this.localized_country_name = conf.localized_country_name;
        this.localized_location = conf.localized_location;
        this.lon = conf.lon;
        this.members = conf.members;
        this.name = conf.name;
        this.next_event = conf.next_event;
        this.visibility = conf.visibility;
    }
}

