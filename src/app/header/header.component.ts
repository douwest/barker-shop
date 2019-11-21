import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from '../material/service/sidenav.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  open = false;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }


  toggleRightSidenav() {
    this.sidenavService.toggle();
    this.animate();
  }

  animate() {

    console.log(this.open);
    let icon = document.getElementById('img');

    if (open) {
      icon.className = 'icon';
    } else {
      icon.className = 'icon open';
    }
    this.open = !this.open;

    console.log(icon);
  }
}
