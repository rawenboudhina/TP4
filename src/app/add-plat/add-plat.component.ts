import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { ActivatedRoute,Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
})
export class AddPlatComponent {
  newPlat= new Plat;
  constructor(private PlatService:PlatService,
    private activatedRoute: ActivatedRoute,
      private router :Router)
      {}
  addPlat(){
    //console.log(this.newPlat);
    this.PlatService.AjouterPlat(this.newPlat);
    this.router.navigate(['plats']);
    }
    

}
