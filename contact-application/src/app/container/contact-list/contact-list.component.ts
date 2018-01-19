
import { Component } from '@angular/core';
@Component({
  selector: 'contact-list',
  template: `
  <h2>{{message}}</h2>
  `
})
export class ContactListComponent {
    message:string='Xin chao ContactListComponent!';
}
//ng g component dump-component