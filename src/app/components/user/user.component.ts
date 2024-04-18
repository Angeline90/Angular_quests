import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  username = new FormControl('');

  onSubmit(): void {}

  changeUsername() {
    this.username.setValue('kitten69');
  }
}
