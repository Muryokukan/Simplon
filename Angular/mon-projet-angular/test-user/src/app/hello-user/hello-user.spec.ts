import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloUser } from './hello-user';

describe('HelloUser', () => {
  let component: HelloUser;
  let fixture: ComponentFixture<HelloUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
