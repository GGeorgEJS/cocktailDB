import { CoctailsService } from './coctails.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-coctails',
  templateUrl: './coctails.component.html',
  styleUrls: ['./coctails.component.sass']
})
export class CoctailsComponent implements OnInit {

  constructor(
    public coctailsService: CoctailsService
  ) { }

  ngOnInit() {
  }
}
