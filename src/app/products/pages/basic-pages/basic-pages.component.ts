import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styles: ``
})
export class BasicPagesComponent {
    public nameLower:string = 'sergi';
    public nameUpper:string = 'SERGI';
    public fullName:string = 'sErGi PiCAZO cAmI';
    public customDate: Date = new Date();

}
