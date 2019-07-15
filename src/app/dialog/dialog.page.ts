import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
})
export class DialogPage implements OnInit {

  @Input() complexProp: Array<{name: string, number: number, tags: string[]}>;

  constructor(protected cd: ChangeDetectorRef, public modalController: ModalController) { }

  ngOnInit() {
    if (this.complexProp) {
      this.cd.markForCheck();
      console.log('dialog page on init', this.complexProp);
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
