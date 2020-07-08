import { Component } from '@angular/core';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioFormComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];
  // model = new Usuario(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
  // newUsuario() {
  //   this.model = new Usuario(42, '', '');
  // }
  // skyDog(): Usuario {
  //   let myUsuario =  new Usuario();
  //   console.log('My Usuario is called ' + myUsuario.username); // "My Usuario is called SkyDog"
  //   return myUsuario;
  // }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(UsuarioForm)}}
  showFormControls(form: any) {
    return form && form.controls['username'] &&
    form.controls['username'].value; // Dr. IQ
  }

  /////////////////////////////

}
