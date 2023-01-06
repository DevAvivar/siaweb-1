import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservadeSalaComponent } from './reservade-sala.component';

describe('ReservadeSalaComponent', () => {
  let component: ReservadeSalaComponent;
  let fixture: ComponentFixture<ReservadeSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservadeSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservadeSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
