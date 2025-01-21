import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '', loadChildren: () => import('../shared/index/index.module').then(m => m.IndexModule) },
  { path: '**', redirectTo: 'error' },  // 404 page fallback  about page show..
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
