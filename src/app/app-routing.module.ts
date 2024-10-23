import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SantelisteComponent } from './santeliste/santeliste.component';
import { SantelisteuserComponent } from './santelisteuser/santelisteuser.component';
import {EducationlisteComponent} from './educationliste/educationliste.component';
import { ContactComponent } from './contact/contact.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { UpdateEntrepriseComponent} from './update-entreprise/update-entreprise.component';
import { AjouterEntrepriseComponent } from './ajouter-entreprise/ajouter-entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'homeadmin', component: HomeadminComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'santeliste', component: SantelisteComponent},
  {path: 'santelisteuser', component: SantelisteuserComponent},
 {path: 'educationliste', component: EducationlisteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'update-entreprise/:id', component:UpdateEntrepriseComponent},
  {path: 'ajouter-entreprise', component:AjouterEntrepriseComponent},
  {path: 'entreprise-list',component:EntrepriseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

