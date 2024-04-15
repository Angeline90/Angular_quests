import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { Developer } from '../../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent implements OnInit {
  developer: Developer = {
    lastName: 'Doe',
    firstName: 'Jane',
    age: 25,
    gender: 'femme',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sint! Non numquam, doloribus assumenda deserunt saepe eos corporis minima temporibus vero blanditiis? Aliquid delectus pariatur ipsa ab laborum repellat nobis',
    skills: [],
  };

  angular: Skill = {
    name: 'Angular',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    site: 'https://angular.io/',
  };
  symfony: Skill = {
    name: 'Symfony',
    logo: 'https://symfony.com/logos/symfony_black_03.png',
    site: 'https://symfony.com/',
  };
  react: Skill = {
    name: 'React',
    logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    site: 'https://fr.react.dev/',
  };

  ngOnInit(): void {
    this.developer.skills = [this.angular, this.symfony, this.react];
  }
}
