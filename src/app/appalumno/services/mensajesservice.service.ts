import { Injectable } from '@angular/core';
import { seccion } from 'src/app/appalumno/pages/alumno/mensajes/mensajes.model';

@Injectable({
  providedIn: 'root'
})
export class mensajesserviceService {

  seccion: seccion[] = [
    {
      id: '1',
      nombre: 'PGY-666',
      tipo: "Programacion Movile",
    },
    {
      id: '2',
      nombre: 'JPG-007',
      tipo: "Data Express",
  //    imagen: 'https://www.metroworldnews.com/resizer/AmyQrYZaL096UI6H2mEt_JVOtDE=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/I3OZ5YS6BFGNFJLHHTRRDBDKEI.jpg'
    },
    {
      id: '3',
      nombre: 'PF-005',
      tipo: "Programacion Jamones PF",
//    imagen: 'https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2023/03/durant-iso021623.jpg?fit=1920%2C1080&ssl=1'
    },
    {
      id: '4',
      nombre: 'PF-008',
      tipo: "Programacion Jamones PF",
     // imagen: 'https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2023/03/durant-iso021623.jpg?fit=1920%2C1080&ssl=1'
    },
    {
      id: '5',
      nombre: 'PF-002',
      tipo: "Programacion Jamones PF",
     // imagen: 'https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2023/03/durant-iso021623.jpg?fit=1920%2C1080&ssl=1'
    },
    {
      id: '6',
      nombre: 'AGT-003',
      tipo: "Arquitectura",
     // imagen: 'https://i2.wp.com/livebasketballbr.com/wp-content/uploads/2023/03/durant-iso021623.jpg?fit=1920%2C1080&ssl=1'
    }
  ]

  constructor() { }

  getAll() {
    return [...this.seccion]
  }

  getmensaje(id: string) {
    return {
      ...this.seccion.find(aux => {
        return aux.id === id
      })
    }
  }

  deletemensaje(id: string) {
    this.seccion = this.seccion.filter( aux => {
      return aux.id !== id
    })
  }

  addmensaje(nombre:string, imagen:string) {
    this.seccion.push({
      nombre, imagen, id: this.seccion.length + 1 + ""
    })
  }

}
