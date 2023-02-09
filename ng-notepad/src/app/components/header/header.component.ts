import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Notiz',
        items: [{
          label: 'add',
          icon: 'pi pi-fw pi-plus'
        }]
      },
      {
        label: 'FAQ',
        items: [{
          label: 'add',
          icon: 'pi pi-fw pi-plus'
        }]
      },
    ];
  }
}
