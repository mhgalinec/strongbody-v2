import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScheduledServiceComponent } from './create-scheduled-service.component';

describe('CreateScheduledServiceComponent', () => {
  let component: CreateScheduledServiceComponent;
  let fixture: ComponentFixture<CreateScheduledServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScheduledServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScheduledServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
