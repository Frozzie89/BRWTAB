import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-group-entries',
  imports: [FormsModule],
  templateUrl: './list-group-entries.component.html',
  styleUrl: './list-group-entries.component.scss',
})
export class ListGroupEntriesComponent {
  newTextEntry = '';

  // placeholder list of entries
  entries = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae dignissim lobortis. Integer id efficitur tortor. Aenean vulputate neque ut dolor volutpat, nec commodo arcu fringilla. In hac habitasse platea dictumst. Maecenas cursus ullamcorper fermentum. Etiam pellentesque mattis lacus sit amet accumsan. Aliquam vulputate eu justo ut feugiat. Duis pulvinar placerat molestie. Phasellus commodo dictum sapien eu scelerisque. Ut mollis diam elit, quis congue felis scelerisque id. Aliquam urna diam, porttitor et turpis et, pellentesque porttitor leo. ',
      totalVotes: 5,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae dignissim lobortis.',
      totalVotes: 3,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula eros vitae dignissim lobortis. Integer id efficitur tortor. Aenean vulputate neque ut dolor volutpat, nec commodo arcu fringilla. In hac habitasse platea dictumst. Maecenas cursus ullamcorper fermentum. Etiam pellentesque mattis lacus sit amet accumsan.',
      totalVotes: -2,
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      totalVotes: 0,
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sem a ullamcorper vehicula. Nulla at felis suscipit, malesuada tellus. ',
      totalVotes: 12,
    },
  ];

  addEntry() {
    this.entries.push({
      id: this.entries.length + 1,
      text: this.newTextEntry,
      totalVotes: 0,
    });

    this.newTextEntry = '';
  }
}
