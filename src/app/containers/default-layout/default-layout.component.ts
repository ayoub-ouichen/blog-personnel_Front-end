import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { SAuthentificationService } from 'src/app/services/authService/s-authentification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router: Router, private authServ: SAuthentificationService) {

  }

  seDeconnecter(){
    this.authServ.removeToken();
    this.router.navigate(['/login']);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
