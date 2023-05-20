import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAnimal'
})
export class FilterByAnimalPipe implements PipeTransform {
  transform(products: any[], animal: string): any[] {
    if (animal === 'todos') {
      return products;
    } else {
      return products.filter(product => product.animal === animal);
    }
  }
}