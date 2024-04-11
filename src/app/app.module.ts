import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminButtonComponent } from './components/admin-button/admin-button.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockComponent } from './components/block/block.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu.module';

@NgModule({
  declarations: [AdminButtonComponent, AppComponent, BlockComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
