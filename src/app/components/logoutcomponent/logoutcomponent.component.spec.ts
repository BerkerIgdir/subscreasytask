import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutcomponentComponent } from './logoutcomponent.component';

describe('LogoutcomponentComponent', () => {
  let component: LogoutcomponentComponent;
  let fixture: ComponentFixture<LogoutcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
