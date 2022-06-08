import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Socio } from 'src/app/model/socio.model';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

public contactlist: Socio [];
public contacto: any;

public index: number;
public indexEdit: number;
public activeEdit: boolean;

 constructor() {
   this.contactlist = [];
   this.contactlist.push(new Socio('Pau','Gasol',1,'12487935T','613087002','Masculino'));
   this.contactlist.push(new Socio('Rafael','Nadal',2,'36478521J','632478941','Masculino'));
   this.contactlist.push(new Socio('Mireia','Belmonte',3,'45123578M','615478832','Femenino'));

   this.index = 0; 
   this.indexEdit = -1;
   this.activeEdit = false;
 }


 ngOnInit() {} //Validación de errores
   nombreFC = new FormControl('', [Validators.required, Validators.minLength(3)]);
   apellidosFC= new FormControl('',[Validators.required, Validators.minLength(3)]);
   socioFC= new FormControl('', [Validators.required, Validators.min(0)]);
   dniFC= new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9), Validators.pattern('[0-9]{8}[a-zA-Z]{1}')]);
   telefonoFC= new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]);
   sexoFC= new FormControl('', [Validators.required ]);
 
  getErrorMessageNombre() {
    return this.nombreFC.hasError('required') ? 'Debes introducir un valor' : this.nombreFC.hasError('minlength') ? 'No es un nombre válido' : '';
  }

  getErrorMessageApellidos() {
    return this.apellidosFC.hasError('required') ? 'Debes introducir un valor' : this.apellidosFC.hasError('minlength') ? 'No es un apellido válido' : '';
  }

  getErrorMessageSocio() {
    return this.socioFC.hasError('required') ? 'Debes introducir un valor' : this.socioFC.hasError('min') ? 'inferior al valor mínimo' : '';
  }

  getErrorMessageDni() {
    return this.dniFC.hasError('required') ? 'Debes introducir un valor' : this.dniFC.hasError('maxlength') ? 'Ha excedido el número de dígitos' : this.dniFC.hasError('minlength') ? 'Debe introducir 9 dígitos' : this.dniFC.hasError('pattern') ? 'No es un formato de DNI válido' : '';
  }

  getErrorMessageTelefono() {
    return this.telefonoFC.hasError('required') ? 'Debes introducir un valor' : this.telefonoFC.hasError('pattern') ? 'No es un formato de teléfono válido' :  '';
  }


  getErrorMessageSexo() {
    return this.sexoFC.hasError('required') ? 'Debes introducir un valor' : '';
  }

checkIdsList(id: number) { //Buscamos que el número de socio no esté en la lista
  var found= false;
    for(var i=0; i<this.contactlist.length; i++) {
      if(this.contactlist[i].socio == id){
        found=true;
        break;
      }
    }
    return found;
}

addContacto(){
  if(this.activeEdit){ //Para editar
    var idAux= this.contactlist[this.indexEdit].socio;
    if(idAux != this.socioFC.value){
      alert('No se puede modificar el número de socio porque ya existe');
    }
    this.contactlist[this.indexEdit] = (new Socio(this.nombreFC.value, this.apellidosFC.value, idAux, this.dniFC.value, this.telefonoFC.value, this.sexoFC.value));
  } else{
    var found= this.checkIdsList(this.socioFC.value);
    if(found){
      alert('Este número de socio ya existe');
    }
    else{ //Para añadir
      this.contactlist.push(new Socio(this.nombreFC.value, this.apellidosFC.value, this.socioFC.value, this.dniFC.value, this.telefonoFC.value, this.sexoFC.value));
    }
  }
  
  this.resetformcontrol();
}

resetformcontrol(){
//reseteamos los form control
this.nombreFC.reset();
this.apellidosFC.reset();
this.socioFC.reset();
this.dniFC.reset();
this.telefonoFC.reset();
this.sexoFC.reset();

//reseateamos el editor
this.activeEdit = false;
this.indexEdit = -1;
}

removeContacto(index:number){
  if(index> -1) {
    this.contactlist.splice(index,1);
  }
}

editContacto(index:number){
  if(index> -1){
    this.contacto= this.contactlist[index];
    this.nombreFC.setValue(this.contacto.nombre);
    this.apellidosFC.setValue(this.contacto.apellidos);
    this.socioFC.setValue(this.contacto.socio);
    this.dniFC.setValue(this.contacto.dni);
    this.telefonoFC.setValue(this.contacto.telefono);
    this.sexoFC.setValue(this.contacto.sexo);

    this.activeEdit = true;
    this.indexEdit = index;
  }
}
}
