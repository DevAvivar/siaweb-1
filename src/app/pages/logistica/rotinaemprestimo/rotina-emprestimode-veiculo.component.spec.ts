import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinaEmprestimodeVeiculoComponent } from './rotina-emprestimode-veiculo.component';

describe('RotinaEmprestimodeVeiculoComponent', () => {
  let component: RotinaEmprestimodeVeiculoComponent;
  let fixture: ComponentFixture<RotinaEmprestimodeVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotinaEmprestimodeVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotinaEmprestimodeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
