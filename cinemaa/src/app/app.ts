import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaList } from './media-list/media-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MediaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cinemaa');
}
