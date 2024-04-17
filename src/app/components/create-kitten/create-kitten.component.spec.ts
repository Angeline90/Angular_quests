import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKittenComponent } from './create-kitten.component';
import { FormsModule } from '@angular/forms';

describe('CreateKittenComponent', () => {
  let component: CreateKittenComponent;
  let fixture: ComponentFixture<CreateKittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateKittenComponent],
      imports: [FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
