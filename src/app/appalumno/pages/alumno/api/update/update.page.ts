import { seccion } from 'src/app/appalumno/interfaces/interSecciones';
import { UserapiService } from 'src/app/appalumno/services/util/userapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  seccion: seccion  = {
    id: 0,
    nombre: 'Sin Titulo',
    comentario: 'Sin Comentario'
  }

  constructor(
    private api: UserapiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getseccion(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getseccion(id: Number) {
    this.api.getseccion(id).subscribe((data:any) => {
      this.seccion = {
        id: data[0].id,
        nombre: data[0].nombre,
        comentario: data[0].comentario
      }
    })
  }

  updateseccion() {
    this.api.updateseccion(this.seccion).subscribe()
    this.router.navigate(['/apilist'])
  }

}
