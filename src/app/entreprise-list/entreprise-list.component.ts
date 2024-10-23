
import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../entreprise';
import { EntrepriseService } from '../entreprise.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {

  entreprises!: Entreprise[];

  selectedEntreprise: any; 
  isViewOpen = false; 

 
  constructor(private entrepriseService: EntrepriseService,
    private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.getEntreprises();
  }

  private getEntreprises() {
    this.entrepriseService.getEntreprisesList().subscribe(data => {
      this.entreprises = data;
    });
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