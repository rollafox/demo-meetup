import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
    selector: 'dvt-mu-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(rest: RestService) {
       rest.getCategories().subscribe((data) => { // Continuation of API Assessment
            console.log('Data! ', data);
        });
    }
}
