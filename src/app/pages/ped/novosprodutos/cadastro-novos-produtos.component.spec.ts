import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNovosProdutosComponent } from './cadastro-novos-produtos.component';

describe('CadastroNovosProdutosComponent', () => {
  let component: CadastroNovosProdutosComponent;
  let fixture: ComponentFixture<CadastroNovosProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNovosProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroNovosProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
