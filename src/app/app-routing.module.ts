import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummerCampComponent } from './pages/summer-camp/summer-camp.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '', loadChildren: () => import('../shared/index/index.module').then(m => m.IndexModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
