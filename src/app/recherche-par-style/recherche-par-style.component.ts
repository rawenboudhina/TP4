import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { Plat } from '../model/plat.model';
import { Stylecuisine } from '../model/stylecuisine.model';


@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html',
})
export class RechercheParStyleComponent implements OnInit {
  idstyle!: number;
  plats!: Plat[];
  stylecuisines!: Stylecuisine[];

  constructor(private platService: PlatService) {}

  ngOnInit(): void {
    this.stylecuisines = this.platService.listestylecuisines();
  }

  onChange(): void {
    this.plats = this.platService.rechercherParStyle(this.idstyle);
  }
}
