import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private router: Router, private userService: UserService,private logger:LoggerService) {}

  ngOnInit() {



      //logger
      this.logger.log("Profile component");

    this.user = this.userService.userInfo;
    if (!this.user) {

      this.router.navigateByUrl('/profile');
    }
  }

  logout() {

    this.router.navigate(['/login']);
  }
}

