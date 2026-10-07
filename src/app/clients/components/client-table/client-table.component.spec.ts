import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ClientTableComponent } from './client-table.component';

describe('ClientTableComponent', () => {
  let component: ClientTableComponent;
  let fixture: ComponentFixture<ClientTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientTableComponent, NoopAnimationsModule, MatDialogModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
