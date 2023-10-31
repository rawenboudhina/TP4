import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { ActivatedRoute,Router } from '@angular/router';
import { PlatService } from '../services/plat.service';
<<<<<<< HEAD
import { stylecuisine } from '../model/stylecuisine.model';
=======
>>>>>>> c064ed31f49565257d3d56df06250016c3a2f392

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
})
export class AddPlatComponent {
  newPlat= new Plat;
<<<<<<< HEAD
  stylecuisines! : stylecuisine[];
  newIdStyle! : number;

  newIdstyle! : number;
  newstylecuisine! : stylecuisine;
=======
>>>>>>> c064ed31f49565257d3d56df06250016c3a2f392
  constructor(private PlatService:PlatService,
    private activatedRoute: ActivatedRoute,
      private router :Router)
      {}
<<<<<<< HEAD
      ngOnInit():void{this.stylecuisines=this.PlatService.listestylecuisines()}
  addPlat(){
    //console.log(this.newPlat);
    this.PlatService.AjouterPlat(this.newPlat);
    this.newstylecuisine=this.PlatService.consulterstylecuisine(this.newIdStyle);
    this.newPlat.stylecuisine=this.newstylecuisine;
=======
  addPlat(){
    //console.log(this.newPlat);
    this.PlatService.AjouterPlat(this.newPlat);
>>>>>>> c064ed31f49565257d3d56df06250016c3a2f392
    this.router.navigate(['plats']);
    }
    

}
