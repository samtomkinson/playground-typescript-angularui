import { Component } from '@angular/core';
import { HomeToolsService } from './hometools/hometools.service';
import { Hero } from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeToolsValues: Hero[];

  constructor(private homeToolsService: HomeToolsService) {}

  getHomeToolsValues(): void {
      this.homeToolsService.getValues().subscribe(
        data => this.homeToolsValues = data
      );
  }
}
