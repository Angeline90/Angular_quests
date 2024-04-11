import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  newUser: User = {
    firstName: 'Votre prénom',
    lastName: 'Votre nom',
    email: 'exemple@form.fr',
    password: '',
  };

  onSubmit(): void {
    console.log(this.newUser);
  }
}
