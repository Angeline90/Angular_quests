import { AdminButtonComponent } from './components/admin-button/admin-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockComponent } from './components/block/block.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeveloperComponent } from './components/developer/developer.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu.module';
import { NgModule } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AdminButtonComponent,
    AppComponent,
    BlockComponent,
    DeveloperComponent,
    SkillComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
