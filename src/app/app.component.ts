import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private name: string = 'Angeline';
  public title: string = `Bienvenue sur le site de ${this.name} ! `;
}
