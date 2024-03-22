import {Pipe, PipeTransform} from '@angular/core';

// fernando | toggleCase = 'Fernando'
// FERNANDO | toggleCase = 'fernando'


@Pipe({
  name: 'toggleCase',
})

export class  ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper:boolean = false)   : string {
      return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }
}


