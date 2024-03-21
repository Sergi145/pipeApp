import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-fw pi-trash',
            routerLink: 'numbers'
          },
          {
            separator: true
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'common'          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-fw pi-align-left',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }
}
