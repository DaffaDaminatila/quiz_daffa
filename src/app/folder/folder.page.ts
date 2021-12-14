import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import {
  ELocalNotificationTriggerUnit,
  LocalNotifications,
} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  scheduled = [];
  public folder: string;

  constructor(private localNotifications: LocalNotifications) {}

  //constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  alert() {
    this.localNotifications.schedule({
      id: 1,
      title: 'attention',
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 3000) },
      led: 'FF0000',
      sound: null,
    });
  }
}
