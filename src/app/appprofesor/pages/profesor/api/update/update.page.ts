import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { intersecciones } from 'src/app/appprofesor/interfaces/interSecciones';
import { UserapiService } from 'src/app/appprofesor/services/util/userapi.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  secciones: intersecciones = {
    id: 0,
    nombre: 'Ningun Nombre',
    comentario: 'Sin Contenido'
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
        comentario: data[0]
      }
    })
  }

  updatesecciones() {
    this.api.updatesecciones(this.secciones).subscribe()
    this.router.navigate(['/apilist'])
  }

}
