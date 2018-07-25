import { RestConfigurationInterface } from './configuration';

export const MeetUpConfiguration: RestConfigurationInterface = {
    REST_BASE: 'https://api.meetup.com/',
    BASE: 'https://cors-anywhere.herokuapp.com/',
    API_KEY: '?key=626f673d31706171155922224b3767'
};

export const ApiEndPoint = {
    GET: {
        CATEGORIES: '2/categories',
        GROUPS: 'find/groups'
    }
};
