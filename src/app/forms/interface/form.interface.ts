export interface FormInterface {
  type:string;
  structure:Structure
}

export interface Structure {
  name:string;
  style:string;
  class:string;
  action:string;
  method:string;
  fields:Fields[]
}


export interface Fields {
  name:string;
  type:string;
  fieldSection:FieldsSection[]
}


export interface FieldsSection {
  id: number;
  name:string;
  type:string;
  class:string;
  label:string;
  style:string;
  value:string;
  requiere:boolean;
  options?:Options[];
  placeholder:string;
}

export interface Options{
  label:string;
  value:string;
}
