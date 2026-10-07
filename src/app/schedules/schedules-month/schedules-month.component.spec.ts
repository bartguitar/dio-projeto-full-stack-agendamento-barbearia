import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { SchedulesMonthComponent } from './schedules-month.component';

describe('SchedulesMonthComponent', () => {
  let component: SchedulesMonthComponent;
  let fixture: ComponentFixture<SchedulesMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulesMonthComponent, HttpClientTestingModule, NoopAnimationsModule, MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
