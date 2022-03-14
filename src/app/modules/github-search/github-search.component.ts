import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Repository } from 'src/app/core/services/models/repository.model';
import { RepositoryService } from 'src/app/core/services/repository.service';
import { ObjectReducer } from 'src/app/shared/ObjectReducer';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./github-search.component.scss'],
})
export class GithubSearchComponent implements OnInit {
  loadingSpinner = false;
  languageList$: any;
  languageProps$: any = [
    {
      img: 'https://bgasparotto.com/wp-content/uploads/2016/03/ruby-logo.png',
      value: 'ruby',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
      value: 'vue',
    },
    {
      img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
      value: 'angular',
    },
    {
      img: 'https://cdn.picpng.com/logo/language-logo-python-44976.png',
      value: 'python',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
      value: 'react',
    },
  ];
  singleSelectGroupValue = [];
  constructor(
    private repositoryService: RepositoryService,
    private toastrService: NbToastrService,
    private objectReducer: ObjectReducer,
  ) {
  }
  ngOnInit(): void {
    this.updateRepositoryList();
  }
  updateRepositoryList(language?: string): any {
    this.loadingSpinner = true;
    this.languageList$ = this.repositoryService.getGithubRepositories(language ? language : 'angular').pipe((items)=>items);
    this.loadingSpinner = false;
  }
  saveRepositoty(repository: Repository): void {
    const payload = this.objectReducer.reducePayload(repository);
    this.repositoryService.postRepository(payload).subscribe((response) => {
      this.toastrService.show(
        200 || 'Success',
        `${repository.name} adicionado com sucesso`
      );
    });
  }
}
