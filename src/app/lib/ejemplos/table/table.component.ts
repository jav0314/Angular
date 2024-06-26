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
      producto: 'Play Station 4',
      modelo: 'Slim',
      proveedor: 'H&B',
      precio: 500,
      stock: 3,
    },
    {
      productoId: 2,
      producto: 'XBOX',
      modelo: '360',
      proveedor: 'TechSupplier',
      precio: 450,
      stock: 4,
    },
  ];

  listaCarrito: ProductDetail[] = [];

  totalProductos: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalpagar: number = 0;

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
    this.totalProducts();
  }

  eliminarRegistro(producto: ProductDetail) {
    const posicionProducto = this.listaCarrito.indexOf(producto);
    this.listaCarrito.splice(posicionProducto, 1);
    this.totalProducts();
  }

  totalProducts() {
    this.totalProductos = this.listaCarrito.reduce(
      (sum, producto) => sum + (producto.cantidad ?? 0),
      0
    );

    this.subtotal = this.listaCarrito.reduce(
      (sum, producto) => sum + producto.precio * (producto.cantidad ?? 0),
      0
    );

    this.impuesto = this.subtotal * 0.15;
    this.totalpagar = this.impuesto + this.subtotal;
  }

  validaStock(productoStock: ProductDetail) {
    let isValid: boolean = true;
    this.listaProducto.forEach((producto) => {
      if (producto.productoId === productoStock.productoId) {
        let cantidad = productoStock.cantidad ?? 0;
        if (producto.stock > cantidad) {
          isValid = true;
        } else {
          isValid = false;
        }
      }
    });
    return isValid;
  }
}
