import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

export const ROOT_SELECTOR = 'app';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header>
      <div class="container">
        <div class="title-holder">
          <span class="title">Illustrious Online</span>
        </div>
        <nav>
          <a [routerLink]=" ['./'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            Home
          </a>
          <a [routerLink]=" ['./about'] "
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            About
          </a>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Illustrious Services by <a [href]="url">@b3kNDev</a></span><br />
      <a [href]="github">@b3kN github</a>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public name = 'Illustrious Online';
  public url = 'https://b3kndev.com';
  public github = 'https://www.github.com/b3kN/illustrious-site';
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
