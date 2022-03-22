import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
// import { ContentModule } from './content/content.module';
import { PostsComponent } from './content/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';
import { InsertComponent } from './pages/items/insert/insert.component';
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
  path: "items/add",
  component: InsertComponent
},
{
  path: "posts",
  component: PostsComponent
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
