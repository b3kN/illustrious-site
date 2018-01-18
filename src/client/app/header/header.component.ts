import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'header-bar',
  styleUrls: [ './header.component.css' ],
  templateUrl: './header.component.html',
  host: {
    '(window:scroll)': 'headerSettings($event)'
  }
})
export class HeaderComponent implements OnInit {
  public isHeaderActive: boolean = false;
  public currentPosition: number = 0;
  public changePosition: number = 60;
  
  constructor() {}

  public ngOnInit() {
    console.log('hello `Header` component');
  }
  
  headerSettings(evt) {
    this.currentPosition = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    
    if(this.currentPosition >= this.changePosition) {
      this.isHeaderActive = true;
    } else {
      this.isHeaderActive = false;
    }
  }
}
