import { EventEmitter, Injectable, Output } from '@angular/core';
import IPartialUser from '../interfaces/IPartialUser'

@Injectable({
  providedIn: 'root'
})
export class ListenerService {
  @Output()
  token: EventEmitter<string|null> = new EventEmitter()
  @Output()
  tokenDeleted: EventEmitter<string|null> = new EventEmitter()
  @Output()
  partialUser: EventEmitter<IPartialUser|null> = new EventEmitter()

  constructor() { }
}
