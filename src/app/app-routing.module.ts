import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ApproverComponent } from './approver/approver.component';
import { HomeComponent } from './home/home.component';
import { PolicyComparisionComponent } from './policy-comparision/policy-comparision.component';
import { DraftsComponent } from './drafts/drafts.component';
import { PolicyVerificationComponent } from './policy-verification/policy-verification.component';
import { MosaicDataVerificationComponent } from './mosaic-data-verification/mosaic-data-verification.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [{path:"",component: LoginComponent},
{path:"Admin", component:AdminComponent,canActivate: [AuthGuardService]},
{path:"Reviewer",component:ReviewerComponent,canActivate: [AuthGuardService]},
{path:"Approver",component:ApproverComponent,canActivate: [AuthGuardService]},
{path:"Home", component:HomeComponent,canActivate: [AuthGuardService],
children:[{
  path:"comparison",
  component:PolicyComparisionComponent
},{
  path:"drafts",
  component:DraftsComponent
},
{
  path:'',
  component:PolicyComparisionComponent
}]},
{path:"verify/:id",
component:PolicyVerificationComponent,canActivate: [AuthGuardService]},
{path:'Login',
component:LoginComponent},
{  path:'mosaicverification',
component:MosaicDataVerificationComponent,canActivate: [AuthGuardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
