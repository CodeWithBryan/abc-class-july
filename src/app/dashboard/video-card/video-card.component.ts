import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input() video: Video | undefined;
  @Input() isSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
