import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout-component/layout-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbButtonModule,
  NbToastrModule,
  NbTreeGridModule,
  NbButtonGroupModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardModule } from './modules/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SavedRepositoriesComponent } from './modules/dashboard/saved-repositories/saved-repositories.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailRepositoryComponent } from './modules/dashboard/detail-repository/detail-repository.component';
import { GithubSearchComponent } from './modules/github-search/github-search.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SavedRepositoriesComponent,
    DetailRepositoryComponent,
    GithubSearchComponent,
  ],
  imports: [
    HttpClientModule,
    RouterTestingModule,
    DashboardModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbButtonGroupModule,
    NbSpinnerModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
