import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationPersoComponent } from './form-creation-perso.component';

describe('FormCreationPersoComponent', () => {
  let component: FormCreationPersoComponent;
  let fixture: ComponentFixture<FormCreationPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreationPersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreationPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
