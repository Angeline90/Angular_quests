import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopiaComponent } from './create-onomatopia.component';
import { FormsModule } from '@angular/forms';

describe('CreateOnomatopiaComponent', () => {
  let component: CreateOnomatopiaComponent;
  let fixture: ComponentFixture<CreateOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOnomatopiaComponent],
      imports: [FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
