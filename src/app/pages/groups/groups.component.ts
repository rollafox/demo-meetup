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
        this.selectedFilters.push(this.groupService.getPreference());
        this.groups$ = this.groupService.findGroups(this.selectedFilters);
    }

    addFilter(selected) {
        this.selectedFilters.push(selected);
    }

}
