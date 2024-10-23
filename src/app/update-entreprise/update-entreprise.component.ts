
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../entreprise.service';
import { Entreprise } from '../entreprise';


@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit{ 



 id!: number;
 entr: Entreprise = new Entreprise();
 isUpdating: boolean = false;

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private entrepriseService:EntrepriseService
 ) { }

  ngOnInit(): void {
    this.entr = new Entreprise();
   
    this.id = this.route.snapshot.params['id'];
   if(this.id ){
    this.entrepriseService.getEntrepriseById(this.id).subscribe(data => {
      console.log(data);
      this.entr =data;
    }, error => console.log(error));
  
  }
  }

  updateEntreprise() {
    this.isUpdating = true;
    
    
    this.entrepriseService.updateEntreprise(this.id, this.entr).subscribe(
      () => {
       
        this.router.navigate(['/entreprise-list']);
      },
      (error) => {
        
        console.error('Erreur lors de la mise à jour de l\'entreprise :', error);
        this.isUpdating = false;
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
 
  onsubmit(){
    console.log(this.entr);
    this.saveEntreprise();
  }

  goToEntrepriseList(){
  this.router.navigate(['/santeliste']);
  }

}

