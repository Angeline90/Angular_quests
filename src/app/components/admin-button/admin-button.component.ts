import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrl: './admin-button.component.scss',
})
export class AdminButtonComponent {
  public title: string = `Bonjour ! `;
  public isAdmin: boolean = false;

  toggleAdminStatus() {
    this.isAdmin = !this.isAdmin;
  }
}
