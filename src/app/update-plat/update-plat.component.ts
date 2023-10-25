import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Plat } from '../model/plat.model';
<<<<<<< HEAD
import { stylecuisine } from '../model/stylecuisine.model';
=======
>>>>>>> 982d0a1 (TP4 projet angular)

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
})
export class UpdatePlatComponent {
  currentPlat=new Plat();
<<<<<<< HEAD
  styledecuisines! : stylecuisine[];
  updatedstyleId! : number;

=======
>>>>>>> 982d0a1 (TP4 projet angular)
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private platService: PlatService){}
    ngOnInit() {
<<<<<<< HEAD
      //console.log(this.activatedRoute.snapshot.params['id']);
      this.currentPlat = this.platService.consulterPlat(this.activatedRoute.snapshot. params['id']);
      this.styledecuisines=this.platService.listestylecuisines();
      this.updatedstyleId=this.currentPlat.stylecuisine.idstyle;
      //console.log(this.currentPlat);
}
updatePlat(){
    this.currentPlat.stylecuisine=this.platService.consulterstylecuisine(this.updatedstyleId);
=======
      console.log(this.activatedRoute.snapshot.params['id']);
      this.currentPlat = this.platService.consulterPlat(this.activatedRoute.snapshot. params['id']);
      console.log(this.currentPlat);
}
updatePlat(){

>>>>>>> 982d0a1 (TP4 projet angular)
  //console.log(this.currentPlat);
  this.platService.updatePlat(this.currentPlat);
  this.router.navigate(['plats']);

}}
