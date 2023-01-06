import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReembolsoFinanceiroComponent } from './reembolso-financeiro.component';

describe('ReembolsoFinanceiroComponent', () => {
  let component: ReembolsoFinanceiroComponent;
  let fixture: ComponentFixture<ReembolsoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReembolsoFinanceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReembolsoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
