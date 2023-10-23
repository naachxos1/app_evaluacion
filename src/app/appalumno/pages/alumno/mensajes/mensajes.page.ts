import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mensajesserviceService } from 'src/app/appalumno/services/mensajesservice.service';
import { seccion } from './mensajes.model';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class mensajesPage implements OnInit {

  listaseccion: seccion[] = [];

  constructor(
    private router:Router,
    private mensajesserviceService: mensajesserviceService) { }

  ngOnInit() {
    this.listaseccion = this.mensajesserviceService.getAll();
    //console.log(this.listamensajes);
  }

  ionViewWillEnter() {
    //this.listaseccion = this.mensajesserviceService.getAll();
  }

  listar() {
    this.listaseccion = this.mensajesserviceService.getAll();
  }

  addmensajes() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarmensajes(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() != '') {
      this.listaseccion = this.listaseccion.filter((aux: any) => {
        // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    } else {
      this.listar();
    }
  }
}
