import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaodeBannerComponent } from './criacaode-banner.component';

describe('CriacaodeBannerComponent', () => {
  let component: CriacaodeBannerComponent;
  let fixture: ComponentFixture<CriacaodeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaodeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaodeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
