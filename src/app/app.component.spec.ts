import { Directive, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonModule } from '../../node_modules/@angular/material/button';
import { MatToolbarModule } from '../../node_modules/@angular/material/toolbar';
import { By } from '../../node_modules/@angular/platform-browser';
import { AppComponent } from './app.component';

// copied from https://angular.io/guide/testing#components-with-routerlink
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[routerLink]',
    // tslint:disable-next-line:use-host-property-decorator
    host: { '(click)': 'onClick()' }
})
// tslint:disable-next-line:directive-class-suffix
class RouterLinkDirectiveStub {
    // tslint:disable-next-line:no-input-rename
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatToolbarModule,
                MatButtonModule
            ],
            declarations: [
                AppComponent,
                RouterLinkDirectiveStub
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render an h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Meet-up Demo');
    }));

    it('should render a menu(two links) in the header', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement,
            aLinks = compiled.querySelectorAll('header nav a'),
            firstLink = aLinks[0],
            secondLink = aLinks[1];
        expect(aLinks.length).toBe(2);
        expect(firstLink.textContent).toContain('Home', 'first Link to be "Home"');
        expect(secondLink.textContent).toContain('Settings', 'first Link to be "Settings"');
    }));

    it('should get routerLinks from template', async(() => {
        const fixture = TestBed.createComponent(AppComponent),
            linkDes = fixture.debugElement
                .queryAll(By.directive(RouterLinkDirectiveStub)),
            routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
        fixture.detectChanges();
        expect(routerLinks.length).toBe(2, 'should have 2 routerLinks');
        expect(routerLinks[0].linkParams).toBe('/groups');
        expect(routerLinks[1].linkParams).toBe('/settings');
    }));
});
