import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DetailRepositoryComponent } from './detail-repository.component';

describe('DetailRepositoryComponent', () => {
  let component: DetailRepositoryComponent;
  let fixture: ComponentFixture<DetailRepositoryComponent>;
  const fakeActivatedRoute = {
    snapshot: { params: {}  }
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}],
      declarations: [ DetailRepositoryComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
