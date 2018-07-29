import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dvt-mu-preference-display',
  templateUrl: './preference-display.component.html',
  styleUrls: ['./preference-display.component.css']
})
export class PreferenceDisplayComponent implements OnInit {
    @Input('preference') preference = null;
  constructor() { }

  ngOnInit() {
  }

}
