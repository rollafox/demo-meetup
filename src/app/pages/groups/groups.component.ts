import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GroupService } from '../../services/group/group.service';
import { SettingsService } from '../../services/settings/settings.service';
import { Category } from '../../models/category.model';

@Component({
    selector: 'dvt-mu-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
    groups$;
    selectedFilters: Array<Category> = [];
    preference: Category;
    placeholderImg = './assets/img/placeholder.png';

    constructor(private groupService: GroupService,
        private settingsService: SettingsService) { }

    ngOnInit() {
        this.preference = this.settingsService.getPreference();
        this.groups$ = this.groupService.findGroups(this.getPreSetPref());
    }

    addFilter(selected: Array<Category>) {
        this.selectedFilters.length = 0;
        this.selectedFilters.push(...selected);
        this.groups$ = this.groupService.findGroups(this.getPreSetPref());
    }

    getPreSetPref() {
        if (this.preference) {
            this.selectedFilters.push(this.preference);
        }
        return this.selectedFilters;
    }

    truncate(str, length = 150) {
        return str.substr(0, Math.min(str.length, length));
    }
}
