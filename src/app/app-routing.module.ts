import { UserLoginComponent } from './pages/user-login/user-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageSystemUsersComponent } from './pages/manage-system-users/manage-system-users.component';
import { ManageStaffComponent } from './pages/manage-staff/manage-staff.component';
import { CheckedOutVisitorsComponent } from './pages/checked-out-visitors/checked-out-visitors.component';
import { OverdueCheckedInComponent } from './pages/overdue-checked-in/overdue-checked-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { CheckInVisitorsComponent } from './pages/check-in-visitors/check-in-visitors.component';
import { CheckedInVisitorsComponent } from './pages/checked-in-visitors/checked-in-visitors.component';
import { ManageBuildingsComponent } from './pages/manage-buildings/manage-buildings.component';
import {AuthGuard} from './auth/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'user-login',component:UserLoginComponent},
  {
    path: '',
    component: AdminComponent,
    canActivate : [AuthGuard],
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      // },

      //start create new component routings
      {
        path: 'dashboard',
        component:DashboardComponent,
        canActivate : [AuthGuard]
        },
      {
        path: 'check-in-visitors',
        component :CheckInVisitorsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'checked-in-visitors',
        component :CheckedInVisitorsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'overdue-checked-in',
        component :OverdueCheckedInComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'checked-out-visitors',
        component :CheckedOutVisitorsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'manage-staff',
        component :ManageStaffComponent,
        canActivate : [AuthGuard]
      },
      {
      path: 'manage-system-users',
      component: ManageSystemUsersComponent,
        canActivate : [AuthGuard]
      },
      {
      path: 'manage-buldings',
      component: ManageBuildingsComponent,
        canActivate : [AuthGuard]
      },
      // {
      // path: 'user-login',
      // component: UserLoginComponent,
      // },


       {
        path: 'basic',
        loadChildren: () => import('./pages/ui-elements/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./pages/ui-elements/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'user',
        loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
