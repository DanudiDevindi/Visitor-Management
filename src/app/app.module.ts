import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckInVisitorsComponent } from './pages/check-in-visitors/check-in-visitors.component';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';
import { CheckedInVisitorsComponent } from './pages/checked-in-visitors/checked-in-visitors.component';
import { OverdueCheckedInComponent } from './pages/overdue-checked-in/overdue-checked-in.component';
import { CheckedOutVisitorsComponent } from './pages/checked-out-visitors/checked-out-visitors.component';
import { ManageStaffComponent } from './pages/manage-staff/manage-staff.component';
import { ManageSystemUsersComponent } from './pages/manage-system-users/manage-system-users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { UserLoginComponent } from './pages/user-login/user-login.component';

import { ManageBuildingsComponent } from './pages/manage-buildings/manage-buildings.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    CheckInVisitorsComponent,
    CheckedInVisitorsComponent,
    OverdueCheckedInComponent,
    CheckedOutVisitorsComponent,
    ManageStaffComponent,
    ManageSystemUsersComponent,
    DashboardComponent,
    UserLoginComponent,
    ManageBuildingsComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    JwPaginationModule,
   AutocompleteLibModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
