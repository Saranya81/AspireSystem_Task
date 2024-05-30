import { Component } from '@angular/core';
import { DirectivesComponent } from './directives/directives.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ProductComponent } from './product/product.component';
import { FormsComponent } from './forms/forms.component';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DirectivesComponent,BankAccountComponent,ProductComponent,FormsComponent,SinglePageAppComponent]

})
export class AppComponent {
  title = 'my-app';
  name = 'Angular';
  day = new Date();
  numberValue: number = 3;
  joinDate: Date = new Date();

  // constructor(public product : ProductService){ }

  // increaseCount(){
  //   this.product.count++;
  // }
}
