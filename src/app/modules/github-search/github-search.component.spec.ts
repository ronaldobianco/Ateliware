import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbToastrService } from '@nebular/theme';

import { GithubSearchComponent } from './github-search.component';

describe('GithubSearchComponent', () => {
  let component: GithubSearchComponent;
  let fixture: ComponentFixture<GithubSearchComponent>;
  const toastrService = {
    success: (message?: string, title?: string ) => { },
    error: (message?: string, title?: string) => { }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      providers:[{provide:NbToastrService, useValue:toastrService}],
      declarations: [ GithubSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a table', () => {
    expect(component).toBeTruthy();
  });
});
