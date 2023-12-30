import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  retUrl: any = "login";

  public loginForm2!: FormGroup;
  constructor(
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private logger:LoggerService
  ) {}

  ngOnInit() {
    //logger
    this.logger.log("Login component");


    this.loginForm2 = this.fb.group({
      email: ["", [Validators.required, Validators.pattern("^([a-z0-9\.]+)*@?(gmail)\.?(-?[com]{3})+$")]],
      password: ["", [Validators.required]]
    });

    this.route.queryParamMap.subscribe(parama => {
      this.retUrl = parama.get('retUrl');
      console.log("LoginComponent/ngOnInit", this.retUrl);
    });
  }

  login3() {
    this.http.get<any>("http://localhost:3000/users").subscribe(data => {
      const user = data.find((a: any) => {
        return a.email === this.loginForm2.value.email && a.password === this.loginForm2.value.password;
      });
      if (user == null) {
        alert("Invalid Email or Password!!");
      } else if (user.email === 'admin21@gmail.com' && user.password === 'Admin@21') {
        alert("You are successfully logged in as Admin");
        this.router.navigate(['/admin']);
      } else if (user.password === this.loginForm2.value.password) {
        alert("Login successful!!");
        this.userService.setUserInfo(user);
        this.router.navigate(['/home']);
      } else {
        alert("Invalid credentials");
      }
    });
  }
}
