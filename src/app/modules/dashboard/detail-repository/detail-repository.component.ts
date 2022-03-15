import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/core/services/repository.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-repository',
  templateUrl: './detail-repository.component.html',
  styleUrls: ['./detail-repository.component.scss']
})
export class DetailRepositoryComponent implements OnInit {
  repositoryDetail$: any;
  loadingSpinner = false;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.setSpinner(true);
    const path = this.route.snapshot.params.path;
    this.repositoryDetail$ = this.repositoryService.getRepositoryById(path).pipe((items)=>{
      this.setSpinner(false);
      return items;
    });
  }
  goBack(): void{
    this.location.back();
  }
  setSpinner(spinnerValue: boolean): void{
    this.loadingSpinner = spinnerValue;
  }

}
