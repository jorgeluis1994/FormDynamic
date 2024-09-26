import { Structure } from './../../interface/form.interface';
import { Component } from '@angular/core';
import { FormInterface } from '../../interface/form.interface';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-dynamic',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './forms-dynamic.component.html',
  styleUrl: './forms-dynamic.component.css'
})
export class FormsDynamicComponent {

  formulario: FormInterface={
    type:'formularioDynamic',
    structure: {
      name: '',
      style: '',
      class: '',
      action: '',
      method: '',
      fields: [
        {
          name: 'Datos Personales',
          type: 'section',
          fieldSection: [
            {
              id: 1,
              name: 'Nombre',
              type: 'text',
              class: '',
              label: 'Nombre',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu nombre'
            },
            {
              id: 2,
              name: 'Edad',
              type: 'text',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
            {
              id: 3,
              name: 'Edad',
              type: 'email',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu correo'
            },
            {
              id: 4,
              name: 'Edad',
              type: 'tel',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu telefono '
            },





          ]
        }

      ]
    }
  }

  onSubmit(){
    console.log('Guardado de formulario');
  }


}
