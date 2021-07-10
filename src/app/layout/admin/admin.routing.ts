import { OverdueCheckedInComponent } from './../../pages/overdue-checked-in/overdue-checked-in.component';
import { CheckInVisitorsComponent } from './../../pages/check-in-visitors/check-in-visitors.component';

import { Routes } from '@angular/router';
import { CheckedInVisitorsComponent } from 'src/app/pages/checked-in-visitors/checked-in-visitors.component';
export const AdminRoutes: Routes = [
    {path: 'check-in-visitors',component: CheckInVisitorsComponent },
    {path:'checked-in-visitors', component: CheckedInVisitorsComponent},
    {path: 'overdue-checked-in', component: OverdueCheckedInComponent}
]