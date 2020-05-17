import { FilterInterface } from './coctail-filter/interfaces/filter.interface';
import { DrinkInterface } from './coctail-content/interface/drink.interface';
import { pluck, switchMap, tap, map, mergeMap, concatMap, finalize, filter, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of, from, BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CoctailsService {

    constructor(
        private http: HttpClient,
    ) { }

    title: string;
    drinks = {};
    choice = new BehaviorSubject(null);
    open = false;
    successLoad = false;

    getFilters() {
        return this.http
            .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .pipe(
                pluck('drinks'),
                tap((drinks: any) => {
                    drinks = drinks.map(drink => drink.checked = true)
                }),
                tap(res => {
                    this.choice.next(res)
                }),
                catchError(err => {
                    throw 'Error'
                }),
            )
    }


    httpMethod(param): Observable<DrinkInterface[]> {
        return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?', {
            params: {
                c: param
            }
        })
            .pipe(
                pluck('drinks'),
            )
    }

    getDrinks(drinks) {
        this.drinks = {}
        return from<FilterInterface[]>(drinks)
            .pipe(
                filter(drink => drink.checked),
                concatMap(param => {
                    this.title = param.strCategory
                    return this.httpMethod(param.strCategory)
                }),
                tap(res => this.drinks[this.title] = res),
                catchError(err => {
                    throw 'Error'
                }),
                finalize(() => this.successLoad = true),
            )
    }
}