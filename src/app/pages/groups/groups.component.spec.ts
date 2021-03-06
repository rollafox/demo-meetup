import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { MatChipsModule } from '@angular/material/chips';
import { CategoryLookupComponent } from '../../components/category-lookup/category-lookup.component';
import { GroupCardComponent } from '../../components/group-card/group-card.component';
import { PreferenceDisplayComponent } from '../../components/preference-display/preference-display.component';
import { Category } from '../../models/category.model';
import { Group } from '../../models/group.model';
import { HtmlSanitizerPipe } from '../../pipes/html-sanitizer/html-sanitizer.pipe';
import { Storage } from '../../services/cache/cache.service';
import { CategoryService } from '../../services/category/category.service';
import { GroupService } from '../../services/group/group.service';
import { SettingsService } from '../../services/settings/settings.service';
import { GroupsComponent } from './groups.component';

describe('GroupsComponent', () => {
    let component: GroupsComponent,
        fixture: ComponentFixture<GroupsComponent>,
        testGroup: Array<Group>,
        testSettings: Storage<Category>,
        testCategory: Array<Category>;

    beforeEach(async(() => {
        testCategory = [{
            'id': 1,
            'name': 'Arts & Culture',
            'shortname': 'Arts'
        }];
        testGroup = [{
            approved: '',
            category: {
                'id': 1,
                'name': 'Arts & Culture',
                'shortname': 'Arts'
            },
            city: 'Johannesburg',
            country: 'ZA',
            created: 1429618362000,
            // tslint:disable-next-line:max-line-length
            description: '<p>Valerie has been inspired to provide music which will uplift one to another dimension in our hectic world of stress.</p>↵<p>Her programme is made up of her own compositions as well as the beautiful works of Beethoven, Chopin, Mozart and others. Her programme also gives a description on how to listen to the music being played so the uninitiated has another way in which to listen and enjoy the music.</p>↵<p>It has been proved that Music is powerful in helping people to relax and to go into meditation. This state takes people into another dimension. Being in this dimension creates healing in body, mind and spirit.<br></p>',
            group_photo: {
                base_url: 'https://secure.meetupstatic.com',
                highres_link: 'https://secure.meetupstatic.com/photos/event/a/0/f/2/highres_448421202.jpeg',
                id: 448421202,
                photo_link: 'https://secure.meetupstatic.com/photos/event/a/0/f/2/600_448421202.jpeg',
                thumb_link: 'https://secure.meetupstatic.com/photos/event/a/0/f/2/thumb_448421202.jpeg',
                type: 'event'
            },
            id: 18557248,
            lat: -26.19,
            link: 'https://www.meetup.com/Johannesburg-Piano-Recital_Music-Appreciation/',
            localized_country_name: 'South Africa',
            localized_location: 'Johannesburg, South Africa',
            lon: 28.04,
            members: 279,
            name: 'Johannesburg Piano Recital_Music Appreciation',
            next_event: {
                id: 'ffgqnpyxlbhb',
                name: 'Scenic Sounds_Meditation & Relaxation Programme',
                time: 1533473100000,
                utc_offset: 7200000,
                yes_rsvp_count: 1
            },
            visibility: 'public'
        }];
        testSettings = {
            'mu-category': {
                'category': {
                    'id': 1,
                    'name': 'Arts & Culture',
                    'shortname': 'Arts'
                }
            }
        };
        const categoryService = jasmine.createSpyObj('CategoryService', ['getCategories']),
            getCategoriesSpy = categoryService.getCategories.and.returnValue(of(testCategory)),
            groupService = jasmine.createSpyObj('GroupService', ['findGroups']),
            findGroupsSpy = groupService.findGroups.and.returnValue(of(testGroup)),
            settingsService = jasmine.createSpyObj('SettingsService', ['getPreference']),
            getPreferenceSpy = settingsService.getPreference.and.returnValue(of(testSettings));
        TestBed.configureTestingModule({
            declarations: [
                GroupsComponent,
                CategoryLookupComponent,
                GroupCardComponent,
                PreferenceDisplayComponent,
                HtmlSanitizerPipe
            ],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatInputModule,
                MatChipsModule,
                MatCardModule,
                MatAutocompleteModule
            ],
            providers: [
                { provide: CategoryService, useValue: categoryService },
                { provide: GroupService, useValue: groupService },
                { provide: SettingsService, useValue: settingsService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
