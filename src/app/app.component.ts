import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/folder/profile' },
    { title: 'Mata Kuliah', url: '/folder/MataKuliah/matakuliah' },
    { title: 'Jadwal', url: '/folder/Jadwal/jadwal' },
    { title: 'Nilai', url: '/folder/Nilai/nilai' },
    { title: 'Kartu Rencana Studi', url: '/folder/Kartu Rencana Studi/krs' },
    { title: 'Keuangan', url: '/folder/Keuangan/keuangan' },
  ];
  constructor(public router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.router.navigateByUrl('splash');
  }
}
