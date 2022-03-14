import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NbToastrModule, NbToastrService } from '@nebular/theme';

import { SavedRepositoriesComponent } from './saved-repositories.component';

describe('SavedRepositoriesComponent', () => {
  let component: SavedRepositoriesComponent;
  let fixture: ComponentFixture<SavedRepositoriesComponent>;
  const toastrService = {
    success: (message?: string, title?: string ) => { },
    error: (message?: string, title?: string) => { }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule , RouterTestingModule],
      providers: [ {provide:NbToastrService, useValue:toastrService} ],
      declarations: [ SavedRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
