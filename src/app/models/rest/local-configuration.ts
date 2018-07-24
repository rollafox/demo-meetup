import { RestConfigurationInterface } from './configuration';

export const LocalConfiguration: RestConfigurationInterface = {
    REST_BASE: 'api/',
    BASE: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/',
    API_KEY: ''
};
