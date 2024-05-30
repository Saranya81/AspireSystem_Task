import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscribeService } from '../Services/subscribe'; // Make sure the path is correct

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  shoppingMallName: string = 'Spectrum Shopping Mall';   // String interpolation
  createNewShop: string = 'No shop is created';
  shopName: string = '';
  isShopCreated: boolean = false;
  myId = "testId";
  isButtonActive: boolean = true;
  name="subscribe";

  constructor(private subscribeService: SubscribeService) { // Inject SubscribeService
    setTimeout(() => {
      this.isButtonActive = false;
    }, 2000);
  }

  onCreateShop(): void {
    this.createNewShop = 'New Shop is created named ' + this.shopName;
    this.isShopCreated = true;
  }

  onUpdateShopName(event: Event): void {
    console.log((<HTMLInputElement>event.target).value);
    this.shopName = (<HTMLInputElement>event.target).value;
  }

  OnsubscribeService(): void {
    this.subscribeService.OnSubscribeClicked(this.name);
  }
}
