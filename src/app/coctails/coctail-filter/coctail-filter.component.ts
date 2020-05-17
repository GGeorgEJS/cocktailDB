import { FilterInterface } from './interfaces/filter.interface';
import { CoctailsService } from './../coctails.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';


@Component({
  selector: 'app-coctail-filter',
  templateUrl: './coctail-filter.component.html',
  styleUrls: ['./coctail-filter.component.sass']
})
export class CoctailFilterComponent implements OnInit, OnDestroy {

  filters: FilterInterface[];

  constructor(
    public coctailsService: CoctailsService,
  ) { }

  ngOnInit(): void {
    this.coctailsService.getFilters()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe(
        res => this.filters = res,
        err => console.log(err)
      );
  }

  ngOnDestroy() { }

  onModify(filter: FilterInterface): void {
    this.filters.map(item => {
      if (item.strCategory === filter.strCategory) {
        return item.checked = !item.checked
      }
      return
    })
  }

  onApply(): void {
    this.coctailsService.successLoad = false;
    this.coctailsService.choice.next(this.filters);
  }

}
