import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedAnimal: string = 'todos'; // Variable que almacena el animal seleccionado en el filtro
  products = [ // Lista de productos
    { name: 'Comida para perros', animal: 'perro', id: 1},
    { name: 'Comida para gatos', animal: 'gato', id: 2 },
    { name: 'Comida para pájaros', animal: 'pajaro',id: 3 },
    { name: 'Comida para perros 2', animal: 'perro',id: 4 },
    { name: 'Comida para gatos 2', animal: 'gato',id: 5 },
    { name: 'Comida para pájaros 2', animal: 'pajaro',id: 6 },
  ];
  newProductName: string = ''; // Variable que almacena el nombre del nuevo producto a agregar
  newProductAnimal: string = ''; // Variable que almacena el animal del nuevo producto a agregar
  filteredProducts: any[] = this.products; // Variable que almacena todos los productos filtrados inicialmente

  /**
   * Funcion que filtra los productos segun el animal seleccionado en el filtro
   * Si el animal seleccionado es 'todos', se muestran todos los productos 
   * Sino, se muestran los productos que coincidan con el animal seleccionado
  */
  filterProducts() {
    if (this.selectedAnimal === 'todos') {
      this.filteredProducts = this.products; // Muestra todos los productos
    } else {
      this.filteredProducts = this.products.filter(product => product.animal === this.selectedAnimal); // Filtra los productos por animal
    }
  }

  /**
   * Funcion que agrega un nuevo producto a la lista de productos
   * El nuevo producto se crea con el nombre y el animal especificados en las variables newProductName y newProductAnimal, y se le asigna un ID
  */
  addProduct() {
    const newProduct = { name: this.newProductName, animal: this.newProductAnimal, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.newProductName = '';
    this.newProductAnimal = '';
    this.filterProducts(); // Se vuelve a aplicar el filtro después de agregar un producto para que se vea reflejado el cambio
  }

  /**
   * Funcion que elimina un producto de la lista segun su ID
   * @param id El ID del producto a eliminar
  */
  removeProduct(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
    this.filterProducts(); // Se vuelve a aplicar el filtro después de eliminar un producto para que se vea reflejado el cambio
  }
}

/**Utilizando Pipe
  addProduct() {
    const newProduct = { name: this.newProductName, animal: this.newProductAnimal, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.newProductName = '';
    this.newProductAnimal = '';
  }

  removeProduct(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
  }
}
*/
