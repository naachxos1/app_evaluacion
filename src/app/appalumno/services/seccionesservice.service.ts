import { Injectable } from '@angular/core';
import { seccion } from '../pages/alumno/mensajes/mensajes.model';

@Injectable({
  providedIn: 'root'
})
export class seccionsserviceService {

  secciones: seccion[] = [
    {
      id: '1',
      nombre: 'PGY-666',
      tipo: "Programacion Movile",
      imagen: ''
    },
    {
      id: '2',
      nombre: 'JPG-007',
      tipo: "Data Express",
      imagen: ''
    },
    {
      id: '3',
      nombre: 'PF-005',
      tipo: "Programacion Jamones PF",
      imagen: ''
    },
    {
      id: '4',
      nombre: 'PF-008',
      tipo: "Programacion Jamones PF",
      imagen: ''
    },
    {
      id: '5',
      nombre: 'PF-002',
      tipo: "Programacion Jamones PF",
      imagen: ''
    },
    {
      id: '6',
      nombre: 'AGT-003',
      tipo: "Arquitectura",
      imagen: ''
    }
  ]

  constructor() { }

  getAll() {
    return [...this.secciones]
  }

  getmensajes(id: string) {
    return {
      ...this.secciones.find(aux => {
        return aux.id === id
      })
    }
  }

  deletemensajes(id: string) {
    this.secciones = this.secciones.filter( aux => {
      return aux.id !== id
    })
  }

  addJmensajes(nombre:string, imagen:string) {
    this.secciones.push({
      nombre, imagen, id: this.secciones.length + 1 + ""
    })
  }

}
