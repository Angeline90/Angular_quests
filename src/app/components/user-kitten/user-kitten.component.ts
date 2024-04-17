import { Component, Input } from '@angular/core';
import { Kitten } from '../../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.scss'
})
export class UserKittenComponent {
  @Input() userKittens: Kitten[] = [];
}
