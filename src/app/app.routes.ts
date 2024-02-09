import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

export const routes: Routes = [

    {path:'',component: HomeComponent},
    {path:'contact',component: ContactComponent},
    {path:'about',component: AboutComponent},
    {path:'products',component: ProductsComponent},
    {path: 'products/:id', component: SinglepageComponent},
    {path:'**',component: NotfoundComponent},
    




];
