import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'coctails',
    pathMatch: 'full',
  },
  {
    path: 'coctails',
    loadChildren: () => import('./coctails/coctails.module').then(m => m.CoctailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
