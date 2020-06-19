import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

  }

  login() {
    const { username, password } = this.loginFormGroup.value
    this.http.post("https://form-monitor.herokuapp.com/user/login", { username, password }).subscribe((res: any) => {
      const { token } = res;
      localStorage.setItem('token', token);
      this.router.navigate(['/landing'])


    })


  }

}
