import { Component } from '@angular/core';
import { Plat } from '../model/plat.model';
import { ActivatedRoute,Router } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Stylecuisine} from '../model/stylecuisine.model';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
})
export class AddPlatComponent {
  newPlat= new Plat;
  stylecuisines! : Stylecuisine[];
  newIdStyle! : number;

  newIdstyle! : number;
  newstylecuisine! : Stylecuisine;
  constructor(private PlatService:PlatService,
    private activatedRoute: ActivatedRoute,
      private router :Router)
      {}
      ngOnInit():void{
        this.stylecuisines=this.PlatService.listestylecuisines()
      }
  addPlat(){
    console.log(this.newPlat);
    this.PlatService.AjouterPlat(this.newPlat);
    this.newstylecuisine=this.PlatService.consulterstylecuisine(this.newIdStyle);
    this.newPlat.stylecuisine=this.newstylecuisine;
    this.router.navigate(['plats']);
    }
  

}
