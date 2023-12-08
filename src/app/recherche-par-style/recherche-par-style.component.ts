import { Component } from '@angular/core';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html',
})
export class RechercheParStyleComponent {
  constructor(private PlatService:PlatService){}
  idstyle!:number;
ngOnInit():void{}
}
