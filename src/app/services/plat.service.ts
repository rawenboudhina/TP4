import { Injectable } from '@angular/core';
import { Plat } from '../model/plat.model';
import { stylecuisine } from '../model/stylecuisine.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  plat! : Plat;

  plats :Plat[];
  stylecuisines! :stylecuisine[];

  constructor() { 
    this.stylecuisines=[ {idstyle : 1, nomstyle : "tunisienne"},
    {idstyle : 2, nomstyle : "italienne"}]
    this.plats = [
    {idPlat : 1, nomPlat : "SPAGHETTI", prixPlat : 30000, dateCreation : new Date("01/14/2011"),
        stylecuisine:{idstyle : 2, nomstyle : "italienne"}},
    {idPlat : 2, nomPlat : "PIZZA", prixPlat : 40000, dateCreation : new Date("01/14/2011"),stylecuisine:{idstyle : 2, nomstyle : "italienne"}},
    {idPlat : 3, nomPlat : "COUSCOUS", prixPlat : 27500, dateCreation : new Date("01/14/2011"),stylecuisine:{idstyle : 1, nomstyle : "tunisienne"}},
    {idPlat : 4, nomPlat : "TAGLIATELLI", prixPlat :55000, dateCreation : new Date("01/14/2011"),stylecuisine:{idstyle : 2, nomstyle : "italienne"}},
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
  listestylecuisines():stylecuisine[] {
    return this.stylecuisines;
    }
  consulterstylecuisine(id:number): stylecuisine{ 
    return this.stylecuisines.find(style => style.idstyle == id)!;
    }
      
}
