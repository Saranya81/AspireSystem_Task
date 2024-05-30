import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubeDemo',
  standalone: true
})
export class CubeDemoPipe implements PipeTransform {

  transform(value: number): number {
    return value * value * value;
  }

}
