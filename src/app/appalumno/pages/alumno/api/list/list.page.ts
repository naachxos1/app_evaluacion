import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/appprofesor/services/util/userapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaCorreo:any = [];

  constructor(private api: UserapiService, private router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.listar()
  }

  listar() {
    this.api.  listsecciones().subscribe((data) => {
      console.log(data)
      let aux = JSON.stringify(data) // TRANSFORMAMOS LA NFO DEL API
      this.listaCorreo = JSON.parse(aux) // TRANSFORMAMOS A ARREGLO
    })

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarCorreo(event: any) {
    const texto = event.target.value;
    if (texto && texto.trim() != '') {
      this.listaCorreo = this.listaCorreo.filter((aux: any) => {
        // BUSCANDO CUALQUIER COINCIDENCIA EN MAYUS O MINUS
        return (aux.nombre.toLowerCase().indexOf(texto.toLowerCase()) >- 1);
      })
    } else {
      this.listar();
    }
  }

  addCorreo() {
    this.router.navigate(['/apiadd']);
  }
}

