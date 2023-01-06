import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAdiantamentoComponent } from './pesquisa-adiantamento.component';

describe('PesquisaAdiantamentoComponent', () => {
  let component: PesquisaAdiantamentoComponent;
  let fixture: ComponentFixture<PesquisaAdiantamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaAdiantamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaAdiantamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
