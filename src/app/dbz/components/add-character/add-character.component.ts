import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})

export class AddCharacterComponent {

  @Output()
  onNewCharacterEmmiter: EventEmitter<Character> = new EventEmitter()

  character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {

    if (this.character.name.trim().length === 0) return

    this.onNewCharacterEmmiter.emit({...this.character})

    // Reset form
    this.character = {
      name: '',
      power: 0
    }
  }
}
