import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { OutsideDoorsComponent } from './offers/outside-doors/outside-doors.component';
import { InsideDoorsComponent } from './offers/inside-doors/inside-doors.component';
import { TablesComponent } from './offers/tables/tables.component';
import { PlanksComponent } from './offers/planks/planks.component';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './service/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    OutsideDoorsComponent,
    InsideDoorsComponent,
    TablesComponent,
    PlanksComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ImageModule,
    ToastModule,
    ButtonModule,
    MenubarModule,
    GalleriaModule
  ],
  providers: [ PhotoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
