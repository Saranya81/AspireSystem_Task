import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { RouterLink } from '@angular/router';
import { CubePipe } from './cubeDemo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
      //all components are listed here
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    //modules are listed here
  ],
  providers: [],//services are listed here
  bootstrap: [AppComponent]
})
export class AppModule {

 }
