import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/appalumno/services/util/userapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  seccion = {
    id: 0,
    nombre: 'Nombre Correo',
    comentario: 'Mensaje'
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

  deleteseccion() {
    this.api.deleteseccion(this.seccion).subscribe()
    this.router.navigate(['apilist'])
  }

}
