import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
shoppingMallName:string='Spectrum Shopping Mall';   //String interpolation
createNewShop:string='No shop is created';
shopName:string='';
isShopCreated:boolean= false;
myId="testId";
//property



isButtonActive:boolean= true;
constructor(){
  setTimeout(()=>{
this.isButtonActive= false;
  },2000)
}


onCreateShop():void{
  this.createNewShop='New Shop is created named ' +  ''+this.shopName;
  this.isShopCreated= true;
}

onUpdateShopName(event:Event){
  console.log((<HTMLInputElement>event.target).value);
this.shopName=(<HTMLInputElement>event.target).value

}
}