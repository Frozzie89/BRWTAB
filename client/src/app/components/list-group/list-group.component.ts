import { Component, inject, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-list-group',
  imports: [],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
})
export class ListGroupComponent implements OnInit {
  private readonly groupsService = inject(GroupsService);
  readonly listGroup = this.groupsService.groups;

  ngOnInit() {
    void this.groupsService.load();
    this.groupsService.enableRealtime();
  }
}
