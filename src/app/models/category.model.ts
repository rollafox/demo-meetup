interface CategoryConf {
    name: string;
    id: number;
    shortname: string;
}

export class Category {
    name: string;
    id: number;
    shortname: string;

    constructor(conf: CategoryConf) {
        this.name = conf.name;
        this.id = conf.id;
        this.shortname = conf.shortname;
    }
}
