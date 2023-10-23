import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { seccionsserviceService } from 'src/app/appprofesor/services/seccionesservice.service';
import { seccion } from './secciones-p.model';

@Component({
  selector: 'app-secciones-p',
  templateUrl: './secciones-p.page.html',
  styleUrls: ['./secciones-p.page.scss'],
})
export class seccionespage implements OnInit {

  listasecciones: seccion[] = [];

  constructor(
    private router:Router,
    private seccionsserviceService : seccionsserviceService) { }

  ngOnInit() {
    this.listasecciones = this.seccionsserviceService.getAll();
    //console.log(this.listasecciones);
  }

  ionViewWillEnter() {
    //this.listasecciones = this.seccionsserviceService.getAll();
  }

  listar() {
    this.listasecciones = this.seccionsserviceService.getAll();
  }

  addSeccion() {
    this.router.navigate(['/agregar']);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarseccion(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() != '') {
      this.listasecciones = this.listasecciones.filter((aux: any) => {
        // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    } else {
      this.listar();
    }
  }
}
