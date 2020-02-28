import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any { value: any el tipo de variable que recibe, ...args argumentos que recine
  // ):any lo que entrega
  // por defecto el pipe entrega el metodo de transform
  //   return null;
  // }
  transform(value: number): any {
    return Math.pow(value, 2);
  }

}
