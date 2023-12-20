import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPresentationContainerComponent } from './user-presentation-container.component';

describe('UserPresentationContainerComponent', () => {
  let component: UserPresentationContainerComponent;
  let fixture: ComponentFixture<UserPresentationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPresentationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPresentationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
