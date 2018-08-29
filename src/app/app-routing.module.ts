import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeIndexComponent }      from './components/coffee-index/coffee-index.component';
import { BeerIndexComponent }      from './components/beer-index/beer-index.component';
import { DetailsComponent }      from './components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: CoffeeIndexComponent },
  { path: 'beer', component: BeerIndexComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
