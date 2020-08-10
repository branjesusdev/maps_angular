import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/**
*PARTIALS
**/
import { DefaultComponent } from './layouts/default/default.component';

/**
*MODULES
**/
import { MapsComponent } from 'src/app/modules/maps/maps.component';

const routes: Routes = [
  { 
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: MapsComponent },
      { path: '**', redirectTo : '/', pathMatch : 'full' },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}

