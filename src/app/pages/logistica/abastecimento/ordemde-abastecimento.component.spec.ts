import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemdeAbastecimentoComponent } from './ordemde-abastecimento.component';

describe('OrdemdeAbastecimentoComponent', () => {
  let component: OrdemdeAbastecimentoComponent;
  let fixture: ComponentFixture<OrdemdeAbastecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemdeAbastecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemdeAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
