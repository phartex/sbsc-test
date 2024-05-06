import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './component/map/map.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/dd', pathMatch: 'full'
  },
  {
    path:'home',
    component: MapComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
