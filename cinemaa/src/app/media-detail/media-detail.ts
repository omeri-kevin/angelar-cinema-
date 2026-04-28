import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Media } from '../models/media-model';
@Component({
  selector: 'app-media-detail',
  imports: [],
  templateUrl: './media-detail.html',
  styleUrl: './media-detail.css',
})
export class MediaDetail {
  @Input() media: Media | undefined;
}
