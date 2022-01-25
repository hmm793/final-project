/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'headmaster-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  opened = false;

  showTeacher = false;
  showStudent = false;
  showParent = false;
  showClass = false;

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {}
  logoutUser() {
    this.authorizationService.logout();
  }
}
