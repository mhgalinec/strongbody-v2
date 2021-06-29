import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnplannedServiceComponent } from './update-unplanned-service.component';

describe('UpdateUnplannedServiceComponent', () => {
  let component: UpdateUnplannedServiceComponent;
  let fixture: ComponentFixture<UpdateUnplannedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnplannedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnplannedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
