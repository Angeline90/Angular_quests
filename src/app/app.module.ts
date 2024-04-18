import { AdminButtonComponent } from './components/admin-button/admin-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockComponent } from './components/block/block.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeveloperComponent } from './components/developer/developer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from './menu.module';
import { NgModule } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { CreateOnomatopiaComponent } from './components/create-onomatopia/create-onomatopia.component';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { ListKittenComponent } from './components/list-kitten/list-kitten.component';
import { UserKittenComponent } from './components/user-kitten/user-kitten.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { UserComponent } from './components/user/user.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminButtonComponent,
    AppComponent,
    BlockComponent,
    CocktailListComponent,
    CreateKittenComponent,
    CreateOnomatopiaComponent,
    DeveloperComponent,
    ListKittenComponent,
    SkillComponent,
    UserComponent,
    UserKittenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MenuModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
