import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnplannedServiceComponent } from './create-unplanned-service.component';

describe('CreateUnplannedServiceComponent', () => {
  let component: CreateUnplannedServiceComponent;
  let fixture: ComponentFixture<CreateUnplannedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUnplannedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnplannedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
