import { Injectable } from '@angular/core';
import { seccion } from '../pages/profesor/secciones/secciones-p.model';

@Injectable({
  providedIn: 'root'
})
export class seccionesserviceService {

  secciones: seccion[] = [
    {
      id: '1',
      nombre: 'PGY-666',
      tipo: "Programacion Movile",
    },
    {
      id: '2',
      nombre: 'JPG-007',
      tipo: "Data Express",
    },
    {
      id: '3',
      nombre: 'PF-005',
      tipo: "Programacion Jamones PF",
    },
    {
      id: '4',
      nombre: 'PF-008',
      tipo: "Programacion Jamones PF",
    },
    {
      id: '5',
      nombre: 'PF-002',
      tipo: "Programacion Jamones PF",
    },
    {
      id: '6',
      nombre: 'AGT-003',
      tipo: "Arquitectura",
    }
  ]

  constructor() { }

  getAll() {
    return [...this.secciones]
  }

  getsecciones(id: string) {
    return {
      ...this.secciones.find(aux => {
        return aux.id === id
      })
    }
  }

  deletesecciones(id: string) {
    this.secciones = this.secciones.filter( aux => {
      return aux.id !== id
    })
  }

  addsecciones(nombre:string, imagen:string) {
    this.secciones.push({
      nombre, imagen, id: this.secciones.length + 1 + ""
    })
  }

}
