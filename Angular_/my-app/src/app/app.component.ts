import { Component } from '@angular/core';
import { RouterOutlet, RouterLink  } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import {BankAccountComponent} from './bank-account/bank-account.component';
import { CommonModule } from '@angular/common';
import { CubePipe } from './cubeDemo.pipe';
import { GenderPipe } from './gender.pipe';

// import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenderPipe,RouterLink, FormsModule,ShopComponent,StudentComponent,ProductComponent,BankAccountComponent,CommonModule,CubePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  name='Angular';
  day=new Date();
  num: number = 12345.6789;  
  
  joinDate: Date= new Date();
  // constructor(public product : ProductService){

  // }
  // increaseCount(){
  //   this.product.count++;
  // }
}
