import {Injectable} from '@angular/core';
import {Platform} from "ionic-angular";
import {OneSignal} from "@ionic-native/onesignal";


@Injectable()
export class PushNotificationService {

  constructor(private platform: Platform,
              private oneSignal: OneSignal) {
    console.log('Hello PushNotificationService Provider');
  }

  init() {
    if (this.platform.is('core')) {
      return;
    }

    this.oneSignal.startInit('5f51aa23-bb1c-4eaf-b744-ead381c6baf8', 'ANDROID_ID');

    this.oneSignal.handleNotificationOpened().subscribe((notification) => {
      alert(JSON.stringify(notification));
    });

    this.oneSignal.endInit();
  }

}
