import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/appprofesor/services/util/userapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  secciones = {
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
    this.getsecciones(this.getId())
  }

  getId() {
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id
  }

  getsecciones(id: Number) {
    this.api.getsecciones(id).subscribe((data:any) => {
      this.secciones = {
        id: data[0].id,
        nombre: data[0].nombre,
        comentario: data[0].comentario
      }
    })
  }

  deletesecciones() {
    this.api.deletesecciones(this.secciones).subscribe()
    this.router.navigate(['apilist'])
  }

}
