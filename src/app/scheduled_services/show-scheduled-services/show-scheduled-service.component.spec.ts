import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduledServiceComponent } from './show-scheduled-service.component';

describe('ShowScheduledServiceComponent', () => {
  let component: ShowScheduledServiceComponent;
  let fixture: ComponentFixture<ShowScheduledServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScheduledServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduledServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
