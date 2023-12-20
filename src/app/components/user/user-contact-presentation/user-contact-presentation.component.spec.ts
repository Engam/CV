import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactPresentationComponent } from './user-contact-presentation.component';

describe('UserContactPresentationComponent', () => {
  let component: UserContactPresentationComponent;
  let fixture: ComponentFixture<UserContactPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContactPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserContactPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
