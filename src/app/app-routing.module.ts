import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        data: { title: 'Your Settings' }
    },
    {
        path: 'groups',
        component: GroupsComponent,
        data: { title: 'Groups' }
    },
    {
        path: '',
        redirectTo: '/groups',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
