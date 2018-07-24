import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dvt-mu-group-card',
    templateUrl: './group-card.component.html',
    styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {
    @Input('cardItem') cardItem;

    constructor() { }

    ngOnInit() {
    }

}
