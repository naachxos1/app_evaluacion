import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/appprofesor/services/usuarios.service';
import { Usuario } from '../appprofesor/pages/profesor/models/usuario.model';
import { dataprofesorService } from '../appprofesor/services/util/dataprofesor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  listaUsuarios: Usuario[] = [];
  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
    private toastController: ToastController,
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private dataprofesor: dataprofesorService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
    this.menu.enable(true);
    this.dataprofesor.getRandomUser().subscribe((data) => {
     console.log(data)
      this.user = data[0];
      this.emailValue = this.user.email;
      this.passValue = this.user.password;
      console.log(this.user.email + " " + this.user.password)
    })
  }

  login(user: any, pass: any) {
    this.usuarioService.getUser(user.value, pass.value);
    this.mensajeToast("Bienvenido al Sistema!");
    this.router.navigate(['/home']); //cambiar para entrar a cualquier app (profesor o alumno)
}

  

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

}
