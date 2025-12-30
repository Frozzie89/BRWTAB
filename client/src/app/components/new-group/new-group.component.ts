import { Component, EventEmitter, Output } from '@angular/core';
import { ListGroupItem } from '../../interfaces/list-group-item';

@Component({
  selector: 'app-new-group',
  imports: [],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.scss',
})
export class NewGroupComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<ListGroupItem>();
}
