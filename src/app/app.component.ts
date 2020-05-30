import { Component, AfterViewInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  sidebar: Element;
  ngAfterViewInit(){
    this.sidebar = document.querySelector('#sidebar');
    this.sidebar.classList.toggle('active');
  }
  onToggleClick(event: Event) {
    this.sidebar.classList.toggle('active');
  }

}
