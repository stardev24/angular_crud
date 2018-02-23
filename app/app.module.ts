import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PcatalougeComponent } from './components/pcatalouge/pcatalouge.component';
import { PcreateComponent } from './components/pcreate/pcreate.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductService } from './services/product.service';
import { PdetailsComponent } from './components/pdetails/pdetails.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';




//Routing logic

const appRoutes: Routes = [
  { path: 'product/new', component: PcreateComponent },
  { path: 'product/update/:id', component: PcreateComponent },
  { path: 'product/list', component: PcatalougeComponent },
  { path: 'product/:id', component: PdetailsComponent },
  { path: 'home',      component: LandingComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcatalougeComponent,
    PcreateComponent,
    LandingComponent,
    PdetailsComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
