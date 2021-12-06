import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mastografia',
  templateUrl: './mastografia.component.html',
  styleUrls: ['./mastografia.component.css']
})
export class MastografiaComponent implements OnInit {

 //@ViewChild('formulario')formulario!;
 form!:FormGroup;
 constructor(
   private formBuilder:FormBuilder
 ) { 
   this.formulario();
 }

 persona={
   genero:'F'
 }
 formulario(){
  this.form=this.formBuilder.group({
    prueba: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    hora:['',[Validators.required]],
    nombre: ['',[Validators.required]],
    apellidopaterno: ['',[Validators.required]],
    apellidomaterno: ['',[Validators.required]],
    nacimiento:['',[Validators.required]],
    cp:['',[Validators.required]],
    colonia:['',[Validators.required]],
    calle:['',[Validators.required]],
    numdir:['',[Validators.required]],
    correo: ['',[Validators.required]],
    tel:['',[Validators.required]],
    genero:['',[Validators.required]],
  });
  }
  ngOnInit(): void {
  }
  Guardar(){
    console.log(this.form.value);
    this.form.reset();
    Swal.fire(
      '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
    )
    }
}
