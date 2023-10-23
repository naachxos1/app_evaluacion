import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/appprofesor/services/util/mensajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mensajesUtil: MensajesService) { }

  ngOnInit() {
    //this.mensajesUtil.mensajeToast('success','Buen dia para Trabajar Bienenido',1300,'bottom')
  }

}
