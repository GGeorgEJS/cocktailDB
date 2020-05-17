import { DrinkInterface } from './interface/drink.interface';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap, tap, filter } from 'rxjs/operators';
import { CoctailsService } from './../coctails.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coctail-content',
  templateUrl: './coctail-content.component.html',
  styleUrls: ['./coctail-content.component.sass']
})
export class CoctailContentComponent implements OnInit, OnDestroy {

  drinks: Object;

  constructor(
    public coctailsService: CoctailsService,
  ) { }

  ngOnInit() {
    this.coctailsService.choice
      .pipe(
        untilDestroyed(this),
        filter(res => !!res),
        switchMap(res => this.coctailsService.getDrinks(res)),
      )
      .subscribe(
        res => this.drinks = this.coctailsService.drinks,
        err => console.log(err),
      )
  }

  ngOnDestroy() { }

  showMenu() {
    this.coctailsService.open = !this.coctailsService.open;
  }

}
