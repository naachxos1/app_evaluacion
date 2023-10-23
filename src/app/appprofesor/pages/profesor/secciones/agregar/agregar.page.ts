import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { seccionsserviceService } from 'src/app/appprofesor/services/seccionesservice.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(
    private seccionServices:seccionsserviceService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  addSeccion(nombre: any, imagen: any) {
    this.seccionServices.addSeccion(nombre.value, imagen.value);
    this.mensajeToast("Seccion Agregado!");
    this.router.navigate(['/Seccion']);
  }

}
