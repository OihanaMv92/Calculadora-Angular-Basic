import { Component } from '@angular/core';
// import { setupMaster } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  // numero1:string='0';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  // METODO
  sumar():void{
  //PARSEAR PARA QUE PASE A ENTERO.
    // this.resultado= parseInt(this.numero1)+parseInt(this.numero2);
this.resultado= this.numero1+this.numero2;
  }

  restar():void{
    this.resultado= this.numero1-this.numero2;
      }
    

    multiplicar():void{
      this.resultado= this.numero1*this.numero2;
        }


        dividir():void{
          this.resultado= this.numero1/this.numero2;
            }
      

}



