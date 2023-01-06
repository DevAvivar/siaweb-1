import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaodeEndomarketingComponent } from './solicitacaode-endomarketing.component';

describe('SolicitacaodeEndomarketingComponent', () => {
  let component: SolicitacaodeEndomarketingComponent;
  let fixture: ComponentFixture<SolicitacaodeEndomarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaodeEndomarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaodeEndomarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
