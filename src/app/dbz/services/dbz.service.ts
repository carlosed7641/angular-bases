import { Injectable } from '@angular/core'
import { Character } from '../interfaces/character.interface'
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 7500
    }
  ]

  onNewCharacter(character: Character) {

    const newCharacter = {
      id: uuid(),
      ...character
    }

    this.characters.push(newCharacter)
  }

  onDeleteCharacter(id: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
