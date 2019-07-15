import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogPage } from '../dialog/dialog.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public complexProp: Array<{name: string, number: number, tags: string[]}>;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    this.complexProp = [
      {
        name: 'Yoda',
        number: 101,
        tags: [
          'force',
          'green'
        ]
      },
      {
        name: 'Obi-wan',
        number: 101,
        tags: [
          'force',
          'blue'
        ]
      }
    ];
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DialogPage,
      componentProps: {
        complexProp: this.complexProp
      }
    });
    return await modal.present();
  }
}
