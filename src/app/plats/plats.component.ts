import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
})
export class PlatsComponent {
  plats : Plat[];
    constructor(private platService: PlatService )  {
      this.plats=platService.listePlats();
      
      }
      supprimerPlat(p: Plat)
    {
//console.log(p);
    let conf = confirm("Etes-vous sûr ?");
         if (conf)        
          this.platService.supprimerPlat(p);
 }
 
  }
