import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Plat } from '../model/plat.model';
import { Stylecuisine} from '../model/stylecuisine.model';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
})
export class UpdatePlatComponent {
  currentPlat=new Plat();
  styledecuisines! : Stylecuisine[];
  updatedstyleId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private platService: PlatService){}
    ngOnInit() {
      //console.log(this.activatedRoute.snapshot.params['id']);
      this.currentPlat = this.platService.consulterPlat(this.activatedRoute.snapshot. params['id']);
      this.styledecuisines=this.platService.listestylecuisines();
      this.updatedstyleId=this.currentPlat.stylecuisine.idstyle;
      //console.log(this.currentPlat);
}
updatePlat(){
  this.currentPlat.stylecuisine=this.platService.consulterstylecuisine(this.updatedstyleId);
  //console.log(this.currentPlat);
 this.platService.updatePlat(this.currentPlat); 
  this.router.navigate(['plats']);

}}
