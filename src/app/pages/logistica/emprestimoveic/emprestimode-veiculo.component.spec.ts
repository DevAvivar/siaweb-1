import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimodeVeiculoComponent } from './emprestimode-veiculo.component';

describe('EmprestimodeVeiculoComponent', () => {
  let component: EmprestimodeVeiculoComponent;
  let fixture: ComponentFixture<EmprestimodeVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimodeVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimodeVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
