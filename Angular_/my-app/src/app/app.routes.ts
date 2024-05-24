import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import {BankAccountComponent} from './bank-account/bank-account.component';
// import { RouterLink } from '@angular/router';

export const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'bank-account',
        component: BankAccountComponent
    },
   
];
