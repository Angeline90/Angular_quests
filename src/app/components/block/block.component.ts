import { Component } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  public text: string = "A B C";
}