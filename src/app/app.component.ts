import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface reflejo {
  i: string;
  b: string;
}
export interface val {
  c1: string;
  c2: string;
  out:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enigma';
  input: string[]=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  con:string[]=this.input;
  con2:string[]= this.con;
  con3: string[]=this.con;
  Vuelta1=0;
  Vuelta2=0;
  Vuelta3=0;

  reflector: reflejo[]=[
    {i:"A",b:"Y"},
    {i:"B",b:"R"},
    {i:"C",b:"U"},
    {i:"D",b:"H"},
    {i:"E",b:"Q"},
    {i:"F",b:"S"},
    {i:"G",b:"L"},
    {i:"H",b:"D"},
    {i:"I",b:"P"},
    {i:"J",b:"X"},
    {i:"K",b:"N"},
    {i:"L",b:"G"},
    {i:"M",b:"O"},
    {i:"N",b:"K"},
    {i:"O",b:"M"},
    {i:"P",b:"I"},
    {i:"Q",b:"E"},
    {i:"R",b:"B"},
    {i:"S",b:"F"},
    {i:"T",b:"Z"},
    {i:"U",b:"C"},
    {i:"V",b:"W"},
    {i:"W",b:"V"},
    {i:"X",b:"J"},
    {i:"Y",b:"A"},
    {i:"Z",b:"T"}

  ];

//Selects
  r1 = new FormControl('');
  r2 = new FormControl('');
  r3 = new FormControl('');
  //inputs
  letra= new FormControl('');
  respuesta= new FormControl('');
//Valores de los rotores
  cr1: val[]=[
    {c1:'A',c2:'E',out:'A'},
    {c1:'B',c2:'K',out:'B'},
    {c1:'C',c2:'M',out:'C'},
    {c1:'D',c2:'F',out:'D'},
    {c1:'E',c2:'L',out:'E'},
    {c1:'F',c2:'G',out:'F'},
    {c1:'G',c2:'D',out:'G'},
    {c1:'H',c2:'Q',out:'H'},
    {c1:'I',c2:'V',out:'I'},
    {c1:'J',c2:'Z',out:'J'},
    {c1:'K',c2:'N',out:'K'},
    {c1:'L',c2:'T',out:'L'},
    {c1:'M',c2:'O',out:'M'},
    {c1:'N',c2:'W',out:'N'},
    {c1:'O',c2:'Y',out:'O'},
    {c1:'P',c2:'H',out:'P'},
    {c1:'Q',c2:'X',out:'Q'},
    {c1:'R',c2:'U',out:'R'},
    {c1:'S',c2:'S',out:'S'},
    {c1:'T',c2:'P',out:'T'},
    {c1:'U',c2:'A',out:'U'},
    {c1:'V',c2:'I',out:'V'},
    {c1:'W',c2:'B',out:'W'},
    {c1:'X',c2:'R',out:'X'},
    {c1:'Y',c2:'C',out:'Y'},
    {c1:'Z',c2:'J',out:'Z'}
    ];
  cr2: val[]=[
      {c1:'A',c2:'A',out:'A'},
      {c1:'B',c2:'J',out:'B'},
      {c1:'C',c2:'D',out:'C'},
      {c1:'D',c2:'K',out:'D'},
      {c1:'E',c2:'S',out:'E'},
      {c1:'F',c2:'I',out:'F'},
      {c1:'G',c2:'R',out:'G'},
      {c1:'H',c2:'U',out:'H'},
      {c1:'I',c2:'X',out:'I'},
      {c1:'J',c2:'B',out:'J'},
      {c1:'K',c2:'L',out:'K'},
      {c1:'L',c2:'H',out:'L'},
      {c1:'M',c2:'W',out:'M'},
      {c1:'N',c2:'T',out:'N'},
      {c1:'O',c2:'M',out:'O'},
      {c1:'P',c2:'C',out:'P'},
      {c1:'Q',c2:'Q',out:'Q'},
      {c1:'R',c2:'G',out:'R'},
      {c1:'S',c2:'Z',out:'S'},
      {c1:'T',c2:'N',out:'T'},
      {c1:'U',c2:'P',out:'U'},
      {c1:'V',c2:'Y',out:'V'},
      {c1:'W',c2:'F',out:'W'},
      {c1:'X',c2:'V',out:'X'},
      {c1:'Y',c2:'O',out:'Y'},
      {c1:'Z',c2:'E',out:'Z'}
      ];
  cr3: val[]=[
        {c1:'A',c2:'B',out:'A'},
        {c1:'B',c2:'D',out:'B'},
        {c1:'C',c2:'F',out:'C'},
        {c1:'D',c2:'H',out:'D'},
        {c1:'E',c2:'J',out:'E'},
        {c1:'F',c2:'L',out:'F'},
        {c1:'G',c2:'C',out:'G'},
        {c1:'H',c2:'P',out:'H'},
        {c1:'I',c2:'R',out:'I'},
        {c1:'J',c2:'T',out:'J'},
        {c1:'K',c2:'X',out:'K'},
        {c1:'L',c2:'V',out:'L'},
        {c1:'M',c2:'Z',out:'M'},
        {c1:'N',c2:'N',out:'N'},
        {c1:'O',c2:'Y',out:'O'},
        {c1:'P',c2:'E',out:'P'},
        {c1:'Q',c2:'I',out:'Q'},
        {c1:'R',c2:'W',out:'R'},
        {c1:'S',c2:'G',out:'S'},
        {c1:'T',c2:'A',out:'T'},
        {c1:'U',c2:'K',out:'U'},
        {c1:'V',c2:'M',out:'V'},
        {c1:'W',c2:'U',out:'W'},
        {c1:'X',c2:'S',out:'X'},
        {c1:'Y',c2:'Q',out:'Y'},
        {c1:'Z',c2:'O',out:'Z'},

        ];
onChange(seleccionado,rotor){

  if(rotor=='r3'){
    this.cr3=this.girosPorSeleccion(this.con3.indexOf(seleccionado),this.cr3,rotor);
    //Vuelta es el contador o controlador de las vueltas del rotor
    this.Vuelta3=seleccionado;
    //Actualizar valor del select o comboBox
    let aux: string[]= new Array();
    for(let i in this.input){
      aux.push(this.cr3[i].out);
    }
  }
  else if(rotor=='r2'){
    this.cr2=this.girosPorSeleccion(this.con2.indexOf(seleccionado),this.cr2,rotor);
    this.Vuelta2=seleccionado;
    //Actualizar valor del select o comboBox
    let aux: string[]= new Array();
    for(let i in this.input){
      aux.push(this.cr2[i].out);
    }
  }
  else{
    this.cr1=this.girosPorSeleccion(this.con.indexOf(seleccionado),this.cr1,rotor);
    this.Vuelta1=seleccionado;
    //Actualizar valor del select o comboBox
    let aux: string[]= new Array();
    for(let i in this.input){
      aux.push(this.cr1[i].out);
    }

  }


}
girosPorSeleccion(seleccionado,arrayRotor,r):val[]{
  let r_aux: val[]=new Array();
  let j=seleccionado;
  for(let i=0;i<=(25-seleccionado);i++){
    r_aux.push(arrayRotor[j++]);
  }
  for(let i=0;i<=seleccionado-1;i++)
    r_aux.push(arrayRotor[i]);
    arrayRotor=r_aux;
    console.log(r_aux);
    this.actualizandoArray(r,arrayRotor);
    return arrayRotor;
}
giraRotor(rotor,r):val[]{
  let aux1:val;
  aux1=rotor[0];
  for(let i=0;i<25;i++){
    rotor[i]=rotor[i+1];
  }
  rotor[25]=aux1;
  this.actualizandoArray(r,rotor);
  return rotor;
}
actualizandoArray(r,rotor){
  let aux: string[]= new Array();
  //Actualizando array de rotores
  for(let i in this.input){
    aux.push(rotor[i].out);
  }
  if(r=="r3")
  this.con3=aux;
  else if (r=="r2")
  this.con2=aux;
  else
  this.con=aux;
}
recorriendo(valor){
  let x1;
  let x2;
  let x3;
  let valorReflejo;
  //En x2 se guarda posicion y en x1 se guarda valor
                    //IDA
     x1=valor;
     for(let i in this.input){
        //inicio de busqueda por valor
        if(x1== this.cr3[i].out){
          //se asigna la posicion
          x2=i;  }
        }
        //Segundo Rotor
        x1=this.cr2[x2].c2;
      for(let i in this.input){
          //inicio de busqueda por valor
          if(x1== this.cr2[i].out){
            //se asigna la posicion
            x2=i;}
          }
          x1=this.cr1[x2].c2;
      for(let i in this.input){
            //inicio de busqueda por valor
            if(x1== this.cr1[i].out){
              //se asigna la posicion
              x2=i;  }
            }
          //valor de input del reflector
          x3=this.reflector[x2].i;
      for(let i in this.input){
          if(x3==this.reflector[i].b){
            //se asigna posicion
            valorReflejo=i;}
            }
                //Vuelta
        x1=this.cr1[valorReflejo].out
        for(let i in this.cr1){
          if(x1==this.cr1[i].c2){
            //Se asigna posicion
            x2=i;}
        }
        x1=this.cr2[x2].out;
        for(let i in this.cr2){
          if(x1==this.cr2[i].c2){
            //Se asigna posicion
            x2=i;}
        }
        x1=this.cr3[x2].out;
        for(let i in this.cr3){
          if(x1==this.cr3[i].c2){
            //Se asigna posicion
            x2=i;}
        }
        this.respuesta.setValue(this.respuesta.value+this.input[x2]);
}
onKey(e){
  if(e.key!= "Backspace"){
    if(this.Vuelta3 < 25 ){
      this.cr3=this.giraRotor(this.cr3,"r3");
      //Se va a llamr a la funcion de recorrido enviandole el valor del rotor de la letra que se tecleo
      this.recorriendo(this.cr3[this.input.indexOf(e.key.toUpperCase())].c2);
      this.Vuelta3++;
    }
    else if(this.Vuelta2 < 25){
      this.cr2=this.giraRotor(this.cr2,"r2");
      this.recorriendo(this.cr2[this.input.indexOf(e.key.toUpperCase())].c2);
      this.Vuelta2++;
      this.Vuelta3=0;
    }
    else if(this.Vuelta1 < 25 ){
      this.cr1=this.giraRotor(this.cr1,"r1");
      this.cr2=this.giraRotor(this.cr2,"r2");
      this.cr3=this.giraRotor(this.cr3,"r3");
      this.recorriendo(this.cr1[this.input.indexOf(e.key.toUpperCase())].c2);
      this.Vuelta1++;
      this.Vuelta2=0;
      this.Vuelta3=0;
    }
  }

}
}
