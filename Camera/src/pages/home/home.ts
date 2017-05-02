import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageData: string;
  @Input('useURI') useURI: Boolean = true;

  constructor(public navCtrl: NavController) {

  }




  getPicture(sourceType) {
    Camera

  }






}
