import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SantelisteComponent } from './santeliste/santeliste.component';
import { ContactComponent } from './contact/contact.component';
import { EducationlisteComponent } from './educationliste/educationliste.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { AjouterEntrepriseComponent } from './ajouter-entreprise/ajouter-entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { SantelisteuserComponent } from './santelisteuser/santelisteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    SantelisteComponent,
    ContactComponent,
    EducationlisteComponent,
    HomeadminComponent,
    UpdateEntrepriseComponent,
    AjouterEntrepriseComponent,
    EntrepriseListComponent,
    SantelisteuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
