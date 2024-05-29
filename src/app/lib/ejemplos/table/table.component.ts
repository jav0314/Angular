import { Component } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  listaProducto: ProductDetail[] = [
    {
      productoId: 1,
      producto: 'Play Station 5',
      modelo: 'H&B',
      proveedor: 'H&B',
      precio: 500,
    },
    {
      productoId: 2,
      producto: 'Xbox',
      modelo: 'Microsoft',
      proveedor: 'TechSupplier',
      precio: 450,
      cantidad: 30,
    },
  ];

  listaCarrito: ProductDetail[] = [];

  agregarCarrito(producto: ProductDetail) {
    if (this.listaCarrito.length === 0) {
      producto.cantidad = 1;
      this.listaCarrito.push(producto);
    } else {
      let productoAgg = this.listaCarrito.filter(
        (reg) => reg.productoId === producto.productoId
      );
      if (productoAgg.length > 0) {
        this.listaCarrito.forEach((productoCarrito) => {
          if (productoCarrito.productoId === producto.productoId) {
            if (productoCarrito.cantidad != undefined) {
              productoCarrito.cantidad += 1;
            }
          }
        });
      } else {
        producto.cantidad = 1;
        this.listaCarrito.push(producto);
      }
    }
  }

  eliminarRegistro(producto: ProductDetail) {
    const posicionProducto = this.listaCarrito.indexOf(producto);
    this.listaCarrito.splice(posicionProducto, 1);
  }
}
