import { CoctailsComponent } from './coctails.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CoctailContentComponent } from './coctail-content/coctail-content.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'bar',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CoctailsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoctailsRoutingModule { }