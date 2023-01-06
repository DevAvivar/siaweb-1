import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-read-failure',
  templateUrl: './dialog-read-failure.component.html',
  styleUrls: ['./dialog-read-failure.component.scss']
})
export class DialogReadFailureComponent implements OnInit {

  @Input() content!: String;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {device: any},) { }

  ngOnInit(): void {

    this.content = "ATENÇÃO, 5 FALHAS DE LEITURA  NA "+this.data.device.name;
  }

}
