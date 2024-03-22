import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Color, Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'order-pages',
  templateUrl: './order-pages.component.html',
  styleUrl: './order-pages.component.css'
})
export class OrderPagesComponent implements OnInit {
  items: MenuItem[] | undefined;

  public isUppercase:boolean = false;
  public sortby:keyof Hero | undefined | ''= '';

  public heroes:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    }
  ]

  toggleUppercase():void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero) {
    this.sortby = value;
  }

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
