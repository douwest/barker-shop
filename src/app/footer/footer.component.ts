import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { StyleManagerService } from '../material/service/style.manager.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faDark = faMoon;
  faLight = faSun;

  isDark = false;

  constructor(private styleManager : StyleManagerService) { }

  ngOnInit() {
  }

  darkMode(){
    if(this.isDark){
      this.styleManager.setStyle('key', 'href');
    } else {
      this.styleManager.setStyle('key', 'href');
    }
    this.isDark = !this.isDark;
  }
}
