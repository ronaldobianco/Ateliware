import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/core/services/repository.service';

@Component({
  selector: 'app-detail-repository',
  templateUrl: './detail-repository.component.html',
  styleUrls: ['./detail-repository.component.scss']
})
export class DetailRepositoryComponent implements OnInit {
  repositoryDetail$: any;
  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService,
  ) { }


  ngOnInit(): void {
    const path = this.route.snapshot.params.path;
    this.repositoryDetail$ = this.repositoryService.getRepositoryById(path).pipe((items)=>items);
  }

}
