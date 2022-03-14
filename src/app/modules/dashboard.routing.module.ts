import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailRepositoryComponent } from './dashboard/detail-repository/detail-repository.component';
import { SavedRepositoriesComponent } from './dashboard/saved-repositories/saved-repositories.component';
import { GithubSearchComponent } from './github-search/github-search.component';

const routes: Routes = [
  { path: 'repositories', component: SavedRepositoriesComponent },
  { path: 'search', component: GithubSearchComponent },
  { path: 'repositories/:id', component: DetailRepositoryComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
