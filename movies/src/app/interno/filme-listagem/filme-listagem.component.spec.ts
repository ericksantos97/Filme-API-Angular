import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeListagemComponent } from './filme-listagem.component';

describe('FilmeListagemComponent', () => {
  let component: FilmeListagemComponent;
  let fixture: ComponentFixture<FilmeListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
