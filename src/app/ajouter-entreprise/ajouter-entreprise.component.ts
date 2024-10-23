
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../entreprise.service';
import { Entreprise } from '../entreprise';

@Component({
  selector: 'app-ajouter-entreprise',
  templateUrl: './ajouter-entreprise.component.html',
  styleUrls: ['./ajouter-entreprise.component.css']
})
export class AjouterEntrepriseComponent  implements OnInit {
  //articles!: Article[];
  Id!: number;
  //product: any = {}; 
 

  
   entr: Entreprise = new Entreprise();
  isCreating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entrepriseService: EntrepriseService
  ) { }

  ngOnInit(): void {
   
   }
  createEntreprise() {
    this.isCreating = true;
    
    
    this.entrepriseService.createEntreprise(this.entr).subscribe(
      () => {
        
        this.router.navigate(['/entreprise-list']);
      },
      (error) => {
        
        console.error('Erreur lors de la creation de l\'entreprise :', error);
        this.isCreating = false;
      }
    );
  }

  saveEntreprise(){
    this.entrepriseService.createEntreprise(this.entr).subscribe(data=>{
      console.log(data);
      this.goToEntrepriseList();
    },
      error => console.log(error));
    
  }
  goToEntrepriseList(){
    this.router.navigate(['/santeliste']);
  }
  onsubmit(){
    console.log(this.entr);
    this.saveEntreprise();
  }
  
}
