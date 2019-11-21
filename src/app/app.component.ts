import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './material/service/sidenav.service';
import { MatSidenav } from '@angular/material';
import { faPhone, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', {static : true}) public sidenav : MatSidenav;

  faPerson = faUser;
  faPhone = faPhone;
  faCalendar = faCalendar

  constructor(
    private sidenavService: SidenavService) { }
    
    ngOnInit(): void {
      this.sidenavService.setSidenav(this.sidenav);
    }
    
}
