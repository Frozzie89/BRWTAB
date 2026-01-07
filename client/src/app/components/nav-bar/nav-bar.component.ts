import { Component, inject } from '@angular/core';
import { PocketbaseAuthService } from '../../services/pocketbase-auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  readonly auth = inject(PocketbaseAuthService);
}
