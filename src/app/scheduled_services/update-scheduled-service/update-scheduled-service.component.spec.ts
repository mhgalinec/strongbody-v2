import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScheduledServiceComponent } from './update-scheduled-service.component';

describe('UpdateScheduledServiceComponent', () => {
  let component: UpdateScheduledServiceComponent;
  let fixture: ComponentFixture<UpdateScheduledServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScheduledServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateScheduledServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
