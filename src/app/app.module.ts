import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), ScrollingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
