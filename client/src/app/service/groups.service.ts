import { computed, Injectable, signal } from '@angular/core';
import { ListGroupItem } from '../interfaces/list-group-item';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private readonly _groups = signal<ListGroupItem[]>([]);

  readonly groups = this._groups.asReadonly();
  readonly count = computed(() => this._groups().length);

  add(group: ListGroupItem) {
    this._groups.update(groups => [group, ...groups]);
  }

  removeByTitle(title: string) {
    this._groups.update(groups => groups.filter(g => g.title !== title));
  }

  clear() {
    this._groups.set([]);
  }
}
