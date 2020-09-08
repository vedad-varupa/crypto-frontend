import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EuklidComponent } from './euklid/euklid.component';
import { RsaComponent } from './rsa/rsa.component';
import { NavbartestComponent } from './navbartest/navbartest.component';
import { ExteuklidComponent } from './exteuklid/exteuklid.component';
import { FermatComponent } from './fermat/fermat.component';
import { MilerComponent } from './miler/miler.component';
import { MultiplicComponent } from './multiplic/multiplic.component';
import { DivisionComponent } from './division/division.component';
import { InverseComponent } from './inverse/inverse.component';
import { ExpComponent } from './exp/exp.component';
import { HkriptoComponent } from './hkripto/hkripto.component';
import { TeorijaComponent } from './teorija/teorija.component';
import { AritmetikaComponent } from './aritmetika/aritmetika.component';
import { GrupaComponent } from './grupa/grupa.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { KvadrirajComponent } from './kvadriraj/kvadriraj.component'
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { PublickeyComponent } from './publickey/publickey.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EuklidComponent,
    RsaComponent,
    NavbartestComponent,
    ExteuklidComponent,
    FermatComponent,
    MilerComponent,
    MultiplicComponent,
    DivisionComponent,
    InverseComponent,
    ExpComponent,
    HkriptoComponent,
    TeorijaComponent,
    AritmetikaComponent,
    GrupaComponent,
    FooterComponent,
    KvadrirajComponent,
    ContactComponent,
    PublickeyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
