import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-up', component: SignUpComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'add-kitten', component: CreateKittenComponent },
      { path: 'cocktail', component: CocktailListComponent },
      { path: 'user-form', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
