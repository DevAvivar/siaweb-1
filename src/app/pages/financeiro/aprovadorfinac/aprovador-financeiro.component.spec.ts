import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadorFinanceiroComponent } from './aprovador-financeiro.component';

describe('AprovadorFinanceiroComponent', () => {
  let component: AprovadorFinanceiroComponent;
  let fixture: ComponentFixture<AprovadorFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadorFinanceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovadorFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
