import { MeetUpConfiguration } from './meetup-configuration';

export const DEFAULT_CONFIGURATION: RestConfigurationInterface = MeetUpConfiguration;

export interface RestConfigurationInterface {
    readonly REST_BASE: string;
    readonly BASE: string;
    readonly API_KEY: string;
}

export class Configuration {
    private config: RestConfigurationInterface;

    constructor(config: RestConfigurationInterface) {
        this.config = config;
    }

    public getRestUrl(): string {
        return this.getBaseUrl() + this.config.REST_BASE;
    }

    public getBaseUrl(): string {
        return this.config.BASE;
    }

    public getUrl(dir: string): string {
        return this.getRestUrl() + dir + this.config.API_KEY;
    }
}
