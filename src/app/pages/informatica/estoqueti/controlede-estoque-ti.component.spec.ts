import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControledeEstoqueTiComponent } from './controlede-estoque-ti.component';

describe('ControledeEstoqueTiComponent', () => {
  let component: ControledeEstoqueTiComponent;
  let fixture: ComponentFixture<ControledeEstoqueTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControledeEstoqueTiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControledeEstoqueTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
