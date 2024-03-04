import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponentComponent } from './races-component.component';

describe('RacesComponentComponent', () => {
  let component: RacesComponentComponent;
  let fixture: ComponentFixture<RacesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RacesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
