import { Component } from '@angular/core';
import { ListGroup } from '../../interfaces/list-group';
import { NewGroupComponent } from '../new-group/new-group.component';

@Component({
  selector: 'app-list-group',
  imports: [NewGroupComponent],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
})
export class ListGroupComponent {
  isAdding = false;

  openAdd() {
    this.isAdding = true;
  }
  closeAdd() {
    this.isAdding = false;
  }

  // placeholder data
  listGroup: ListGroup = {
    items: [
      {
        title: 'Item 1',
        description: 'Description for Item 1',
        icon: 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000),
        color: '#ffe600',
      },
      {
        title: 'Item 2',
        description: 'Description for Item 2',
        icon: 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000),
        color: '#ff006e',
      },
      {
        title: 'Item 3',
        description: 'Description for Item 3',
        icon: 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000),
        color: '#5aed1bff',
      },
    ],
  };
}
