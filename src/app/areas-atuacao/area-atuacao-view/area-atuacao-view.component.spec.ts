import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAtuacaoViewComponent } from './area-atuacao-view.component';

describe('AreaAtuacaoViewComponent', () => {
  let component: AreaAtuacaoViewComponent;
  let fixture: ComponentFixture<AreaAtuacaoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAtuacaoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAtuacaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
