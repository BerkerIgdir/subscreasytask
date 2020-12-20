import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiterComponent } from './limiter.component';

describe('LimiterComponent', () => {
  let component: LimiterComponent;
  let fixture: ComponentFixture<LimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
