import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadedeEmprestimoComponent } from './prioridadede-emprestimo.component';

describe('PrioridadedeEmprestimoComponent', () => {
  let component: PrioridadedeEmprestimoComponent;
  let fixture: ComponentFixture<PrioridadedeEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioridadedeEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioridadedeEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
