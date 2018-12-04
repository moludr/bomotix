import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})

export class VideolistComponent implements OnInit {
  @Input() uploadFile: boolean;
  constructor() { }

  ngOnInit() {
  }

}
