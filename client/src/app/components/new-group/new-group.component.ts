import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CreateGroupPayload } from '../../interfaces/group';
import { FormsModule } from '@angular/forms';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-new-group',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.scss',
})
export class NewGroupComponent {
  @Output() dismiss = new EventEmitter<void>();
  @Output() create = new EventEmitter<CreateGroupPayload>();

  private readonly groupsService = inject(GroupsService);

  title = '';
  description = '';
  color = '#ffffffff';
  iconUrl: string | null = null;
  iconFile: File | null = null;

  titleExists = (title: string) => this.groupsService.titleAlreadyExists(title);

  createGroup() {
    this.create.emit({
      title: this.title,
      description: this.description,
      color: this.color,
      iconFile: this.iconFile,
    });

    this.cleanup();
  }

  onCancel() {
    this.dismiss.emit();
    this.cleanup();
  }

  cleanup() {
    if (this.iconUrl) {
      URL.revokeObjectURL(this.iconUrl);
    }

    this.title = '';
    this.description = '';
    this.color = '#ffffffff';
    this.iconUrl = null;
    this.iconFile = null;
  }

  onIconSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    // revoke previous preview
    if (this.iconUrl) {
      URL.revokeObjectURL(this.iconUrl);
      this.iconUrl = null;
    }

    if (!file) {
      this.iconUrl = null;
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.iconUrl = null;
      return;
    }

    this.iconFile = file;
    this.iconUrl = URL.createObjectURL(file);
  }
}
