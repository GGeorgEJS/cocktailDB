import { CoctailsRoutingModule } from './coctails-routing.module';
import { CoctailsComponent } from './coctails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoctailFilterComponent } from './coctail-filter/coctail-filter.component';
import { CoctailContentComponent } from './coctail-content/coctail-content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CoctailsComponent,
        CoctailFilterComponent,
        CoctailContentComponent
    ],
    imports: [
        CommonModule,
        CoctailsRoutingModule,
        FormsModule,
    ],
})
export class CoctailsModule { }