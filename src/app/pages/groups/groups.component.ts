import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GroupService } from '../../services/group/group.service';

@Component({
    selector: 'dvt-mu-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
    groups$;
    selectedFilters = [];

    constructor(private groupService: GroupService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.groups$ = this.groupService.findGroups(this.getPreSetPref());
    }

    addFilter(selected) {
        if (!this.selectedFilters.find(filtered => selected.id === filtered.id)) {
            this.selectedFilters.push(selected);
            this.groups$ = this.groupService.findGroups(this.selectedFilters); // TODO: add smarter filter
        }
    }

    getPreSetPref() {
        const pref = this.groupService.getPreference();
        if (pref) {
            this.selectedFilters.push(pref);
        }
        return this.selectedFilters;
    }
}
