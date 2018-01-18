import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name = 'Billiards & Darts Web Site';
  public github = 'https://github.com/b3kndev';
  public url = 'https://b3kndev.com';
  public showDevModule: boolean = environment.showDevModule;

  constructor() {}

  public ngOnInit() {
    console.log('Initial App Started');
  }
}