import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  plat! : Plat;

  plats :Plat[];

  constructor() { this.plats = [
    {idPlat : 1, nomPlat : "SPAGHETTI", prixPlat : 30000, dateCreation : new Date("01/14/2011")},
    {idPlat : 2, nomPlat : "PIZZA", prixPlat : 40000, dateCreation : new Date("01/14/2011")},
    {idPlat : 3, nomPlat : "COUSCOUS", prixPlat : 27500, dateCreation : new Date("01/14/2011")},
    {idPlat : 4, nomPlat : "TAGLIATELLI", prixPlat :55000, dateCreation : new Date("01/14/2011")},
     ];
  }
  listePlats():Plat[] {
    return this.plats;
    }
    AjouterPlat( pl: Plat){
      this.plats.push(pl);
      }
      supprimerPlat( pl: Plat){
        //supprimer le plat pl du tableau plats
        const index = this.plats.indexOf(pl, 0);
        if (index > -1) {
        this.plats.splice(index, 1);
        }
        }
        consulterPlat(id:number): Plat{
          return this.plats.find(p => p.idPlat == id)!;
          
          }
          updatePlat(p:Plat)
{
          // console.log(p);
          this.supprimerPlat(p);
          this.AjouterPlat(p);
          this.trierPlats();
}
trierPlats(){
  this.plats = this.plats.sort((n1,n2) => {
  if (n1.idPlat! > n2.idPlat!) {
  return 1;
  }
  if (n1.idPlat! < n2.idPlat!) {
  return -1;
  }
  return 0;
  });
  }
      
}
