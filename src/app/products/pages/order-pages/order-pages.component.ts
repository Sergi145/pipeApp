import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'order-pages',
  templateUrl: './order-pages.component.html',
  styleUrl: './order-pages.component.css'
})
export class OrderPagesComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }
}
