import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mensajesPage } from './mensajes.page';

describe('mensajesPage', () => {
  let component: mensajesPage;
  let fixture: ComponentFixture<mensajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(mensajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
