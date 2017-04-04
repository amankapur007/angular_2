import { Component, OnInit } from '@angular/core';
import { Hero } from "app/Models/hero";
import { HeroService } from "app/services/hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
    
  title = 'Tour of heroes!';
  heroes : Hero[] = [];
  selectedHero: Hero;
  
  constructor(private heroService : HeroService, private router: Router){}
  
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
  
ngOnInit(): void {
      this.getHeroes();
    }
 goToDetail(){
  this.router.navigate(['/detail', this.selectedHero.id]);
 }

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
}
