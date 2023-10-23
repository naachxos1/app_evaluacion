import { Injectable } from '@angular/core';
import { Usuario } from '../pages/profesor/usuarios/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[] = [
  ]

  constructor() { }

  getAll() {
    return [...this.usuarios]
  }

  getUser(user: string, pass: string, tipo: string) {
    return {
      ...this.usuarios.find(aux => {
        return aux.usuario === user && aux.contrasenia === pass
      })
    }
  }

  deleteUser(id: string) {
    this.usuarios = this.usuarios.filter( aux => {
      return aux.id !== id
    })
  }

  addUser(usuario:string, contrasenia:string) {
    this.usuarios.push({
      usuario, contrasenia, id: this.usuarios.length + 1 + ""
    })
  }

}
