import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EuklidComponent } from './euklid/euklid.component';
import{ RsaComponent } from './rsa/rsa.component';
import{ ExteuklidComponent } from './exteuklid/exteuklid.component';
import { FermatComponent} from './fermat/fermat.component';
import { MilerComponent} from './miler/miler.component';
import { MultiplicComponent} from './multiplic/multiplic.component';
import { DivisionComponent} from './division/division.component';
import { InverseComponent} from './inverse/inverse.component';
import { ExpComponent} from './exp/exp.component';
import { HkriptoComponent} from './hkripto/hkripto.component';
import { TeorijaComponent} from './teorija/teorija.component';
import { AritmetikaComponent} from './aritmetika/aritmetika.component';
import { GrupaComponent} from './grupa/grupa.component';
import { KvadrirajComponent} from './kvadriraj/kvadriraj.component';
import { ContactComponent } from './contact/contact.component';
import { PublickeyComponent } from './publickey/publickey.component';
  


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"euklid", component: EuklidComponent},
  {path:"wedo", component: HomeComponent},
  {path:"rsa", component: RsaComponent},
  {path:"exteuklid", component: ExteuklidComponent},
  {path:"fermat", component: FermatComponent},
  {path:"miler", component: MilerComponent},
  {path:"multiplic", component: MultiplicComponent},
  {path:"division", component: DivisionComponent},
  {path:"inverse", component: InverseComponent},
  {path:"exp", component: ExpComponent},
  {path:"hkripto", component: HkriptoComponent},
  {path:"teorija", component: TeorijaComponent},
  {path:"aritmetika", component: AritmetikaComponent},
  {path:"grupa", component: GrupaComponent},
  {path:"kvadriraj", component:KvadrirajComponent},
  {path:"contact", component:ContactComponent},
  {path: "publickey", component:PublickeyComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
