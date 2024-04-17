import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails: Cocktail[] = [
    {
      name: 'Caïpirinha',
      price: 10,
      image:
        'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-caipirinha-3.jpg',
    },
    {
      name: 'Spritz',
      price: 12,
      image:
        'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80256_origin-scaled-270x410.jpg',
    },
    {
      name: 'Mojito',
      price: 12,
      image:
        'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/Cocktail-mojito-1.jpg',
    },
  ];

  constructor() {}

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
