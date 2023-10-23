import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/appalumno/services/util/mensajes.service';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mensajesUtil: MensajesService) { }

  ngOnInit() {
    //this.mensajesUtil.mensajeToast('success','Buen dia para Trabajar Bienenido',1300,'bottom')
  }

}
