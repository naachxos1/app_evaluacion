import { ComponentFixture, TestBed } from '@angular/core/testing';
import { seccionsserviceService } from 'src/app/appprofesor/services/seccionesservice.service';
import { AgregarPage } from './agregar.page';

describe('AgregarPage', () => {
  let component: AgregarPage;
  let fixture: ComponentFixture<AgregarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

