import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements OnInit {
  @Input() public skill: Skill = {
    name: '',
    logo: '',
    site: '',
  };

  ngOnInit(): void {}
}
