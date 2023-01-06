import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargadeMateriaPrimaComponent } from './descargade-materia-prima.component';

describe('DescargadeMateriaPrimaComponent', () => {
  let component: DescargadeMateriaPrimaComponent;
  let fixture: ComponentFixture<DescargadeMateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargadeMateriaPrimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargadeMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
