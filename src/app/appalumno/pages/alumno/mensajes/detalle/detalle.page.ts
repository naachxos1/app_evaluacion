import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { seccionsserviceService } from 'src/app/appalumno/services/seccionesservice.service';
import { seccion } from '../mensajes.model';

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
        this.seccion = this.seccionesservices.getmensajes(aux);
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

  async deleteComentario() {
    const alert = await this.alertController.create({
      header: 'Eliminar Seccion',
      message: 'Quieres Eliminar el Comentario?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            if ( this.seccion && this.seccion.id !== undefined) {
              this.seccionesservices.deletemensajes(this.seccion.id)
              this.mensajeToast('comentario Eliminado!');
              this.router.navigate(['/secciones'])
            } else {
              this.mensajeToast('ERROR: No se elimino el comentario');
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
