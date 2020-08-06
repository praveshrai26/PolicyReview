import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ApproverComponent } from './approver/approver.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicyComparisionComponent } from './policy-comparision/policy-comparision.component';
import { DraftsComponent } from './drafts/drafts.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PolicyVerificationComponent } from './policy-verification/policy-verification.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import { MosaicDataVerificationComponent } from './mosaic-data-verification/mosaic-data-verification.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CommentsectionComponent } from './commentsection/commentsection.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ReviewerComponent,
    ApproverComponent,
    TopBarComponent,
    PolicyComparisionComponent,
    DraftsComponent,
    HomeComponent,
    PolicyVerificationComponent,
    MosaicDataVerificationComponent,
    CommentsectionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatSliderModule,
    MatBadgeModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    NgxDocViewerModule
  ],
  providers: [AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
