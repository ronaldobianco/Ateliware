import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Repository } from 'src/app/core/services/models/repository.model';
import { RepositoryService } from 'src/app/core/services/repository.service';

@Component({
  selector: 'app-saved-repositories',
  templateUrl: './saved-repositories.component.html',
  styleUrls: ['./saved-repositories.component.scss'],
})
export class SavedRepositoriesComponent implements OnInit {
  repositoryList$: any;
  loadingSpinner = false;
  constructor(
    private repositoryService: RepositoryService,
    private router: Router,
    private toastrService: NbToastrService
    ) {}
  ngOnInit(): void {
    this.repositoryList$ = this.repositoryService.getListRepositories().pipe((items)=>items);
  }
  openDetailRopository(repository: Repository): void{
    this.router.navigate([`/dashboard/repositories/:${repository.id}` , {path:repository.name}]);
  }
  deleteRepository(repository: Repository): void{
    this.loadingSpinner = true;
    this.repositoryList$ = this.repositoryService.deleteRepository(repository).pipe((items)=>{
      this.toastrService.show(200 || 'Success', `${repository.name} deletado com sucesso`);
      this.loadingSpinner = false;
      return items;
    });
  }
}
