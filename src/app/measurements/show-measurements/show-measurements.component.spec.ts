import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMeasurementsComponent } from './show-measurements.component';

describe('ShowMeasurementsComponent', () => {
  let component: ShowMeasurementsComponent;
  let fixture: ComponentFixture<ShowMeasurementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMeasurementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
