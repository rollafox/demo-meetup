import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RestService } from './services/rest.service';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { CategoryService } from './services/category/category.service';
import { GroupService } from './services/group/group.service';
import { CacheService } from './services/cache/cache.service';
import { CategoryLookupComponent } from './components/category-lookup/category-lookup.component';
import { SettingsService } from './services/settings/settings.service';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer/html-sanitizer.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SettingsComponent,
        GroupsComponent,
        GroupCardComponent,
        CategoryLookupComponent,
        HtmlSanitizerPipe
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
        MatToolbarModule
    ],
    providers: [
        RestService,
        CacheService,
        CategoryService,
        GroupService,
        SettingsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
