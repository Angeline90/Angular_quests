import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKittenComponent } from './list-kitten.component';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';

describe('ListKittenComponent', () => {
  let component: ListKittenComponent;
  let fixture: ComponentFixture<ListKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListKittenComponent, UserKittenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
