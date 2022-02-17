import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoronlineComponent } from './doctoronline.component';
import { Doctor } from '../interface/doctor.interface';

describe('DoctoronlineComponent', () => {
  let component: DoctoronlineComponent;
  let fixture: ComponentFixture<DoctoronlineComponent>;

  let doctoractivo:Doctor = {
    status : 'active'
  }

  let doctordormido:Doctor = {
    status : 'inactive'
  }



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctoronlineComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoronlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be true if doctor is active', () => {
    expect(component.isDoctorOnline(doctoractivo)).toBe(true);
  });

  it('should be false if doctor is inactive', () => {
    expect(component.isDoctorOnline(doctordormido)).toBe(false);
  });

});
