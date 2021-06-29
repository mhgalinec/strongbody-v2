import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeasurementsComponent } from './update-measurement.component';

describe('UpdateMeasurementsComponent', () => {
  let component: UpdateMeasurementsComponent;
  let fixture: ComponentFixture<UpdateMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
