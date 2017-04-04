import { Injectable } from '@angular/core';
import { Hero } from "app/Models/hero";
import { HEROES } from './../Models/mock-heroes';
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}
