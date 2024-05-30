import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
// import { DirectivesComponent } from './directives/directives.component';
import { CubeDemoPipe } from './cube-demo.pipe';
import { GenderPipe } from './gender.pipe';
import { FormsComponent } from './forms/forms.component';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ShopComponent,
    StudentComponent,
    ProductComponent,
    BankAccountComponent,
    SinglePageAppComponent,
    // DirectivesComponent,
    CubeDemoPipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]) // You can define your routes here
  ],
  providers: [], // services are listed here
  bootstrap: [AppComponent]
})
export class AppModule { }
