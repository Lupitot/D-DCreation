import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenduApiComponent } from './rendu-api.component';

describe('RenduApiComponent', () => {
  let component: RenduApiComponent;
  let fixture: ComponentFixture<RenduApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenduApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenduApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
