import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroNovosProdutosComponent } from './tela-cadastro-novos-produtos.component';

describe('TelaCadastroNovosProdutosComponent', () => {
  let component: TelaCadastroNovosProdutosComponent;
  let fixture: ComponentFixture<TelaCadastroNovosProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCadastroNovosProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastroNovosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
