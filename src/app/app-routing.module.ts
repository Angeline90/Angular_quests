import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './components/list-kitten/list-kitten.component';

const routes: Routes = [
  { path: '', component: ListKittenComponent },
  {
    path: 'menu',
    loadChildren: () => import('./menu.module').then((m) => m.MenuModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
