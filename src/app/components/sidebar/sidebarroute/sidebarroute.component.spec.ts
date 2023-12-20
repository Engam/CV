import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrouteComponent } from './sidebarroute.component';

describe('SidebarrouteComponent', () => {
  let component: SidebarrouteComponent;
  let fixture: ComponentFixture<SidebarrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarrouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
