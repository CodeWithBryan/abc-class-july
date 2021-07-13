import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  constructor() {}

  selectedVideo: string | undefined;

  @Input() videos: Video[] = [];

  ngOnInit(): void {}
}
