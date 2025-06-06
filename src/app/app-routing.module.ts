import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InsideDoorsComponent } from './offers/inside-doors/inside-doors.component';
import { OutsideDoorsComponent } from './offers/outside-doors/outside-doors.component';
import { PlanksComponent } from './offers/planks/planks.component';
import { TablesComponent } from './offers/tables/tables.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'gallery', component: GalleryComponent },
  // {path: 'outside-doors', component: OutsideDoorsComponent},
  // {path: 'planks', component: PlanksComponent},
  // {path: 'tables', component: TablesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
