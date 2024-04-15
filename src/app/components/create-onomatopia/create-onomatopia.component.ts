import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss',
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia: string = '';
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {}

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
