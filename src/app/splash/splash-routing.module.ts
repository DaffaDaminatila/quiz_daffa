import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashPage } from './splash.page';

const routes: Routes = [
  {
    path: '',
    component: SplashPage,
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('../folder/folder.module').then((m) => m.FolderPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashPageRoutingModule {}
