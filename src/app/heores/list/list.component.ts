import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spider-Man',
    'Ironman',
    'Hulk',
    'Hawkeye',
    'Thor',
  ];
}
