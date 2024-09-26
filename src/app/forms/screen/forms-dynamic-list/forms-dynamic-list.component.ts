import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInterface } from '../../interface/form.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-forms-dynamic-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forms-dynamic-list.component.html',
  styleUrl: './forms-dynamic-list.component.css'
})
export class FormsDynamicListComponent implements OnInit {

 reactiveForms: FormInterface={
   type: "myForm",
   structure: {
     name: '',
     style: '',
     class: '',
     action: '',
     method: '',
     fields: []
   }
 }

 myForm!: FormGroup;

 constructor(){

  this.myForm=new FormGroup({
    name:new FormControl(),
    style:new FormControl(),
    class:new FormControl(),
    action:new FormControl(),
    method:new FormControl(),
    setcion:new FormArray([
      new FormGroup({
        id:new FormControl(),
        max:new FormControl()
      }),
      new FormGroup({
        id:new FormControl(),
        max:new FormControl()
      })
    ])

  })

 }
  ngOnInit(): void {
    console.log('Data de formulario' ,this.myForm.controls);

  }

  get setcionArray () : FormArray{
    return this.myForm.get('setcion') as FormArray;
  }




}
