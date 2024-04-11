import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [MenuComponent, SignUpComponent, UserProfileComponent],
  imports: [CommonModule, MenuRoutingModule, FormsModule],
  exports: [MenuComponent],
})
export class MenuModule {}
