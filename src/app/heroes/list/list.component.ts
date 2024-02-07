import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America']
  public deletedHero?: string

  removeLastHero(): void {
    this.deletedHero =  this.heroes.pop()
  }
}
