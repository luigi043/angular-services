import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { IProductsServiceToken } from '@shared/product-service.interface';
import { CART_OPTIONS_TOKEN, CartService } from '@core/cart.service';
import { EngineersService } from './engineers.services';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'squad-cart' },
      multi: false,
    },
    {
      provide: CartService,
      useFactory: (cartOptions: CartOptions)=> { return new CartService(cartOptions); },
      deps: [ CART_OPTIONS_TOKEN ],
      multi: false,
      
    },
    {
      provide: IProductsServiceToken,
      useClass: EngineersService,
    }
  ],
})
export class SquadModule { }
