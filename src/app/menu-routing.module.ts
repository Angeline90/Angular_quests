import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-up', component: SignUpComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'add-kitten', component: CreateKittenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
