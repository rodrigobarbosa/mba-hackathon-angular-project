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

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(UsuarioForm)}}
  showFormControls(form: any) {
    return form && form.controls['username'] &&
    form.controls['username'].value; // Dr. IQ
  }

  /////////////////////////////

}
