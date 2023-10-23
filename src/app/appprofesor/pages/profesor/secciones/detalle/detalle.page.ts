import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { seccionsserviceService } from 'src/app/appprofesor/services/seccionesservice.service';
import { seccion } from '../secciones-p.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  seccion!: seccion;

  constructor(private router:Router,private toastController: ToastController,private alertController:AlertController,private activatedRoute: ActivatedRoute,private seccionesservices: seccionsserviceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.seccion = this.seccionesservices.getSeccion(aux);
        console.log(this.seccion)
      }
    })
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteSeccion() {
    const alert = await this.alertController.create({
      header: 'Eliminar Seccion',
      message: 'Estás seguro de que desea eliminar la seccion?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if ( this.seccion && this.seccion.id !== undefined) {
              this.seccionesservices.deleteSeccion(this.seccion.id)
              this.mensajeToast('Seccion Eliminado!');
              this.router.navigate(['/Seccion'])
            } else {
              this.mensajeToast('ERROR: Seccion no encontrada');
            }
          }
        },
        {
          text: 'No',
          handler: () => {
            this.mensajeToast('Acción cancelada!');
          }
        }
      ]
    });
    await alert.present();
    let resultado = await alert.onDidDismiss();
  }

}
