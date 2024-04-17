import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss',
})
export class CreateKittenComponent {
  newKitten: Kitten = { name: '', birthdate: new Date(), breed: '', image: '' };
  @Output() newKittensAvailableForAdoption: EventEmitter<Kitten> =
    new EventEmitter<Kitten>();

  createKitten(): void {
    this.newKittensAvailableForAdoption.emit(this.newKitten);
  }
}
