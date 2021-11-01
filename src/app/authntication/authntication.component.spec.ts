import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthnticationComponent } from './authntication.component';

describe('AuthnticationComponent', () => {
  let component: AuthnticationComponent;
  let fixture: ComponentFixture<AuthnticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthnticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthnticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
