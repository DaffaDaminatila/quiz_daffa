import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'matakuliah',
    loadChildren: () =>
      import('./matakuliah/matakuliah.module').then(
        (m) => m.MatakuliahPageModule
      ),
  },
  {
    path: 'jadwal',
    loadChildren: () =>
      import('./jadwal/jadwal.module').then((m) => m.JadwalPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'nilai',
    loadChildren: () =>
      import('./nilai/nilai.module').then((m) => m.NilaiPageModule),
  },
  {
    path: 'krs',
    loadChildren: () => import('./krs/krs.module').then((m) => m.KrsPageModule),
  },
  {
    path: 'keuangan',
    loadChildren: () =>
      import('./keuangan/keuangan.module').then((m) => m.KeuanganPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
