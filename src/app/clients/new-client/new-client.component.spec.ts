import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideNgxMask } from 'ngx-mask';

import { NewClientComponent } from './new-client.component';

describe('NewClientComponent', () => {
  let component: NewClientComponent;
  let fixture: ComponentFixture<NewClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewClientComponent, HttpClientTestingModule, NoopAnimationsModule],
      providers: [provideRouter([]), provideNgxMask()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
