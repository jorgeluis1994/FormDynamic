import { Structure } from './../../interface/form.interface';
import { Component } from '@angular/core';
import { FormInterface } from '../../interface/form.interface';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-dynamic',
  standalone: true,
  imports: [CommonModule,FormsModule],
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            },
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
              type: 'number',
              class: '',
              label: 'Edad',
              style: '',
              value: '',
              requiere: false,
              placeholder: 'Ingresa tu edad'
            }
          ]
        }

      ]
    }
  }

  onSubmit(){
    console.log('Guardado de formulario');
  }


}
