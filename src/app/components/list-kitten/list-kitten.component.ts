import { Component } from '@angular/core';
import { Kitten } from '../../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.scss',
})
export class ListKittenComponent {
  kittensAvailableForAdoption: Kitten[] = [];
  userKittens: Kitten[] = [];
  isCreateFormVisible: boolean = false;

  constructor() {
    this.kittensAvailableForAdoption = [
      {
        name: 'Minou',
        birthdate: new Date('01-01-2020'),
        breed: 'Persan',
        image:
          'https://www.royalfragrance.fr/wp-content/uploads/2021/04/sumo1-1024x683.jpg',
      },
      {
        name: 'Félix',
        birthdate: new Date('2020-02-15'),
        breed: 'Maine Coon',
        image:
          'https://www.nikomacoons-cattery.com/wp-content/uploads/2022/10/Nikomacoons-Tiberius-chaton-maine-coon-male-black-nikomacoons-cattery-00.jpg',
      },
    ];
  }

  onReceiveNewKitten(event: Kitten): void {
    this.kittensAvailableForAdoption.push(event);
  }

  adoptKitten(kitten: Kitten): void {
    const index = this.kittensAvailableForAdoption.indexOf(kitten);
    if (index !== -1) {
      this.kittensAvailableForAdoption.splice(index, 1);
    }
    this.userKittens.push(kitten);
  }

  toggleCreateForm() {
    this.isCreateFormVisible = !this.isCreateFormVisible;
  }
}
