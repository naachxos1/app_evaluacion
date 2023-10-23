import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMensaje } from 'src/app/appprofesor/interfaces/interseccion';
import { UserapiService } from 'src/app/appprofesor/services/util/userapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  Mensaje: IMensaje = {
    nombre: 'Nombre Correo',
    comentario: 'Mensaje',
    mensaje: 'ggg'
  }

  constructor(
    private api: UserapiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addMensaje() {
    this.api.addseccion(this.Mensaje).subscribe()
    this.router.navigate(['/apilist'])
  }

}
