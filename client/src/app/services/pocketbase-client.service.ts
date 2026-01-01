import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root',
})
export class PocketbaseClientService {
  pb = new PocketBase(environment.pocketbaseUrl);
}
