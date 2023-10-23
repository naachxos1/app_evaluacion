
import { Injectable } from '@angular/core';
import { seccion } from '../pages/profesor/secciones/secciones-p.model';

@Injectable({
  providedIn: 'root'
})
export class seccionsserviceService {

  Secciones: seccion[] = [
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
    return [...this.Secciones]
  }

  getSeccion(id: string) {
    return {
      ...this.Secciones.find(aux => {
        return aux.id === id
      })
    }
  }

  deleteSeccion(id: string) {
    this.Secciones = this.Secciones.filter( aux => {
      return aux.id !== id
    })
  }

  addSeccion(nombre:string, imagen:string) {
    this.Secciones.push({
      nombre, imagen, id: this.Secciones.length + 1 + ""
    })
  }

}
