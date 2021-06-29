import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnplannedServicesComponent } from './show-unplanned-services.component';

describe('ShowUnplannedServicesComponent', () => {
  let component: ShowUnplannedServicesComponent;
  let fixture: ComponentFixture<ShowUnplannedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnplannedServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnplannedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
