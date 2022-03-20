import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "items",
  component: ItemsComponent
},
{
  path: "",
  redirectTo: "/",
  pathMatch: "full"
},
  // full = exact { path: "**",component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
