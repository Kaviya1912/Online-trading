
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ConfirmedValidator } from '../confromValidator';
import { environment } from 'src/assets/environments/environment';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private userRegUrl=environment.userUrl;

  username: string = "";
  mobileno: string = "";
  email: string = "";
  password: string = "";
  confirmpass: string = "";

  public loginForm1!: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private logger:LoggerService
  ) {}

  ngOnInit() {

      //logger
      this.logger.log("Signup component");




    this.loginForm1 = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9]{7,15}$/)]],
      mobileno: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ["", [Validators.required, Validators.pattern("^([a-z0-9\.]+)*@?(gmail)\.?(-?[com]{3})+$")]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)]],
      confirmpass: ["", [Validators.required]]
    }, { validator: ConfirmedValidator('password', 'confirmpass') });
  }

  submitForm() {
    this.http.get<any>(this.userRegUrl).subscribe(res => {
      const emailExists = res.some((result: any) => {
        return result.email === this.loginForm1.value.email;
      });
      const mobileExists = res.some((result: any) => {
        return result.mobileno === this.loginForm1.value.mobileno;
      });
      if (emailExists) {
        alert('Email already exists');
      } else if (mobileExists) {
        alert('Mobile number already exists');
      } else {
        var values = this.loginForm1.value;
        Object.assign(values, { role: 'user' });
        this.http.post<any>(this.userRegUrl, values).subscribe(data => {
          alert('Successfully Registered');
          this.userService.setUserInfo(values);
          this.router.navigateByUrl('/login');
        });
      }
    });
  }
}
