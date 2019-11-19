import { Component, OnInit, Input } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faDark = faMoon;
  faLight = faSun;

  isDark = false;

  constructor() { }

  ngOnInit() {
  }

  darkMode(){
    console.log('sup')
    this.isDark = !this.isDark;
    
  }
}
