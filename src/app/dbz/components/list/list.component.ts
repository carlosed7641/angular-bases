import{ Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteCharacterEmmiter: EventEmitter<string> = new EventEmitter()

  @Input()
  characterList: Character[] = []


  onDeleteCharacter(id?: string) {

    if (!id) return

    this.onDeleteCharacterEmmiter.emit(id)
  }

}
