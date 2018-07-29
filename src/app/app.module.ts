import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryLookupComponent } from './components/category-lookup/category-lookup.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { PreferenceDisplayComponent } from './components/preference-display/preference-display.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer/html-sanitizer.pipe';
import { CacheService } from './services/cache/cache.service';
import { CategoryService } from './services/category/category.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { GroupService } from './services/group/group.service';
import { RestService } from './services/rest.service';
import { SettingsService } from './services/settings/settings.service';

@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
        GroupsComponent,
        GroupCardComponent,
        CategoryLookupComponent,
        HtmlSanitizerPipe,
        PreferenceDisplayComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatChipsModule,
        MatSnackBarModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptorService,
            multi: true
        },
        RestService,
        CacheService,
        CategoryService,
        GroupService,
        SettingsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
