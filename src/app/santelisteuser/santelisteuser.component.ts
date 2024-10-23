
import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-santelisteuser',
  templateUrl: './santelisteuser.component.html',
  styleUrls: ['./santelisteuser.component.css']
})
export class SantelisteuserComponent implements OnInit { 




  entreprise!: Entreprise[];
  // Tableau pour stocker toutes les entreprises récupérées depuis l'API
  filteredEntreprises: any[] = []; // Tableau filtré d'entreprises à afficher après une recherche
  keyword: string = ''; // Terme de recherche saisi par l'utilisateur
  selectedEntreprise: any; 
  isViewOpen = false; 

 
  constructor(private entrepriseService: EntrepriseService,
    private router: Router, private location: Location, private http: HttpClient) { }

  ngOnInit(): void {
    this.getEntreprises();this.loadEntreprises();
  }

  private getEntreprises() {
    this.entrepriseService.getEntreprisesList().subscribe(data => {
      this.entreprise = data;
    });
  }
  loadEntreprises() {
    // Fonction pour charger les entreprises depuis l'API en utilisant HttpClient
    this.http.get<any[]>('http://localhost:8080/api/entreprises')
      .subscribe(data => {
        this.entreprise = data; // Assignation des données d'entreprise récupérées
        this.filteredEntreprises = this.entreprise; // Initialisation du tableau filtré avec toutes les entreprises au départ
      });
  }
  searchCompanies(event: Event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    this.filteredEntreprises = this.entreprise.filter(e =>
      e.nom.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }
  updateEntreprise(id?: number) {
    this.router.navigate(['update-entreprise', id]);

  }

//err
  deleteEntreprise(id: number) {
    this.entrepriseService.deleteEntreprise(id).subscribe(
        () => {
          console.log('Suppression réussie.');
            this.getEntreprises();
        },
        (error) => {
          this.getEntreprises();
            console.error('Erreuro de suppression', error);
        }
    );
}



  viewEntreprise(entreprise: any) {
    this.entrepriseService.getEntrepriseById(entreprise.id)
      .subscribe(response => {
        this.selectedEntreprise = response;
        this.isViewOpen = true;
        console.log("isViewOpen:", this.isViewOpen);
      });
  }
  closeModalAndReturn() {
    this.isViewOpen = false;
    this.location.back(); 
  }
}